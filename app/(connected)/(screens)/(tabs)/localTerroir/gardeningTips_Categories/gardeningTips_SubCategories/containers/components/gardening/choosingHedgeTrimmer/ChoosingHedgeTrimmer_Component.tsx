import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const data = [
  {
    key: 'Taille-haie électrique filaire',
    description:
      'Léger, silencieux, non polluant. Idéal pour les petites haies fines, mais nécessite une prise à proximité.',
  },
  {
    key: 'Taille-haie électrique à batterie',
    description:
      'Silencieux, sans fil, léger. Autonomie limitée mais idéal pour des haies moyennes et des branches fines.',
  },
  {
    key: 'Taille-haie thermique',
    description:
      'Puissant, robuste, parfait pour de grandes haies et des branches jusqu’à 30 mm de diamètre. Nécessite un entretien.',
  },
  {
    key: 'Taille-haie sur perche',
    description:
      'Permet de couper des haies hautes sans échelle. Disponible en version électrique ou thermique.',
  },
  {
    key: 'Critères de choix',
    description:
      'Choisir un modèle selon la taille de la haie, le type de coupe et la puissance requise.',
  },
  {
    key: 'Puissance recommandée',
    description:
      'Taille-haie électrique : 400-700 W, thermique : 600-1050 W, batterie : 400-700 W.',
  },
  {
    key: 'Poids et ergonomie',
    description:
      "Poignée antidérapante, dispositifs anti-vibration pour plus de confort pendant l'utilisation.",
  },
  {
    key: 'Sécurité',
    description:
      'Porter des équipements de protection, vérifier la stabilité des outils, éloigner les enfants.',
  },
]

export default function ChoosingHedgeTrimmer_Component() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <MaterialIcons name="check-circle" size={24} color="green" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.key}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
    />
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'flex-start',
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
})
