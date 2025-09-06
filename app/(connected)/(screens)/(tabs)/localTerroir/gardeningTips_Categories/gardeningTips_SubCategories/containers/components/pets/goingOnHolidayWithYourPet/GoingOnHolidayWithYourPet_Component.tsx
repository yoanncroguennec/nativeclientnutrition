import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import {
  MaterialIcons,
  FontAwesome5,
  Ionicons,
  Feather,
  Entypo,
} from '@expo/vector-icons'
import { FadeInUp } from 'react-native-reanimated'
import Animated from 'react-native-reanimated'

const AnimatedView = Animated.createAnimatedComponent(View)

const sections = [
  {
    title: 'Préparer le voyage',
    icon: <MaterialIcons name="event-note" size={24} color="#4A90E2" />,
    data: [
      'Vérifiez les règles du pays de destination : vaccins, muselière, passeport.',
      'Renseignez-vous sur les plages et logements qui acceptent les animaux.',
      'Administrez un antiparasitaire avant le départ.',
    ],
  },
  {
    title: 'Équipement indispensable',
    icon: <FontAwesome5 name="suitcase" size={24} color="#50E3C2" />,
    data: [
      'Utilisez une caisse ou un panier confortable.',
      'Préparez une laisse, harnais, gamelles, couverture.',
      'Gardez son alimentation habituelle pour éviter les troubles.',
    ],
  },
  {
    title: 'Voyager en voiture',
    icon: <Ionicons name="car" size={24} color="#F5A623" />,
    data: [
      'Ne laissez jamais votre animal se déplacer librement.',
      'Attachez-le avec une ceinture adaptée ou utilisez un filet de séparation.',
      'Faites des pauses régulières pour ses besoins.',
    ],
  },
  {
    title: 'Voyager en train ou en avion',
    icon: <Feather name="airplay" size={24} color="#7B61FF" />,
    data: [
      'Réservez une place pour votre animal en même temps que la vôtre.',
      'Les petits animaux voyagent souvent en cabine, les grands en soute.',
      'Utilisez une caisse homologuée pour le transport aérien.',
    ],
  },
  {
    title: 'Gérer le stress',
    icon: <Ionicons name="happy" size={24} color="#F76C5E" />,
    data: [
      'Les phéromones apaisantes existent en spray, pipettes ou colliers.',
      'Préparez votre animal à l’avance aux changements de routine.',
      'Emportez un objet familier pour le rassurer (jouet, couverture...).',
    ],
  },
  {
    title: 'Faire garder son animal',
    icon: <MaterialIcons name="pets" size={24} color="#00C2D1" />,
    data: [
      'Un proche ou un voisin peut venir s’en occuper à domicile.',
      'Utilisez une fontaine à eau et un distributeur automatique de nourriture.',
      'Visitez les pensions ou réservez un dog-sitter via une plateforme.',
    ],
  },
  {
    title: 'Et les poissons ?',
    icon: <Entypo name="drop" size={24} color="#2D9CDB" />,
    data: [
      'Un distributeur automatique assure le nourrissage pendant 3 à 4 semaines.',
      'Préparez l’éclairage avec un programmateur (8 à 12h par jour).',
      'Vérifiez la température avec un refroidisseur en cas de forte chaleur.',
    ],
  },
]

export default function GoingOnHolidayWithYourPet_Component() {
  return (
    <ScrollView style={styles.container}>
      <AnimatedView entering={FadeInUp.duration(800)} style={styles.header}>
        <Text style={styles.title}>
          Partir en vacances avec ou sans son animal
        </Text>
        <Text style={styles.subtitle}>
          Conseils pratiques pour bien s’organiser
        </Text>
      </AnimatedView>

      {sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <View style={styles.sectionHeader}>
            {section.icon}
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
          <FlatList
            data={section.data}
            keyExtractor={(item, i) => `${index}-${i}`}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.bullet}>{'\u2022'}</Text>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            )}
          />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  bullet: {
    fontSize: 16,
    marginRight: 8,
    lineHeight: 20,
  },
  itemText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 20,
    color: '#333',
  },
})
