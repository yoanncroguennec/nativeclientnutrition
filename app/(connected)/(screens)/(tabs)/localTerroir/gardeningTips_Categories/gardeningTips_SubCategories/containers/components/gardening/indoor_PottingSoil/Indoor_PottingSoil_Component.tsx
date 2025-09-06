import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const conseilsTerreau = [
  {
    title: 'Choisir un bon terreau pour vos plantes',
    content:
      "Le terreau est l'élément clé pour la croissance des plantes d’intérieur. Il se compose principalement de deux éléments : des matériaux solides comme le sable et les cailloux, qui assurent l’oxygénation et l'hydratation des racines, et des matières organiques comme le compost et le fumier, qui apportent les nutriments essentiels.",
  },
  {
    title: 'Le terreau pour plantes vertes et fleuries',
    content:
      "Les plantes vertes (comme le ficus et le palmier) ainsi que les plantes fleuries (telles que les cyclamens et les bégonias) peuvent être rempotées avec un terreau universel. Ce terreau, riche en éléments nutritifs, se réhumidifie rapidement et assure un bon écoulement de l'eau.",
  },
  {
    title: 'Le terreau pour cactées',
    content:
      "Les cactées, qui poussent sur des sols secs, nécessitent un terreau bien drainant. Un mélange de terreau universel et de sable grossier ou de billes d'argile est idéal pour ces plantes qui supportent mieux la sécheresse que l'excès d'eau. Attendez que le substrat soit totalement sec avant d'arroser.",
  },
  {
    title: 'Le terreau pour orchidées',
    content:
      "Les orchidées, en tant que plantes épiphytes, se développent naturellement sur les arbres et n'ont pas besoin de terreau. Cependant, un terreau spécialement conçu pour les orchidées, principalement constitué d'écorces de pin et d'autres matériaux comme la perlite et la laine de roche, est préférable pour leur croissance. Rempotez tous les 2 à 3 ans.",
  },
  {
    title: 'Le terreau pour plantes carnivores',
    content:
      "Les plantes carnivores se développent dans des sols pauvres en nutriments, mais très humides. Il est donc recommandé d'utiliser un terreau composé principalement de tourbe blonde, de sphaigne et de pouzzolane. Ce substrat spécifique aide à imiter leur habitat naturel, comme les tourbières.",
  },
  {
    title: 'Le terreau pour bonsaï',
    content:
      "Les bonsaïs, cultivés dans des pots plats, nécessitent un terreau léger, bien drainant et capable de retenir l'eau. Un terreau spécialement conçu pour les bonsaïs, qui comprend des matériaux comme la pouzzolane, le sable et l'argile, est essentiel pour favoriser une bonne croissance et une hydratation optimale.",
  },
]

export default function Indoor_PottingSoil_Component() {
  return (
    <View style={styles.container}>
      <FlatList
        data={conseilsTerreau}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>
              <MaterialIcons name="info" size={24} color="green" /> {item.title}
            </Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.5,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
})
