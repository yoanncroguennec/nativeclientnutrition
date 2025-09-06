import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const permacultureData = [
  {
    icon: 'eco',
    title: 'Origine de la Permaculture',
    content:
      'La permaculture est née en Australie dans les années 1970. Elle vise à rendre l’agriculture durable et autosuffisante en respectant les écosystèmes naturels. Elle repose sur trois piliers fondamentaux : prendre soin de la Terre, de l’humain et partager équitablement les ressources.',
  },
  {
    icon: 'nature',
    title: 'Accepter la nature',
    content:
      'Plutôt que de combattre les mauvaises herbes ou les nuisibles, la permaculture prône la tolérance et l’équilibre. En favorisant la biodiversité, on encourage un jardin autonome et résilient, sans produits chimiques ni labour intensif.',
  },
  {
    icon: 'energy-savings-leaf',
    title: 'Réduire les dépenses énergétiques',
    content:
      'Le zonage du jardin permet de placer les plantes selon leur besoin d’entretien. Cela minimise les déplacements et optimise les ressources : haies multifonctions, mares pour le microclimat, récupération d’eau de pluie, compostage, etc.',
  },
  {
    icon: 'recycling',
    title: 'Recycler les déchets',
    content:
      'Tous les déchets du jardin et de la cuisine trouvent une utilité : tontes de pelouse en paillage, épluchures comme compost, plantes montées en graines pour les animaux, fumier pour enrichir le sol. Rien ne se perd, tout se transforme.',
  },
  {
    icon: 'grass',
    title: 'Préparer le sol en permaculture',
    content:
      'Le sol n’est jamais laissé nu. Le paillage préserve l’humidité, limite les mauvaises herbes, protège contre l’érosion et enrichit naturellement le terrain. On peut aussi semer des engrais verts ou pratiquer la culture en lasagnes pour nourrir le sol.',
  },
  {
    icon: 'yard',
    title: 'Planifier son potager',
    content:
      'Associer légumes, herbes et fleurs permet de reproduire la diversité naturelle. Les plantes se soutiennent mutuellement : certaines fixent l’azote, d’autres repoussent les nuisibles ou attirent les pollinisateurs. On exploite aussi les hauteurs et les cycles de croissance.',
  },
  {
    icon: 'bug-report',
    title: 'Ravageurs et maladies',
    content:
      'En permaculture, on accepte une partie des pertes. Les maladies et nuisibles sont des indicateurs de déséquilibre. On peut attirer les auxiliaires naturels (comme les coccinelles) ou utiliser des plantes répulsives pour réguler naturellement les populations invasives.',
  },
]

export default function GrowingVegetableGardenInPermaculture_Component() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Guide de la Permaculture</Text>
      <FlatList
        data={permacultureData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <MaterialIcons
              name={item.icon}
              size={28}
              color="#4CAF50"
              style={styles.icon}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#F1F8E9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  icon: {
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
  },
})
