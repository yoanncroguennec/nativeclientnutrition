import React from 'react'
import { View, FlatList, Text, StyleSheet, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const data = [
  {
    title: 'Entretien des Pots en Terre Cuite',
    description: `Favorise la circulation de l'air et de l'eau, permettant ainsi une bonne aération et un drainage optimal des racines. Cependant, ils demandent un entretien particulier pour conserver leur efficacité. 
    Avant leur première utilisation, il est recommandé de les faire tremper pendant 48 heures dans de l'eau afin de limiter le risque de fissures causées par des variations de température. Pour enlever les traces de calcaire, frottez-les avec une éponge imprégnée de vinaigre blanc. Ensuite, pour les entretenir, appliquez une fine couche d'huile de lin à l'extérieur des pots pour leur donner une finition soignée. 
    La terre cuite émaillée est plus facile à nettoyer : un chiffon doux et de l'eau savonneuse suffisent. Entre deux utilisations, désinfectez les pots avec de l'eau de Javel pour éviter la propagation de maladies. Enfin, en hiver, il est essentiel de protéger les pots en terre cuite contre le gel. Installez-les dans un endroit ensoleillé et à l'abri du vent, et enveloppez-les d’un matériau isolant comme du plastique bulle.`,
    icon: 'local-florist',
  },
  {
    title: 'Entretien des Bacs en Bois',
    description: `Doivent être régulièrement entretenus pour prévenir l'humidité, les moisissures et la dégradation. Si vous utilisez du bois brut, appliquez une lasure fongicide avant de l'utiliser. Pour les bacs en bois prétraités, un traitement autoclave suffira, mais il faudra appliquer une couche de lasure lorsque le bois devient plus vieux. Si le bac a seulement été lasuré ou huilé, il est recommandé de traiter le bois chaque année avec un saturateur pour conserver son aspect extérieur. 
    Pour éviter que l'eau ne s'accumule à l'intérieur, tapissez le fond du bac avec un feutre géotextile et percez des trous au fond pour permettre l'écoulement de l'eau. Il est aussi conseillé de poser les bacs sur des cales pour éviter le contact avec un sol humide, sauf si le bac est déjà muni de pieds. Les bacs en bois sont résistants au gel et ne nécessitent aucune protection particulière en hiver.`,
    icon: 'grass',
  },
  {
    title: 'Entretien des Pots en Plastique et Fibres',
    description: `Très faciles à entretenir. Ils n’ont pas besoin de traitement préalable, et un simple coup de chiffon humide suffit à les nettoyer. Si vous réutilisez un pot qui a déjà servi, nettoyez-le bien à l'aide de vinaigre blanc, puis rincez-le soigneusement. Ces matériaux modernes sont résistants aux intempéries et ne nécessitent pas d’entretien particulier en dehors du nettoyage régulier.`,
    icon: 'invert-colors',
  },
  {
    title: 'Entretien des Pots en Zinc',
    description: `Très résistants aux conditions extérieures et ne nécessitent aucun entretien particulier. Au fil du temps, ils se couvrent naturellement d’une pellicule protectrice qui leur donne un aspect vieilli et charmant. Ces pots sont également résistants au gel, et n’ont donc pas besoin d’être protégés durant l’hiver. Vous pouvez simplement les nettoyer avec un chiffon doux pour préserver leur apparence.`,
    icon: 'panorama-fish-eye',
  },
]

export default function MaintainingPotsAndPlanters_Component() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <MaterialIcons name={item.icon} size={24} color="black" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f8f8f8',
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
})
