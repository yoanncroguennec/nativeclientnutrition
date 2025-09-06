import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const infos = [
  {
    title: 'Définition du voile d’hivernage',
    icon: 'ac-unit',
    description:
      'Ce tissu léger en polypropylène non tissé protège efficacement les plantes contre les basses températures, tout en laissant passer l’air, l’eau et la lumière. Il forme un microclimat plus chaud de 2 à 3°C autour de la plante.',
  },
  {
    title: 'Voile vs Voile de forçage',
    icon: 'compare-arrows',
    description:
      'Le voile d’hivernage est conçu pour préserver du froid, tandis que le voile de forçage accélère la croissance. Ce dernier est plus léger (17g/m²), contre 30g/m² ou plus pour le voile d’hiver.',
  },
  {
    title: 'À quoi sert le voile ?',
    icon: 'nature-people',
    description:
      'Il protège les pots, jeunes arbres, vivaces fragiles, plantes exotiques et fruitiers sensibles. Il évite les dommages causés par le gel ou le vent froid.',
  },
  {
    title: 'Plantes à abriter',
    icon: 'eco',
    description:
      'Utilisé pour les camélias, rhododendrons, agrumes, lauriers, pêchers nains, etc. Les plantes méditerranéennes trop sensibles doivent être rentrées à l’abri du gel.',
  },
  {
    title: 'Types de voile disponibles',
    icon: 'category',
    description:
      'Formats : voile plié, rouleau (1x10m, 2x10m…), housse zippée. Certaines housses couvrent aussi le pot. Densité : 30g/m² (classique), 45 à 100g/m² (renforcé), ou P30 doublé de ouate.',
  },
  {
    title: 'Coloris et aspects',
    icon: 'palette',
    description:
      'La plupart sont blancs, mais certains sont verts, décorés ou doublés de ouate. L’apparence peut aussi être décorative, selon les besoins.',
  },
  {
    title: 'Quand installer le voile ?',
    icon: 'event',
    description:
      'Mettez-le en place à l’arrivée du froid ou au printemps en cas de gelées tardives. Retirez-le une fois tout risque de gel écarté, souvent entre avril et mai.',
  },
  {
    title: 'Comment l’installer ?',
    icon: 'build',
    description:
      'Supprimez les soucoupes. Isolez le pot du sol froid. Placez la housse ou enveloppez avec un voile. Serrez à la base. Groupez les plantes contre un mur au sud pour renforcer la protection.',
  },
  {
    title: 'Potager et suivi',
    icon: 'spa',
    description:
      'Couvrez les cultures potagères avec un voile de forçage, maintenu par des pierres. Vérifiez régulièrement que les protections tiennent bien durant tout l’hiver.',
  },
]

export default function UnderstandingWinterFleece_Component() {
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
    <ScrollView style={styles.container}>
      <FlatList
        data={infos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
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
