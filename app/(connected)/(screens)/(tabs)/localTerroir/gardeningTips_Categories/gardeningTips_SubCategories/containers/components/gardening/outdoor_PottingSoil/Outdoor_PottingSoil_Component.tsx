import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const data = [
  {
    title: 'Définition et Composition du Terreau',
    content:
      'Le terreau est un mélange de matières solides et organiques qui permet à vos plantes de se développer en offrant à la fois soutien, drainage et nutriments. Il est composé de matériaux comme des cailloux, écorces, fumier et compost.',
    icon: 'nature-people',
  },
  {
    title: 'Le Terreau Universel',
    content:
      'Ce terreau est adapté aux plantes développées comme les arbustes ou les géraniums. Il est léger et riche, idéal pour la plantation en pot ou en pleine terre. Il ne convient cependant pas pour des semis ou des plantes spécifiques comme les orchidées.',
    icon: 'local-florist',
  },
  {
    title: 'Le Terreau pour Plantes Fleuries',
    content:
      'Ce terreau, riche et léger, favorise la croissance des fleurs au jardin ou en balcon. Il est essentiel pour garantir des floraisons abondantes et durables. Il assure aussi un bon drainage pour éviter le pourrissement des racines.',
    icon: 'flower',
  },
  {
    title: 'Le Terreau pour Plantes Méditerranéennes et Agrumes',
    content:
      "Les plantes méditerranéennes comme l'olivier ou les agrumes nécessitent un terreau drainant. Mélangez avec du sable ou du gravier pour assurer un bon drainage et éviter l'asphyxie des racines.",
    icon: 'restaurant-menu',
  },
  {
    title: 'Le Terreau pour Plantes de Bruyère',
    content:
      "Les plantes acidophiles comme les magnolias ou les rhododendrons ont besoin d'un terreau acide. Un terreau composé de feuilles ou d'écorces est idéal pour maintenir un pH bas.",
    icon: 'terrain',
  },
  {
    title: 'Le Terreau pour le Potager',
    content:
      'Pour un potager productif, un terreau riche en azote et potassium est nécessaire pour la croissance des légumes. Il permet également de stimuler la fructification des petits fruits.',
    icon: 'eco',
  },
  {
    title: 'Le Terreau pour la Plantation des Arbres et Arbustes',
    content:
      'Un terreau riche en compost et tourbe est recommandé pour favoriser un bon enracinement des arbres et arbustes. Il est également nécessaire d’assurer un bon drainage, en particulier lors de la plantation en pot.',
    icon: 'local-tree',
  },
]

export default function Outdoor_PottingSoil_Component() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <MaterialIcons name={item.icon} size={30} color="green" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  )

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.title}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  content: {
    fontSize: 14,
    color: '#555',
  },
})
