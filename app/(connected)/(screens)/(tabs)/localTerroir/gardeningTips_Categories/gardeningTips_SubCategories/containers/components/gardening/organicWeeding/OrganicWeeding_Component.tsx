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
    icon: 'grass',
    title: 'Les principes du désherbage biologique',
    content:
      'Le désherbage bio repose sur des techniques naturelles comme la prévention, la fertilisation appropriée, et la rotation des cultures pour minimiser l’apparition des mauvaises herbes.',
  },
  {
    icon: 'spa',
    title: 'Identifier et traiter les mauvaises herbes',
    content:
      'Reconnaître les mauvaises herbes permet de choisir la meilleure stratégie pour les éliminer. Certaines nécessitent une intervention manuelle, d’autres peuvent être étouffées naturellement.',
  },
  {
    icon: 'timer',
    title: 'Le moment optimal pour intervenir',
    content:
      'Intervenir avant la floraison ou la formation de graines est crucial pour éviter la propagation des mauvaises herbes et faciliter leur gestion à long terme.',
  },
  {
    icon: 'eco',
    title: 'Méthodes de désherbage écologiques',
    content:
      'L’utilisation de produits biologiques et de techniques culturales comme le paillage ou la culture sur buttes permet de préserver la biodiversité tout en réduisant les mauvaises herbes.',
  },
  {
    icon: 'build',
    title: 'Fabriquer son propre désherbant bio maison',
    content:
      'Des solutions maison comme le vinaigre et le sel sont efficaces contre les mauvaises herbes, mais leur utilisation doit être mesurée pour ne pas nuire au sol.',
  },
]

export default function OrganicWeeding_Component() {
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
