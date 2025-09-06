import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

// Type definition for the data
type InfoItem = {
  icon: keyof typeof MaterialIcons.glyphMap
  title: string
  content: string
}

// Data to be displayed in the FlatList
const infoData: InfoItem[] = [
  {
    icon: 'pets',
    title: 'Prédateurs naturels des limaces',
    content:
      'Encourager la présence d’auxiliaires comme les hérissons, les oiseaux et les crapauds peut réguler la population de limaces. Ces animaux sont des prédateurs naturels très efficaces.',
  },
  {
    icon: 'nature',
    title: 'Gestion du paillage',
    content:
      'Le paillage protège contre les mauvaises herbes et conserve l’humidité, mais un paillage trop dense peut offrir un abri idéal pour les limaces. Il est donc préférable d’alterner les types de paillage.',
  },
  {
    icon: 'barrier',
    title: 'Barrières physiques contre les limaces',
    content:
      'Des barrières comme les coquilles d’œufs écrasées ou la laine de mouton autour des plantations peuvent dissuader les limaces de s’approcher de vos cultures.',
  },
  {
    icon: 'grass',
    title: 'Granulés anti-limaces bio',
    content:
      'Les granulés à base de phosphate de fer attirent les limaces sans nuire aux autres animaux et se décomposent naturellement dans le sol.',
  },
  {
    icon: 'filter',
    title: 'Utilisation des nématodes',
    content:
      'Les nématodes sont des micro-organismes qui se nourrissent des limaces. Ils sont appliqués par arrosage et agissent efficacement sous des conditions spécifiques.',
  },
]

export default function OrganicSlugControl_Component() {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={infoData}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <MaterialIcons
              name={item.icon}
              size={30}
              color="#388E3C"
              style={styles.icon}
            />
            <View style={styles.textBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8F5E9',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
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
    fontSize: 18,
    fontWeight: '600',
    color: '#388E3C',
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    color: '#607D8B',
  },
})
