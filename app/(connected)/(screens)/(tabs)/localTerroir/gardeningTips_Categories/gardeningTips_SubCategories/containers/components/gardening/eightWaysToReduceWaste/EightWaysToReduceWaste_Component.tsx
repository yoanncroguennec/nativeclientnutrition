import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const data = [
  {
    id: '1',
    icon: 'eco',
    title: 'Cultiver ses propres fruits et légumes',
    description:
      "Planter ses fruits et légumes permet de réduire l'empreinte écologique liée au transport et à l'utilisation de produits chimiques. Commencez petit : un carré potager avec des légumes faciles comme les radis, tomates, ou laitues est idéal pour débuter.",
  },
  {
    id: '2',
    icon: 'calendar-today',
    title: 'Consommer des produits de saison',
    description:
      "Opter pour des fruits et légumes de saison réduit l'énergie nécessaire à leur culture et leur transport. En plus, ils sont plus savoureux et bénéfiques pour la santé.",
  },
  {
    id: '3',
    icon: 'compost',
    title: 'Faire son compost',
    description:
      'Recycler les déchets organiques du jardin et de la cuisine permet de réduire le volume des ordures ménagères tout en enrichissant naturellement le sol.',
  },
  {
    id: '4',
    icon: 'water-drop',
    title: "Récupérer l'eau de pluie",
    description:
      "Installer un récupérateur d'eau permet d'économiser les ressources et de disposer d'une réserve gratuite pour l’arrosage du jardin.",
  },
  {
    id: '5',
    icon: 'shopping-cart',
    title: 'Acheter en vrac',
    description:
      'Réduire les emballages jetables en achetant en vrac permet de diminuer significativement ses déchets ménagers.',
  },
  {
    id: '6',
    icon: 'recycling',
    title: 'Trier ses déchets',
    description:
      'Recycler le papier, le verre, les plastiques et les objets électroniques permet de limiter le gaspillage des ressources naturelles et la pollution.',
  },
  {
    id: '7',
    icon: 'power-settings-new',
    title: 'Débrancher ses appareils inutilisés',
    description:
      "Éteindre les appareils en veille réduit considérablement la consommation d'énergie inutile.",
  },
  {
    id: '8',
    icon: 'restore',
    title: 'Donner une seconde vie aux objets',
    description:
      'Réparer, vendre ou donner des vêtements et objets permet d’éviter le gaspillage et de prolonger leur durée de vie utile.',
  },
]

export default function EightWaysToReduceWaste_Component() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <MaterialIcons
              name={item.icon as any}
              size={28}
              color="#2e7d32"
              style={styles.icon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
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
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 8,
    padding: 12,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
    marginTop: 4,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1b5e20',
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
})
