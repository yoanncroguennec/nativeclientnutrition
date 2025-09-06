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
    icon: 'pets',
    title: 'Prévention Naturelle',
    content:
      'Utiliser des plantes répulsives comme la lavande ou la menthe peut éloigner les pucerons. Assurez-vous également que vos plantes sont bien entretenues et que l’air circule librement entre elles.',
  },
  {
    icon: 'spray',
    title: 'Remèdes Maison',
    content:
      'Un mélange d’eau et de savon noir ou d’ail est très efficace contre les pucerons. Vous pouvez aussi utiliser des sprays à base de piment ou d’ail.',
  },
  {
    icon: 'bug-report',
    title: 'Insectes Bénéfiques',
    content:
      'Les coccinelles et les syrphes sont de bons prédateurs naturels des pucerons. Plantez des fleurs nectarifères pour attirer ces insectes dans votre jardin.',
  },
  {
    icon: 'eco',
    title: 'Solutions Écologiques',
    content:
      'Les produits biologiques, comme les insecticides à base de substances naturelles, sont des alternatives efficaces et respectueuses de l’environnement.',
  },
  {
    icon: 'support',
    title: 'Conseils de Truffaut',
    content:
      'Truffaut propose des services de conseil personnalisés pour vous aider à diagnostiquer et traiter les infestations de pucerons tout en préservant l’écosystème de votre jardin.',
  },
]

export default function TipsForControllingAphids_Component() {
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
