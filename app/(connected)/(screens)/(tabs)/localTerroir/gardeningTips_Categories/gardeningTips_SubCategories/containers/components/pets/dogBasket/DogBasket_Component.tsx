import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Animated, { FadeInUp } from 'react-native-reanimated'

const sleepingTips = [
  {
    key: '1',
    icon: 'bed',
    title: 'Créer un espace de repos',
    description:
      'Un coin tranquille et familier est essentiel pour le sommeil de votre chien. Choisissez un panier, un coussin ou un tapis moelleux, adapté à sa taille.',
  },
  {
    key: '2',
    icon: 'ruler-combined',
    title: 'Adapter la taille du panier',
    description:
      'Un couchage trop petit gêne ses mouvements, trop grand le rend vulnérable. Mesurez-le du museau à la queue et ajoutez 20 cm pour plus de confort.',
  },
  {
    key: '3',
    icon: 'couch',
    title: 'Choisir la bonne forme',
    description:
      'Panier à rebords, coussin plat ou lit orthopédique : à chacun son style de sommeil. Pour les chiots et chiens anxieux, préférez les tipis ou igloos.',
  },
  {
    key: '4',
    icon: 'fabric',
    title: 'Sélectionner la matière idéale',
    description:
      'Tissu doux pour le confort, plastique pour l’hygiène, résine tressée pour l’esthétique, ou même zinc pour une touche vintage. Adaptez à votre intérieur et à votre chien.',
  },
  {
    key: '5',
    icon: 'home',
    title: 'Bien placer le panier',
    description:
      'Installez son panier à l’écart du bruit, mais pas isolé. Un coin calme, hors des passages fréquents, où il pourra dormir et se sentir chez lui sans être dérangé.',
  },
]

export default function DogBasket_Component() {
  const renderItem = ({ item }: any) => (
    <Animated.View entering={FadeInUp.duration(500)} style={styles.card}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={item.icon} size={24} color="#4a90e2" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </Animated.View>
  )

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Offrez-lui un sommeil de roi 🐾</Text>
      <FlatList
        data={sleepingTips}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        scrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 12,
    marginTop: 6,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#222',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
})
