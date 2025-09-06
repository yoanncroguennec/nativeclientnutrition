import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import Animated, { FadeInUp } from 'react-native-reanimated'

const sections = [
  {
    title: 'Le canicross, une aventure à deux',
    description:
      "Fini les sorties en solo ! Le canicross transforme la course à pied en véritable duo sportif. Vous et votre chien vous dépensez ensemble, ce qui rend l'effort plus motivant et agréable. En plus de renforcer vos liens, cette activité permet de garder la forme, de se muscler, de lutter contre le stress et de rencontrer d'autres passionnés !",
    icon: <FontAwesome5 name="running" size={24} color="#4B5563" />,
  },
  {
    title: 'Qu’est-ce que le canicross ?',
    description:
      "Apparu en Amérique du Nord dans les années 2000 pour entraîner les chiens de traîneau, le canicross est aujourd'hui un sport canin populaire et accessible à tous. Il suffit d'une paire de baskets, d'un harnais adapté, d'une longe élastique, et le tour est joué !",
    icon: <MaterialIcons name="pets" size={24} color="#4B5563" />,
  },
  {
    title: 'Mon chien peut-il en faire ?',
    description:
      "Ce sport est idéal pour les chiens énergiques. Une fois sa croissance terminée, votre chien peut s’y mettre, à condition de consulter un vétérinaire pour s'assurer que son cœur et ses articulations sont en forme. Un bon échauffement est essentiel, pour lui comme pour vous !",
    icon: <FontAwesome5 name="heartbeat" size={24} color="#4B5563" />,
  },
  {
    title: 'Où pratiquer le canicross ?',
    description:
      'Le canicross se pratique presque partout, mais la nature reste le meilleur terrain. Choisissez des chemins adaptés au niveau de votre duo, évitez les fortes chaleurs, et privilégiez les sentiers ombragés, proches de l’eau pour que votre chien puisse se rafraîchir si besoin.',
    icon: <MaterialIcons name="terrain" size={24} color="#4B5563" />,
  },
]

export default function Canicross_Component() {
  const renderItem = ({ item }: { item: any }) => (
    <Animated.View entering={FadeInUp} style={styles.itemContainer}>
      <View style={styles.icon}>{item.icon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </Animated.View>
  )

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={sections}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        scrollEnabled={false}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F3F4F6',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
  },
})
