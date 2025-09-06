import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

// Type definition for the data
type InfoItem = {
  icon: keyof typeof MaterialIcons.glyphMap
  title: string
  content: string
}

// Data to be displayed in the FlatList
const infoData: InfoItem[] = [
  {
    icon: 'thermostat',
    title: 'Le jardin face aux changements climatiques',
    content:
      'Le jardinage est un outil essentiel pour réguler le climat local. Il contribue à capturer le CO₂ et à rafraîchir l’air par évapotranspiration.',
  },
  {
    icon: 'cloud',
    title: 'Les signes visibles du changement climatique',
    content:
      'La France fait face à des sécheresses, vagues de chaleur et fortes pluies. Cela perturbe la biodiversité et l’agriculture.',
  },
  {
    icon: 'recycling',
    title: 'Limiter l’effet de serre par un jardinage écologique',
    content:
      'Le compostage, la permaculture, et l’utilisation de plantes résistantes permettent de réduire les émissions de CO₂ et d’améliorer la biodiversité.',
  },
  {
    icon: 'spa',
    title: 'Adapter son jardin aux défis climatiques',
    content:
      'Installer un récupérateur d’eau de pluie et utiliser des paillages ou des haies protectrices sont des solutions pour lutter contre la sécheresse.',
  },
  {
    icon: 'local_drink',
    title: 'Réagir face au changement climatique',
    content:
      'En adaptant ses pratiques, chaque jardinier contribue à l’atténuation des effets du réchauffement climatique.',
  },
]

export default function AdaptingYourGardenToClimateChange_Component() {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={infoData}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <MaterialIcons
              name={item.icon}
              size={30}
              color="#388E3C"
              style={styles.icon}
            />
            <View style={styles.textBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8F5E9',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    marginRight: 12,
    marginTop: 4,
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#388E3C',
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    color: '#607D8B',
  },
})
