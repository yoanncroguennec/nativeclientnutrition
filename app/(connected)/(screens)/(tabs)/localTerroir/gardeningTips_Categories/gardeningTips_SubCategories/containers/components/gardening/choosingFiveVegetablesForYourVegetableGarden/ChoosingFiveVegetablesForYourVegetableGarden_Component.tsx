import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
  Feather,
} from '@expo/vector-icons'
import Animated, { FadeInUp } from 'react-native-reanimated'

type SectionData = {
  key: string
  title: string
  icon: JSX.Element
  content: string[]
}

const DATA: SectionData[] = [
  {
    key: 'intro',
    title: 'Un potager, même sans jardin',
    icon: <FontAwesome5 name="seedling" size={20} color="#4caf50" />,
    content: [
      'Vous avez un petit jardin, une terrasse ou un balcon ? Un carré potager permet de cultiver facilement des légumes frais toute l’année, même dans un espace réduit.',
    ],
  },
  {
    key: 'installation',
    title: 'Installer votre carré potager',
    icon: <MaterialCommunityIcons name="shovel" size={20} color="#8d6e63" />,
    content: [
      "Installez-le au printemps pour profiter de cultures successives jusqu'à l’hiver.",
      'Choisissez un emplacement ensoleillé, à l’abri des vents froids.',
      'Utilisez un bac en bois d’environ 100 à 140 cm de côté et au moins 40 cm de profondeur.',
      'Ajoutez un feutre géotextile à l’intérieur pour protéger le bois.',
      'Placez 8 à 10 cm de billes d’argile au fond pour un bon drainage.',
      'Remplissez avec un terreau spécial potager enrichi en matières organiques.',
      'Divisez la surface en 9 cases à l’aide de croisillons ou de tasseaux.',
    ],
  },
  {
    key: 'entretien',
    title: 'Un entretien rapide au quotidien',
    icon: <Feather name="clock" size={20} color="#03a9f4" />,
    content: [
      'Quelques minutes par jour suffisent selon les besoins des plantes.',
      'Préparez : arrosoir, plantoir, sécateur, griffe, tuteurs, ficelle ou raphia.',
    ],
  },
  {
    key: 'arrosage',
    title: 'Bien arroser votre carré potager',
    icon: <Entypo name="water" size={20} color="#00bcd4" />,
    content: [
      'Arrosez quotidiennement en été : le terreau sèche vite, surtout s’il est surélevé.',
      'Paillez le sol pour retenir l’humidité.',
      'Nettoyez les feuillages en ville pour enlever les poussières.',
      'Ajoutez régulièrement de l’engrais légumes pour compenser les pertes.',
      'Amendez chaque case vide avec une poignée de compost ou fumure organique.',
    ],
  },
  {
    key: 'legumes',
    title: 'Les 5 stars du carré potager',
    icon: (
      <MaterialCommunityIcons name="food-apple" size={20} color="#e91e63" />
    ),
    content: [
      '🌱 Radis : semés de mars à août, récolte 3 à 4 semaines après. Ils aiment les arrosages réguliers.',
      '🥗 Salades à couper : mesclun ou mâche, récolte progressive. Semez de février à juillet.',
      '🍅 Tomates-cerises : très productives, un plant peut donner jusqu’à 2 kg. Plantez en mai, tuteurez.',
      '🥒 Courgettes : cueillies jeunes, elles produisent jusqu’à 8-9 fruits par plant. Variétés colorées possibles.',
      "🌶️ Piments & poivrons : apprécient la chaleur, récolte en fin d'été. Jusqu’à 4 poivrons ou 8 piments par plant.",
    ],
  },
  {
    key: 'conclusion',
    title: 'À vous les mini-récoltes !',
    icon: <FontAwesome5 name="carrot" size={20} color="#ff9800" />,
    content: [
      'Un carré potager, c’est peu d’espace, peu d’entretien, et beaucoup de plaisir !',
      'Lancez-vous et récoltez des légumes savoureux, même sur votre balcon.',
    ],
  },
]

export default function ChoosingFiveVegetablesForYourVegetableGarden_Component() {
  const renderItem = ({ item }: { item: SectionData }) => (
    <Animated.View
      entering={FadeInUp.delay(100)}
      style={styles.sectionContainer}
    >
      <View style={styles.header}>
        {item.icon}
        <Text style={styles.title}>{item.title}</Text>
      </View>
      {item.content.map((text, index) => (
        <Text key={index} style={styles.text}>
          • {text}
        </Text>
      ))}
    </Animated.View>
  )

  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item.key}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
    backgroundColor: '#f5f5f5',
  },
  sectionContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  text: {
    fontSize: 15,
    color: '#555',
    marginBottom: 4,
    lineHeight: 22,
  },
})
