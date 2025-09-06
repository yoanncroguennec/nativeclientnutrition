import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const sections = [
  {
    title: 'Pourquoi opter pour une tondeuse thermique ?',
    data: [
      'La tondeuse thermique est idéale pour entretenir de vastes espaces verts. Elle se décline en trois modèles : poussée, autotractée et autoportée.',
    ],
  },
  {
    title: 'Tondeuse thermique vs électrique',
    data: [
      'Les modèles électriques sont plus silencieux et adaptés aux petites surfaces (<600 m²).',
      'Pour 600 à 1200 m², on peut opter pour l’électrique ou le thermique.',
      'Au-delà de 1200 m², le thermique est incontournable.',
    ],
  },
  {
    title: 'Les avantages clés',
    data: [
      'Moteur puissant à essence pour une performance optimale.',
      'Largeur de coupe importante pour un gain de temps.',
      'Fonctionnement sans fil, offrant une autonomie totale.',
    ],
  },
  {
    title: 'Les différents types',
    data: [
      'Poussée : nécessite un effort physique.',
      'Autotractée : avance seule, l’utilisateur la guide.',
      'Autoportée : type tracteur, idéale pour de très grandes surfaces.',
    ],
  },
  {
    title: 'Superficie et type de terrain',
    data: [
      '600 à 1200 m² : tondeuse poussée ou autotractée.',
      '1200 à 3000 m² : autotractée, autoportée ou rider.',
      '+3000 m² : autoportée indispensable.',
      'Terrains en pente : privilégier les modèles autotractés ou autoportés.',
    ],
  },
  {
    title: 'Critères techniques',
    data: [
      'Tondeuse poussée : 100 à 170 cm³, coupe 40-50 cm.',
      'Autotractée : 125 à 190 cm³, coupe 40-60 cm.',
      'Autoportée : 300 à 650 cm³, coupe 65-110 cm.',
      'Largeur et hauteur de coupe réglables.',
      'Démarrage manuel ou électrique selon les modèles.',
    ],
  },
  {
    title: 'Confort et ergonomie',
    data: [
      'Guidon réglable, pliable pour rangement facilité.',
      'Niveau sonore important pour le confort.',
      'Options : mulching, ramassage, éjection latérale/arrière, LeafCollect.',
    ],
  },
  {
    title: 'Stockage et sécurité',
    data: [
      'Stockage vertical pour un gain de place.',
      'Débrayage de lame pour sécurité accrue.',
      'Roues larges et résistantes pour tous les terrains.',
    ],
  },
  {
    title: 'Conseils d’utilisation',
    data: [
      'Lire attentivement la notice.',
      'Couper le moteur avant tout entretien.',
      'Faire le plein à froid.',
      'Nettoyer régulièrement le filtre à air.',
      'Stocker le carburant correctement.',
      'Éloigner enfants et animaux durant l’utilisation.',
      'Porter une tenue adaptée (lunettes, gants, chaussures fermées).',
    ],
  },
]

const SectionItem = ({ item }: { item: string }) => (
  <View style={styles.itemContainer}>
    <MaterialIcons name="check" size={20} style={styles.icon} />
    <Text style={styles.itemText}>{item}</Text>
  </View>
)

export default function ChoosingPetrolLawnMower_Component() {
  return (
    <ScrollView style={styles.container}>
      {sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.title}>{section.title}</Text>
          <FlatList
            data={section.data}
            renderItem={({ item }) => <SectionItem item={item} />}
            keyExtractor={(item, idx) => idx.toString()}
          />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2d2d2d',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  icon: {
    marginTop: 2,
    marginRight: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#444',
  },
})
