import { SafeAreaView } from 'react-native-safe-area-context'
import RealTimeLocalTime from '../realTimeLocalTime/RealTimeLocalTime'

import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

const TIMEZONES = [
  'Europe/Paris',
  'America/New_York',
  'Asia/Tokyo',
  'Australia/Sydney',
  'Africa/Cairo',
  'Europe/London',
  'Asia/Dubai',
  'America/Los_Angeles',
  'America/Sao_Paulo',
  'Asia/Shanghai',
  'Asia/Kolkata',
  'Africa/Nairobi',
  'Europe/Berlin',
  'Pacific/Auckland',
]

type CityTime = {
  id: string
  timezone: string
}

const STORAGE_KEY = 'saved_cities'

export default function RenderScene_2() {
  const [selectedTZ, setSelectedTZ] = useState<string>('Europe/Paris')
  const [cityList, setCityList] = useState<CityTime[]>([])
  const [currentTimes, setCurrentTimes] = useState<Record<string, string>>({})
  const [search, setSearch] = useState('')

  // Chargement initial depuis AsyncStorage
  useEffect(() => {
    const loadCities = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY)
        if (saved) {
          const parsed = JSON.parse(saved) as CityTime[]
          setCityList(parsed)
        }
      } catch (e) {
        console.error('Erreur de chargement:', e)
      }
    }
    loadCities()
  }, [])

  // Sauvegarde automatique à chaque changement
  useEffect(() => {
    const saveCities = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cityList))
      } catch (e) {
        console.error('Erreur de sauvegarde:', e)
      }
    }
    saveCities()
  }, [cityList])

  // Mise à jour de l’heure en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      const updated: Record<string, string> = {}
      cityList.forEach(city => {
        updated[city.id] = new Date().toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: city.timezone,
        })
      })
      setCurrentTimes(updated)
    }, 1000)

    return () => clearInterval(interval)
  }, [cityList])

  const addCity = () => {
    if (!cityList.some(c => c.timezone === selectedTZ)) {
      setCityList(prev => [...prev, { id: selectedTZ, timezone: selectedTZ }])
    }
  }

  const removeCity = (timezone: string) => {
    setCityList(prev => prev.filter(c => c.timezone !== timezone))
  }

  const clearAll = () => {
    Alert.alert('Confirmer', 'Supprimer toutes les villes ?', [
      { text: 'Annuler', style: 'cancel' },
      {
        text: 'Supprimer',
        style: 'destructive',
        onPress: async () => {
          setCityList([])
          await AsyncStorage.removeItem(STORAGE_KEY)
        },
      },
    ])
  }

  const filteredTZ = TIMEZONES.filter(tz =>
    tz.toLowerCase().includes(search.toLowerCase()),
  )

  const renderItem = ({ item }: { item: CityTime }) => (
    <View style={styles.card}>
      <MaterialIcons name="public" size={24} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.city}>{item.timezone}</Text>
        <Text style={styles.time}>{currentTimes[item.id]}</Text>
      </View>
      <TouchableOpacity onPress={() => removeCity(item.timezone)}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heure Mondiale</Text>
      <RealTimeLocalTime />

      <TextInput
        placeholder="Rechercher un fuseau..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <Picker
        selectedValue={selectedTZ}
        onValueChange={itemValue => setSelectedTZ(itemValue)}
        style={styles.picker}
      >
        {filteredTZ.map(tz => (
          <Picker.Item key={tz} label={tz} value={tz} />
        ))}
      </Picker>

      <View style={styles.buttonsRow}>
        <TouchableOpacity style={styles.addButton} onPress={addCity}>
          <MaterialIcons name="add" size={20} color="#fff" />
          <Text style={styles.addButtonText}>Ajouter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clearButton} onPress={clearAll}>
          <MaterialIcons name="delete-forever" size={20} color="#fff" />
          <Text style={styles.addButtonText}>Tout effacer</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cityList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.empty}>Aucune ville sélectionnée</Text>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  search: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 10,
  },
  picker: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
    justifyContent: 'center',
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF3B30',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  city: {
    fontSize: 16,
    fontWeight: '600',
  },
  time: {
    fontSize: 15,
    color: '#555',
  },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#888',
  },
})
