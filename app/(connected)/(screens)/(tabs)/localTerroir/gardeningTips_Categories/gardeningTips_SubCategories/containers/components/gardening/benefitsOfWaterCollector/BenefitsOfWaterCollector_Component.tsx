import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type InfoItem = {
  icon: keyof typeof MaterialIcons.glyphMap
  title: string
  content: string
}

const infoData: InfoItem[] = [
  {
    icon: 'spa',
    title: 'Le jardinage au service de l’environnement',
    content:
      'Le jardinage devient une démarche écologique lorsqu’il s’accompagne d’un système de récupération d’eau de pluie, bénéfique pour la nature comme pour le budget.',
  },
  {
    icon: 'water-drop',
    title: 'Une méthode ancienne remise au goût du jour',
    content:
      'Grâce à des équipements modernes, l’eau de pluie peut aujourd’hui être collectée efficacement pour de nombreux usages.',
  },
  {
    icon: 'eco',
    title: 'Des atouts écologiques et économiques',
    content:
      'En réutilisant l’eau de pluie, on réduit la consommation d’eau potable et les dépenses tout en préservant les ressources naturelles.',
  },
  {
    icon: 'calculate',
    title: 'Quelle quantité peut-on collecter ?',
    content:
      'Un toit de 100 m² peut fournir jusqu’à 48 000 litres d’eau par an dans une région avec 600 mm de pluie annuelle.',
  },
  {
    icon: 'construction',
    title: 'Des systèmes pour tous les besoins',
    content:
      'Entre cuves hors-sol et citernes enterrées, chacun peut trouver une solution adaptée à ses usages et à son budget.',
  },
  {
    icon: 'landscape',
    title: 'Cuves hors-sol : accessibles et faciles à installer',
    content:
      'Elles se placent simplement dans le jardin ou sur une terrasse, et existent en différentes tailles et formes.',
  },
  {
    icon: 'plumbing',
    title: 'Une installation rapide',
    content:
      'Il suffit d’un collecteur raccordé à la gouttière. Les cuves sophistiquées disposent d’un trop-plein pour éviter le débordement.',
  },
  {
    icon: 'garage',
    title: 'Citernes enterrées : discrètes et performantes',
    content:
      'Elles permettent un stockage plus important et sont totalement invisibles une fois en place.',
  },
  {
    icon: 'engineering',
    title: 'Une mise en œuvre encadrée',
    content:
      'Ces installations nécessitent un terrassement réalisé par un professionnel, mais elles sont résistantes au gel.',
  },
  {
    icon: 'home',
    title: 'Une eau utile dans la maison',
    content:
      'Avec les équipements adaptés, l’eau de pluie peut être utilisée pour les toilettes, la lessive ou le nettoyage.',
  },
  {
    icon: 'check-circle',
    title: 'En résumé',
    content:
      'Quel que soit le système choisi, collecter l’eau de pluie est un geste à la fois responsable et rentable.',
  },
  {
    icon: 'help-outline',
    title: 'FAQ : Cuve ou citerne ?',
    content:
      'La cuve est facile et rapide à mettre en place. La citerne est plus discrète et efficace, mais nécessite des travaux.',
  },
  {
    icon: 'info-outline',
    title: 'FAQ : Utilisation domestique ?',
    content:
      'Oui, sous réserve de respecter les normes. Un système de traitement et une séparation du réseau sont nécessaires.',
  },
  {
    icon: 'opacity',
    title: 'FAQ : Combien peut-on récupérer ?',
    content:
      'Une maison de 100 m² en région modérément arrosée peut récupérer près de 48 000 litres par an.',
  },
]

export default function BenefitsOfWaterCollector_Component() {
  return (
    <View style={styles.container}>
      <FlatList
        data={infoData}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <MaterialIcons
              name={item.icon}
              size={24}
              color="#00796B"
              style={styles.icon}
            />
            <View style={styles.textBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ECEFF1',
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
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
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#37474F',
  },
  content: {
    fontSize: 14,
    color: '#607D8B',
  },
})
