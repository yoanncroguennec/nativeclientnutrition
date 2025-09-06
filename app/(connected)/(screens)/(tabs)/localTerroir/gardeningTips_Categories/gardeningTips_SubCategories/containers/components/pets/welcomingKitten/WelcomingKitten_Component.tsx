import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome6,
} from '@expo/vector-icons'
import Container_AdviceOnDogsAndCats from '../../..'

type Zone = {
  title: string
  description: string
  icon: React.ReactNode
}

const zones: Zone[] = [
  {
    title: '1. Le coin repas',
    description:
      'Installez les gamelles dans un endroit calme et propre. Prévoyez une écuelle pour l’eau fraîche et une autre pour l’alimentation. La bi-nutrition est recommandée : croquettes + nourriture humide pour compenser le manque d’hydratation.',
    icon: <FontAwesome6 name="bowl-food" size={28} color="#5a3" />,
  },
  {
    title: '2. Le coin litière',
    description:
      'Placez le bac à litière dans un endroit discret. Une litière agglomérante est idéale pour retenir les odeurs et faciliter le nettoyage quotidien.',
    icon: <FontAwesome5 name="toilet" size={26} color="#845ec2" />,
  },
  {
    title: '3. Le coin repos',
    description:
      'Offrez un panier ou une couverture douillette dans un lieu calme et surélevé. Ne soyez pas surpris s’il choisit votre lit !',
    icon: <FontAwesome5 name="bed" size={28} color="#0081cf" />,
  },
  {
    title: '4. L’espace de jeu et de griffade',
    description:
      'Un arbre à chat et un griffoir sont essentiels pour qu’il puisse grimper, observer et faire ses griffes. Ajoutez quelques jouets pour le stimuler.',
    icon: <MaterialCommunityIcons name="cat" size={28} color="#f97316" />,
  },
]

export default function WelcomingKitten_Component() {
  return (
    <View>
      <Text style={styles.title}>
        L’arrivée d’un chaton : un moment délicat à accompagner avec douceur
      </Text>
      <Text style={styles.paragraph}>
        L’adoption d’un chaton est une étape importante et souvent stressante
        pour lui. Pour faciliter son adaptation, il est essentiel de respecter
        son rythme et de lui offrir un environnement rassurant.
      </Text>

      <Text style={styles.subtitle}>
        Les 4 espaces indispensables pour son bien-être
      </Text>

      <FlatList
        data={zones}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={styles.zoneContainer}>
            <View style={styles.iconContainer}>{item.icon}</View>
            <View style={styles.textContainer}>
              <Text style={styles.zoneTitle}>{item.title}</Text>
              <Text style={styles.zoneDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />

      <Text style={styles.subtitle}>L’éducation du chaton</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Propreté :</Text> Dès son arrivée, montrez-lui
        son bac à litière et incitez-le à gratter. Il comprendra vite.
        {'\n\n'}
        <Text style={styles.bold}>Interdits :</Text> Pour corriger un
        comportement indésirable, utilisez un spray vide (le bruit rappelle
        celui d’une mère chat fâchée).
        {'\n\n'}
        <Text style={styles.bold}>À éviter :</Text> Ne punissez jamais un chaton
        après coup : il ne comprendrait pas pourquoi. Soyez patient, calme et
        cohérent.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 25,
    marginBottom: 10,
    color: '#444',
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
    marginBottom: 15,
  },
  zoneContainer: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 40,
    marginRight: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  zoneTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#222',
  },
  zoneDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
  },
  bold: {
    fontWeight: 'bold',
  },
})
