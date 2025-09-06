import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface PlantAdvice {
  title: string
  description: string
  icon: string
}

const plantData: PlantAdvice[] = [
  {
    title:
      'Protéger votre animal de compagnie des dangers des plantes toxiques',
    description:
      'Offrir un environnement sécurisé à vos animaux de compagnie ne se limite pas à ranger les produits chimiques à l’abri. Les plantes toxiques représentent le premier danger mortel par ingestion chez nos amis chiens et chats. Il est donc essentiel de prendre des précautions et d’identifier les plantes dangereuses.',
    icon: 'warning',
  },
  {
    title: 'Plantes toxiques : à éviter absolument !',
    description:
      'Pour limiter les risques d’intoxication, bannissez les plantes reconnues pour leur toxicité élevée. Si vous avez déjà aménagé un espace végétal et que votre animal est venu après, il est crucial de supprimer les plantes les plus dangereuses, en particulier celles qui se trouvent à l’intérieur. Si ce n’est pas possible, placez-les dans des zones inaccessibles.',
    icon: 'skull',
  },
  {
    title: 'Les jeunes animaux : une vigilance accrue',
    description:
      "Les chiots et les chatons, curieux de nature, sont plus susceptibles d’ingérer des plantes dangereuses. Leur instinct de jeu et d'exploration les pousse à goûter à tout, et malheureusement, leur petite taille peut aggraver les symptômes d’une intoxication. Il est important de les surveiller particulièrement pendant les premiers mois de vie.",
    icon: 'paw',
  },
  {
    title: 'L’effet de la dose : attention aux quantités',
    description:
      'L’adage « c’est la dose qui fait le poison » s’applique aussi aux animaux. Un petit chien ou un chat est plus vulnérable à une plante toxique qu’une race plus grande. Même de petites quantités peuvent entraîner des symptômes graves, voire mortels. Soyez particulièrement vigilant avec les jeunes animaux et ceux de petite taille.',
    icon: 'medkit',
  },
  {
    title: 'Conseils pratiques : méfiez-vous des bouquets !',
    description:
      'Les bouquets de fleurs, composés fréquemment de plantes toxiques comme les Liliacées, Amaryllidacées, et Aracées, peuvent aussi représenter un danger. L’eau dans laquelle trempent les tiges des fleurs contient des principes actifs toxiques qui peuvent empoisonner votre animal si celui-ci y boit. Soyez prudent, notamment avec le muguet, très toxique pour les chats.',
    icon: 'flower',
  },
  {
    title: 'Un jardin adapté et sécurisé pour votre animal',
    description:
      'Le jardin est un endroit idéal pour que votre chien et votre chat se défoulent en toute sécurité, à condition qu’il soit correctement aménagé. Assurez-vous de retirer les plantes toxiques et d’offrir un espace pour qu’ils puissent courir, jouer et se détendre au soleil. La pelouse est un endroit parfait pour eux, mais vérifiez qu’aucune plante toxique ne s’y cache.',
    icon: 'leaf',
  },
  {
    title: 'Des arbustes adaptés pour le chien',
    description:
      'Le chien apprécie de se frotter contre certains arbustes pour se soulager des démangeaisons ou simplement se détendre. Assurez-vous que ces arbustes ne font pas partie de la liste des plantes toxiques, car l’ingestion ou le léchage du pelage après contact avec des substances toxiques peut être dangereux.',
    icon: 'tree',
  },
  {
    title: 'Des plantes bénéfiques pour le chat',
    description:
      'Certaines plantes comme les népétas (herbes à chat) sont bénéfiques pour les chats. Elles contiennent des substances qui peuvent stimuler leur cerveau et les apaiser, tout en les amusant. La valériane est également une bonne option pour apaiser les chats stressés, tout comme les herbes aromatiques comme la lavande, le romarin et le thym.',
    icon: 'cat',
  },
  {
    title: 'Protéger l’intérieur de la maison : sécurité avant tout',
    description:
      'Dans votre maison, placez vos plantes d’intérieur en hauteur ou dans des endroits inaccessibles à votre chien ou chat. Même si certaines plantes ne sont pas toxiques, elles peuvent provoquer des troubles digestifs. Évitez les potées faciles à atteindre et privilégiez des suspensions ou des étagères élevées pour vos plantes.',
    icon: 'home',
  },
  {
    title: 'Idées pour un intérieur sécurisé',
    description:
      'Pour éviter que votre animal ne s’intéresse aux plantes, occupez-le avec des jouets adaptés. Les jouets qui roulent ou qui couinent, ainsi que les jouets à mâcher pour le chien, peuvent détourner son attention. Créez également des espaces sécurisés et confortables pour eux, comme des arbres à chat ou des coussins, et veillez à toujours fournir de l’eau fraîche à disposition.',
    icon: 'cube',
  },
]

export default function PlantsToPrioritiseForAnimals_Component() {
  return (
    <View style={styles.container}>
      <FlatList
        data={plantData}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Ionicons
              name={item.icon as any}
              size={24}
              color="black"
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
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
})
