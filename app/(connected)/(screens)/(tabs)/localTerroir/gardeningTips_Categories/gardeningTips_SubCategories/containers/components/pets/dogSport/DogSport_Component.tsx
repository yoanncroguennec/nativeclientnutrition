import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

const sportsCanins = [
  {
    title: "L'agility",
    description:
      "L’agility est le sport canin le plus populaire en France, où maître et chien réalisent un parcours d'obstacles ensemble, sans laisse ni harnais.",
  },
  {
    title: 'Le flyball',
    description:
      "Le flyball est un sport qui demande rapidité et coordination. En compétition, des équipes de maîtres et chiens s'affrontent sur un parcours avec relais.",
  },
  {
    title: 'L’obéissance rythmée',
    description:
      "Aussi appelé dog dancing, ce sport mêle obéissance et chorégraphie musicale. C'est une activité qui renforce la complicité entre le maître et son chien.",
  },
  {
    title: 'Le hoopers',
    description:
      "Le hoopers est une version douce de l'agility, sans sauts ni virages serrés. Il est adapté pour les jeunes chiens, les seniors et les maîtres à mobilité réduite.",
  },
  {
    title: 'Le canicross et le caniVTT',
    description:
      'Le canicross consiste à courir avec votre chien relié par une longe. En caniVTT, vous roulez à vélo tout en permettant à votre chien de se défouler.',
  },
  {
    title: 'Le nosework',
    description:
      "Le nosework consiste à faire rechercher une odeur spécifique par votre chien. C'est un sport qui sollicite l'intellect du chien plutôt que son physique.",
  },
]

export default function DogSport_Component() {
  return (
    <FlatList
      data={sportsCanins}
      keyExtractor={item => item.title}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
})
