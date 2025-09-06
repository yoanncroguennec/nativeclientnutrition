//export default function MulchingRoses_Component() {
import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const paillageData = [
  {
    title: 'Pourquoi pailler les rosiers ?',
    data: [
      {
        icon: 'local-florist',
        text: 'Le paillage consiste à couvrir le sol avec des matières naturelles ou minérales afin de protéger, nourrir et embellir le jardin.',
      },
      {
        icon: 'ac-unit',
        text: 'Il protège les racines contre les variations thermiques, en hiver comme en été.',
      },
      {
        icon: 'opacity',
        text: "Il maintient l'humidité du sol et enrichit la terre en se décomposant.",
      },
      {
        icon: 'block',
        text: 'Il limite la prolifération des mauvaises herbes.',
      },
      {
        icon: 'cleaning-services',
        text: 'Il évite les éclaboussures de terre sur les fleurs lors des arrosages ou de la pluie.',
      },
    ],
  },
  {
    title: 'Types de paillis adaptés aux rosiers',
    data: [
      {
        icon: 'eco',
        text: 'Les paillis organiques comme les feuilles mortes, compost ou tontes de gazon enrichissent la terre.',
      },
      {
        icon: 'landscape',
        text: 'Les paillis minéraux comme la pouzzolane ou les graviers sont durables et décoratifs.',
      },
    ],
  },
  {
    title: 'Comment pailler efficacement ?',
    data: [
      {
        icon: 'yard',
        text: 'Désherbez soigneusement la zone avant de pailler.',
      },
      {
        icon: 'category',
        text: 'Choisissez un paillis adapté à votre sol et à vos besoins.',
      },
      {
        icon: 'layers',
        text: 'Étalez une couche de 5 à 10 cm autour du rosier, sans toucher la base.',
      },
      {
        icon: 'autorenew',
        text: 'Surveillez l’état du paillage et complétez ou remplacez si besoin.',
      },
    ],
  },
  {
    title: 'Questions fréquentes',
    data: [
      {
        icon: 'calendar-today',
        text: 'Le meilleur moment pour pailler est au printemps ou en automne.',
      },
      {
        icon: 'sync',
        text: 'Il est possible de combiner paillis organiques et minéraux.',
      },
      {
        icon: 'event-repeat',
        text: 'Un renouvellement annuel est recommandé, notamment pour les paillis organiques.',
      },
    ],
  },
]

export default function PaillageRosiers() {
  return (
    <View style={styles.container}>
      <FlatList
        data={paillageData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.title}>{item.title}</Text>
            {item.data.map((point, idx) => (
              <View
                key={idx}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8,
                }}
              >
                <MaterialIcons
                  name={point.icon}
                  size={20}
                  color="#4CAF50"
                  style={styles.icon}
                />
                <Text style={styles.text}>{point.text}</Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  icon: {
    marginRight: 8,
  },
})
