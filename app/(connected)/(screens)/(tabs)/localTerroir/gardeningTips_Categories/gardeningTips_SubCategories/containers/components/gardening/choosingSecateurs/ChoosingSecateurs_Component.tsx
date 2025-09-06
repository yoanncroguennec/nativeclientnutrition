import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const data = [
  {
    title: 'Les sécateurs à lames franches',
    icon: 'content-cut',
    description:
      "Idéal pour les jeunes branches et les pousses tendres, ce type de sécateur fonctionne comme des ciseaux avec une lame coupante glissant contre une contre-lame. Il permet des coupes nettes sur du bois vert jusqu'à 25 mm selon les modèles.",
  },
  {
    title: 'Les sécateurs à enclume',
    icon: 'construction',
    description:
      "Mieux adaptés pour le bois sec ou mort, ces sécateurs écrasent davantage qu'ils ne coupent. Ils sont à réserver aux branches rigides, car ils risquent d’endommager les tissus vivants.",
  },
  {
    title: 'Les sécateurs à crémaillère',
    icon: 'settings',
    description:
      "Grâce à un mécanisme de démultiplication, ils réduisent l'effort à fournir pour couper les branches épaisses. Cependant, la coupe nécessite plusieurs pressions successives.",
  },
  {
    title: 'L’épinette',
    icon: 'local-florist',
    description:
      'Compacte et maniable, elle est parfaite pour la cueillette de fleurs, fruits ou herbes aromatiques. Elle ne convient pas pour la coupe de branches même fines.',
  },
  {
    title: 'Le coupe-branches',
    icon: 'call-split',
    description:
      'Avec ses longs manches et sa coupe puissante, il permet de sectionner des branches de 30 à 50 mm de diamètre. Idéal pour les travaux plus exigeants.',
  },
  {
    title: 'Le sécateur électrique',
    icon: 'power',
    description:
      "Il coupe sans effort des branches jusqu’à 35 mm selon les modèles. Certains modèles incluent une assistance automatique qui s'active en cas de résistance. Tous fonctionnent sur batterie.",
  },
  {
    title: 'Critères de choix',
    icon: 'check-circle',
    description:
      'Choisissez en fonction de vos besoins : type de bois, fréquence d’utilisation, force dans les mains. Privilégiez l’ergonomie, la légèreté et la bonne adaptation à votre main (droitière/gauchère).',
  },
  {
    title: 'Confort et sécurité',
    icon: 'thumb-up',
    description:
      'Préférez un sécateur à poignée antidérapante, facile à verrouiller, et à poids léger si vous jardinez souvent. Des modèles à poignée rotative existent pour réduire la fatigue.',
  },
  {
    title: 'Quel budget prévoir ?',
    icon: 'euro',
    description:
      'Les modèles manuels coûtent entre 10 et 50 €, tandis que les électriques sont plus onéreux mais pratiques pour un usage fréquent. Un modèle de qualité durera longtemps.',
  },
]

export default function ChoosingSecateurs_Component() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <MaterialIcons
        name={item.icon}
        size={24}
        color="#4CAF50"
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 1,
  },
  icon: {
    marginRight: 10,
    marginTop: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
})
