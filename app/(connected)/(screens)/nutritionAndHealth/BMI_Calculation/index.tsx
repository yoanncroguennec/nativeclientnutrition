import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-root-toast'
import { router } from 'expo-router'
import TabScreen from './tabScreen/TabScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export type IMCRecord = {
  id: string
  imc: number
  poids: string
  taille: string
  date: string // ISO format
  sex: boolean // true = homme, false = femme
}

export default function BMI_Calculation_Screen() {
  const [poids, setPoids] = useState<string>('')
  const [taille, setTaille] = useState<string>('')
  const [sex, setSex] = useState<boolean>(true)
  const [imc, setImc] = useState<number | null>(null)
  const [historique, setHistorique] = useState<IMCRecord[]>([])

  useEffect(() => {
    chargerHistorique()
  }, [])

  const getDateSansHeure = (isoString: string): string =>
    new Date(isoString).toISOString().split('T')[0]

  const showSuccessToast = (message: string) => {
    Toast.show(message, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      backgroundColor: '#4caf50',
      textColor: 'white',
      shadow: true,
      animation: true,
      shadowColor: 'black',
    })
  }

  const chargerHistorique = async () => {
    try {
      const data = await AsyncStorage.getItem('@historique_imc')
      if (data) {
        setHistorique(JSON.parse(data))
      }
    } catch (e) {
      console.error('Erreur de chargement AsyncStorage:', e)
    }
  }

  const enregistrerHistorique = async (record: IMCRecord) => {
    try {
      const newHistorique = [record, ...historique].slice(0, 10)
      setHistorique(newHistorique)
      await AsyncStorage.setItem(
        '@historique_imc',
        JSON.stringify(newHistorique),
      )
      showSuccessToast("IMC enregistré pour aujourd'hui ✅")
    } catch (e) {
      console.error('Erreur de sauvegarde AsyncStorage:', e)
    }
  }

  const calculerIMC = () => {
    const poidsNum = parseFloat(poids.replace(',', '.'))
    const tailleNum = parseFloat(taille.replace(',', '.'))

    if (poidsNum > 0 && tailleNum > 0) {
      const resultat = poidsNum / (tailleNum * tailleNum)
      const imcArrondi = parseFloat(resultat.toFixed(2))
      setImc(imcArrondi)

      const today = getDateSansHeure(new Date().toISOString())

      const dejaEnregistreAujourdHui = historique.some(
        item => getDateSansHeure(item.date) === today,
      )

      if (dejaEnregistreAujourdHui) {
        Alert.alert('Info', "Un IMC a déjà été enregistré aujourd'hui.")
        return
      }

      const newRecord: IMCRecord = {
        id: Date.now().toString(),
        imc: imcArrondi,
        poids,
        taille,
        date: new Date().toISOString(),
        sex,
      }

      enregistrerHistorique(newRecord)
    } else {
      setImc(null)
      alert('Merci de saisir des valeurs valides')
    }
  }

  const getIMCColor = (value: number): string => {
    if (value < 18.5) return '#2196f3'
    if (value < 25) return '#4caf50'
    if (value < 30) return '#ff9800'
    return '#f44336'
  }

  const getIMCLabel = (value: number, sex: boolean): string => {
    if (sex) {
      // Homme
      if (value < 18.5) return 'Maigreur'
      if (value < 25) return 'Normal'
      if (value < 30) return 'Surpoids'
      return 'Obésité'
    } else {
      // Femme
      if (value < 18.5) return 'Maigreur'
      if (value < 24) return 'Normal'
      if (value < 29) return 'Surpoids'
      return 'Obésité'
    }
  }

  const formatDateForLabel = (isoDate: string): string => {
    const date = new Date(isoDate)
    if (isNaN(date.getTime())) return '??/??'
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
    })
  }

  async function deleteItem(id: string) {
    const nouveauHistorique = historique.filter(item => item.id !== id)
    setHistorique(nouveauHistorique)
    await AsyncStorage.setItem(
      '@historique_imc',
      JSON.stringify(nouveauHistorique),
    )
    showSuccessToast('IMC supprimé ✅')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={() =>
          router.push(
            '/(connected)/(screens)/(tabs)/nutritionAndHealth/breatheInAndBreathOut',
          )
        }
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Image
          source={require('@/assets/icons/(connected)/screens/(tabs)/nutritionAndHealth/icon_breatheInAndBreatheOut_1.png')}
          style={{ height: 60, width: 60 }}
        />
        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
          Inspiration / Expiration
        </Text>
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          height: 100,
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          Calculateur IMC
        </Text>
        <TouchableOpacity
          onPress={() =>
            router.push(
              '/(connected)/(screens)/nutritionAndHealth/waterTracker',
            )
          }
          style={{
            position: 'absolute',
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Image
            source={require('@/assets/imgs/(tabs)/nutritionAndHealth/logoTrackerWater_removebg.png')}
            style={{ height: 60, width: 60 }}
          />
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
            Suivi hydrique
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Poids en kg"
        keyboardType="numeric"
        value={poids}
        onChangeText={setPoids}
      />

      <TextInput
        style={styles.input}
        placeholder="Taille en m (ex: 1.75)"
        keyboardType="numeric"
        value={taille}
        onChangeText={setTaille}
      />

      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}
      >
        <Text style={{ marginRight: 10, fontSize: 16 }}>Sexe :</Text>
        <Text style={{ marginRight: 10, fontWeight: 'bold' }}>
          {sex ? 'Homme' : 'Femme'}
        </Text>
        <Switch value={sex} onValueChange={setSex} />
      </View>

      <Button title="Calculer" onPress={calculerIMC} />

      {imc && (
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <AnimatedCircularProgress
            size={220}
            width={25}
            fill={(imc / 40) * 100}
            tintColor={getIMCColor(imc)}
            backgroundColor="#e0e0e0"
            rotation={225}
            arcSweepAngle={270}
            lineCap="round"
          >
            {() => (
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.imcText}>IMC: {imc}</Text>
                <Text style={[styles.category, { color: getIMCColor(imc) }]}>
                  {getIMCLabel(imc, sex)}
                </Text>
              </View>
            )}
          </AnimatedCircularProgress>
        </View>
      )}

      {historique.length > 0 && (
        <View style={styles.historyContainer}>
          <View
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.historyTitle}>Historique</Text>

            <TouchableOpacity
              onPress={async () => {
                await AsyncStorage.removeItem('@historique_imc')
                setHistorique([])
              }}
            >
              <Text style={{ fontSize: 25 }}>🗑️</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={historique}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.historyItem}>
                <Text style={styles.historyText}>
                  {formatDateForLabel(item.date)} – IMC: {item.imc} -{' '}
                  {item.poids} kg ({item.sex ? 'Homme' : 'Femme'}) -{' '}
                  {getIMCLabel(item.imc, item.sex)}
                </Text>
                <TouchableOpacity onPress={() => deleteItem(item.id)}>
                  <Text style={{ color: '#d32f2f', fontWeight: 'bold' }}>
                    Supprimer
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            style={{ marginTop: 10 }}
          />

          <GestureHandlerRootView>
            <TabScreen
              historique={historique}
              formatDateForLabel={formatDateForLabel}
            />
          </GestureHandlerRootView>
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  imcText: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  category: { fontSize: 18 },
  historyContainer: { marginTop: 40 },
  historyTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  historyItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 6,
    marginBottom: 8,
  },
  historyText: { fontSize: 16 },
})
