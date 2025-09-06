import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const outils = [
  {
    id: '1',
    titre: 'Fonctions principales de la bêche',
    icone: 'construction',
    description:
      "La bêche, proche d'une pelle, sert à aérer et retourner la terre en profondeur pour la rendre cultivable. Elle est utile pour mélanger des amendements, creuser, transplanter ou diviser des vivaces.",
  },
  {
    id: '2',
    titre: 'Bêche de jardin',
    icone: 'grass',
    description:
      'Composée d’un fer métallique et d’un manche, elle existe en versions à tranchants variés : droits, bombés, pointus... Utilisée verticalement, elle est recommandée pour les sols légers et meubles.',
  },
  {
    id: '3',
    titre: 'Louchet',
    icone: 'fitness-center',
    description:
      'Solide et conçu pour les travaux intensifs, il pénètre facilement dans les sols compacts. Plus lourd que la bêche, il est réservé aux terrains argileux ou durs.',
  },
  {
    id: '4',
    titre: 'Fourche-bêche',
    icone: 'hardware',
    description:
      'Dotée de dents, elle pénètre aisément les sols caillouteux ou collants. Elle est parfaite pour ne pas blesser les racines autour des plantes déjà en place.',
  },
  {
    id: '5',
    titre: 'Griffe et griffe rotative',
    icone: 'build',
    description:
      'Outil denté utilisé pour niveler, ameublir le sol ou désherber. Les versions rotatives permettent un travail ergonomique sans forcer, idéal pour les petits espaces.',
  },
  {
    id: '6',
    titre: 'Tarabate ou grelinette',
    icone: 'eco',
    description:
      'Permet de travailler le sol sans le retourner, en respectant la vie microbienne. Très prisée en jardinage écologique, elle ameublit la terre sans douleur pour le dos.',
  },
  {
    id: '7',
    titre: 'Bien choisir son outil',
    icone: 'check-circle',
    description:
      'L’outil doit être choisi selon le type de sol (meuble, dur, caillouteux), la morphologie de l’utilisateur et l’intensité du travail à effectuer.',
  },
  {
    id: '8',
    titre: 'Dimensions et ergonomie',
    icone: 'straighten',
    description:
      "Un fer de petite taille réduit l'effort. Le manche doit correspondre à la taille du jardinier, et le type de poignée (en T, D, ou droit) influe sur le confort.",
  },
  {
    id: '9',
    titre: 'Matériaux et confort',
    icone: 'settings',
    description:
      'Les manches peuvent être en bois, résine ou fibre de verre. Certains outils disposent de formes ergonomiques et de repose-pieds pour faciliter le travail.',
  },
  {
    id: '10',
    titre: 'Conseil pour le dos',
    icone: 'favorite',
    description:
      'En cas de fragilité dorsale, évitez les outils lourds comme le louchet. Préférez une fourche-bêche ou une grelinette, et des bêches compactes pour les petits travaux.',
  },
]

export default function ChoosingGardenTarpaulin_Component() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <MaterialIcons
        name={item.icone}
        size={24}
        color="#4CAF50"
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.titre}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        Guide des Outils de Bêchage et Alternatives
      </Text>
      <FlatList
        data={outils}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 12,
    marginTop: 4,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
})
