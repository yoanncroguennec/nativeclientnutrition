import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import * as LinkingExpo from 'expo-linking'

export default function PlantsThatAreToxicToAnimals_Component() {
  const stats = [
    {
      icon: 'dog',
      text: 'En 2018, la France comptait 14,2 millions de chats et 7,6 millions de chiens.',
    },
    {
      icon: 'phone',
      text: 'Le CNITV a reçu 21 000 appels : 72% concernaient des chiens, 22% des chats.',
    },
    {
      icon: 'skull-crossbones',
      text: 'Les plantes toxiques sont la 2e cause d’intoxication, juste après les médicaments.',
    },
  ]

  const indoorPlants = [
    'Agrumes, Aloès, Azalée',
    'Amaryllis, Narcisses (Amaryllidacées)',
    'Anthurium, Arum, Dieffenbachia (Aracées)',
    'Lis, Muguet (Liliacées, très dangereux pour les chats)',
    'Croton, Ficus, Piment d’ornement',
  ]

  const gardenPlants = [
    'Aconit, Azalée, Arum, Avocatier, Brugmansia',
    'Colchique, Digitale, Datura, Eucalyptus',
    'Fève, Fougère, Hydrangea, If, Iris',
    'Laurier-rose, Lupin, Narcisse, Robinier, Rhododendron',
    'Pomme de terre, Oignon, Tabac, Thuya',
  ]

  const wildPlants = [
    'Belladonne, Berce, Bryone, Chélidoine, Morelle',
    'Jusquiame, Vérâtre, Nielle, Sénéçon',
  ]

  const symptoms = [
    {
      icon: 'stethoscope',
      text: 'Troubles digestifs : salivation, vomissements, douleurs abdominales, diarrhées...',
    },
    {
      icon: 'brain',
      text: 'Troubles neurologiques : convulsions, agitation, paralysie, coma...',
    },
    {
      icon: 'heartbeat',
      text: 'Cardio-vasculaires : ralentissement ou accélération du cœur, hypotension...',
    },
    { icon: 'lungs', text: 'Respiratoires : toux, difficultés à respirer...' },
    { icon: 'tint', text: 'Urinaires : incontinence, sang dans les urines...' },
  ]

  const skinIssues = [
    'Rougeurs, démangeaisons, brûlures',
    'Gonflements, alopécie, plaies',
    'Photosensibilisation : éviter exposition au soleil',
    'Léchage aggravant les réactions cutanées',
  ]

  const emergencyContacts = [
    { name: 'CAPAE-Ouest (Nantes)', phone: '0240687740' },
    { name: 'CNITV Marcy L’Étoile', phone: '0478871040' },
    { name: 'CNITV Maisons-Alfort', phone: '0148931300' },
    { name: 'CNITV Toulouse', phone: '0561193940' },
  ]

  const callNumber = (phone: string) => {
    const url = `tel:${phone}`
    Linking.openURL(url).catch(() =>
      Alert.alert('Erreur', 'Impossible de lancer l’appel.'),
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Plantes toxiques : Protégez vos animaux</Text>
      <Text style={styles.paragraph}>
        De nombreuses plantes, même courantes, peuvent empoisonner chiens et
        chats. Parfois mortelles, elles sont souvent mâchouillées par curiosité
        ou ennui.
      </Text>

      <Text style={styles.sectionTitle}>📊 Chiffres clés</Text>
      <FlatList
        data={stats}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <FontAwesome5
              name={item.icon as any}
              size={20}
              color="#c0392b"
              style={styles.icon}
            />
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>🏠 Plantes d’intérieur à éviter</Text>
      {indoorPlants.map((plant, i) => (
        <View key={i} style={styles.bulletItem}>
          <MaterialIcons
            name="warning"
            size={20}
            color="#e67e22"
            style={styles.icon}
          />
          <Text style={styles.itemText}>{plant}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>🌳 Plantes de jardin dangereuses</Text>
      {gardenPlants.map((plant, i) => (
        <View key={i} style={styles.bulletItem}>
          <MaterialIcons
            name="yard"
            size={20}
            color="#27ae60"
            style={styles.icon}
          />
          <Text style={styles.itemText}>{plant}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>🌿 Plantes sauvages à surveiller</Text>
      {wildPlants.map((plant, i) => (
        <View key={i} style={styles.bulletItem}>
          <FontAwesome5
            name="leaf"
            size={20}
            color="#2c3e50"
            style={styles.icon}
          />
          <Text style={styles.itemText}>{plant}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>🚨 Symptômes d’intoxication</Text>
      {symptoms.map((item, i) => (
        <View key={i} style={styles.item}>
          <FontAwesome5
            name={item.icon as any}
            size={20}
            color="#8e44ad"
            style={styles.icon}
          />
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>🧴 Réactions cutanées possibles</Text>
      {skinIssues.map((issue, i) => (
        <View key={i} style={styles.bulletItem}>
          <MaterialIcons
            name="healing"
            size={20}
            color="#2980b9"
            style={styles.icon}
          />
          <Text style={styles.itemText}>{issue}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>📞 Centres antipoison</Text>
      {emergencyContacts.map((contact, i) => (
        <View key={i} style={styles.contactContainer}>
          <MaterialIcons
            name="local-hospital"
            size={20}
            color="#16a085"
            style={styles.icon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.itemText}>{contact.name}</Text>
            <TouchableOpacity
              onPress={() => callNumber(contact.phone)}
              style={styles.callButton}
            >
              <MaterialIcons name="call" size={18} color="#fff" />
              <Text style={styles.callText}>Appeler {contact.phone}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1abc9c',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
    marginTop: 2,
  },
  itemText: {
    flex: 1,
    fontSize: 15,
    color: '#2d3436',
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1abc9c',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 4,
    alignSelf: 'flex-start',
  },
  callText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 14,
  },
})
