import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

interface PaillageItem {
  id: string
  icon: keyof typeof MaterialIcons.glyphMap
  title: string
  content: string
}

const data: PaillageItem[] = [
  {
    id: '1',
    icon: 'landscape',
    title: 'Protéger le sol',
    content:
      'Le paillage isole les racines du froid en hiver, limite l’évaporation l’été et donne un aspect soigné au jardin.',
  },
  {
    id: '2',
    icon: 'opacity',
    title: 'Réduction de l’évaporation',
    content:
      'Il conserve une bonne humidité dans le sol, un atout essentiel pour de belles récoltes.',
  },
  {
    id: '3',
    icon: 'local-florist',
    title: 'Limiter les mauvaises herbes',
    content:
      'Le paillis agit comme un obstacle naturel contre les plantes indésirables.',
  },
  {
    id: '4',
    icon: 'eco',
    title: 'Utiliser des déchets verts',
    content:
      'En se décomposant, ils nourrissent le sol comme un engrais naturel.',
  },
  {
    id: '5',
    icon: 'grass',
    title: 'Choisir le bon paillage',
    content:
      'Selon les plantes : paille, copeaux, lin, chanvre, écorces ou minéraux.',
  },
  {
    id: '6',
    icon: 'hourglass-bottom',
    title: 'Durée de vie variable',
    content:
      'Permanent pour les minéraux, 2-3 ans pour le bois, quelques mois pour les paillis fins.',
  },
  {
    id: '7',
    icon: 'spa',
    title: 'Bénéfices pour les cultures',
    content:
      'Favorise la germination, protège les jeunes pousses, limite les maladies.',
  },
]

export default function Mulching_cool_ProtectedSoil_Component() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <MaterialIcons
              name={item.icon}
              size={28}
              color="#4CAF50"
              style={styles.icon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  icon: {
    marginRight: 12,
    marginTop: 6,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  content: {
    fontSize: 14,
    color: '#555',
  },
})
