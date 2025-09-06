import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import {
  FontAwesome5,
  MaterialIcons,
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
    title: 'Oublis d’arrosage ?',
    icon: <FontAwesome5 name="tint" size={20} color="#4a90e2" />,
    content: [
      'Si vous oubliez souvent d’arroser vos plantes, le pot à réserve d’eau est une solution idéale. Il assure une hydratation régulière, sans surveillance constante.',
    ],
  },
  {
    key: 'plantes-ok',
    title: 'Plantes adaptées',
    icon: <MaterialIcons name="eco" size={20} color="#4caf50" />,
    content: [
      'Idéal pour : monstera, dracaena, caladium, dieffenbachia, papyrus, fougères.',
      'À éviter pour les plantes grasses : cactus, echeveria, crassula, aloe vera.',
    ],
  },
  {
    key: 'taille-pot',
    title: 'Choisir la bonne taille',
    icon: <Entypo name="resize-full-screen" size={20} color="#ff9800" />,
    content: [
      'Un pot trop grand retient trop d’eau ; un trop petit n’en contient pas assez.',
      "Choisissez un pot légèrement plus grand que celui d'origine pour favoriser l’enracinement.",
    ],
  },
  {
    key: 'installation',
    title: 'Installation de la plante',
    icon: <Feather name="settings" size={20} color="#9c27b0" />,
    content: [
      'Pas besoin de billes d’argile : le pot est conçu pour retenir la terre.',
      'Utilisez un terreau léger et drainant pour une bonne capillarité.',
      'Arrosez abondamment au départ pour humidifier le substrat et remplir la réserve.',
    ],
  },
  {
    key: 'arrosage',
    title: 'Comment arroser ?',
    icon: <FontAwesome5 name="water" size={20} color="#00bcd4" />,
    content: [
      'Utilisez l’indicateur de niveau pour vérifier si la réserve est vide.',
      'Remplissez la réserve jusqu’au niveau maximum indiqué.',
      'Vous pouvez compléter par le haut si la surface est sèche.',
    ],
  },
  {
    key: 'avantages',
    title: 'Avantages',
    icon: <MaterialIcons name="thumb-up" size={20} color="#4caf50" />,
    content: [
      'Réduit la fréquence d’arrosage.',
      'Fournit une hydratation régulière sans excès.',
      'Convient en intérieur comme en extérieur.',
    ],
  },
  {
    key: 'conclusion',
    title: 'À retenir',
    icon: <Entypo name="light-bulb" size={20} color="#ffc107" />,
    content: [
      'Les pots à réserve d’eau simplifient l’entretien et assurent une meilleure croissance.',
      'Une solution idéale pour les jardiniers amateurs ou distraits.',
    ],
  },
]

export default function ChoosingAndUsingWaterReservoirPot_Component() {
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
    backgroundColor: '#f9f9f9',
  },
  sectionContainer: {
    backgroundColor: '#fff',
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
