import React from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'

const harnessBenefits = [
  {
    key: '1',
    icon: 'dog-service',
    title: 'Confort et liberté',
    description:
      'Le harnais épouse bien la morphologie du chien et lui permet de bouger librement, sans risque d’étranglement.',
  },
  {
    key: '2',
    icon: 'lungs',
    title: 'Idéal pour chiens brachycéphales',
    description:
      'Particulièrement recommandé pour les races ayant des difficultés respiratoires (bouledogue, pékinois, etc.).',
  },
  {
    key: '3',
    icon: 'handshake',
    title: 'Meilleur contrôle',
    description:
      'Le maître contrôle mieux les mouvements du chien et peut intervenir plus facilement en cas de besoin.',
  },
]

const harnessTypes = [
  {
    key: '1',
    icon: 'format-letter-h',
    title: 'Harnais en H',
    description:
      'Deux sangles autour du cou et de la poitrine, reliées par deux autres sur le dos et le poitrail. Laisse attachée sur le dos.',
  },
  {
    key: '2',
    icon: 'format-letter-x',
    title: 'Harnais en X ou Y',
    description: 'Laisse la gorge libre, bonne respiration assurée.',
  },
  {
    key: '3',
    icon: 'run-fast',
    title: 'Harnais d’activité',
    description:
      'Adapté au sport (cani-cross, rando). Confortable, solide, rembourré et lavable.',
  },
  {
    key: '4',
    icon: 'account-hard-hat',
    title: 'Harnais de travail',
    description:
      'Large, visible, muni d’une poignée. Idéal pour les interventions spécifiques ou professionnelles.',
  },
  {
    key: '5',
    icon: 'car-seat',
    title: 'Harnais de voyage',
    description:
      'Sécurise le chien en voiture et limite les déplacements dans l’habitacle.',
  },
]

const harnessSizes = [
  {
    key: 'XS',
    icon: 'resize',
    title: 'Taille XS',
    description: 'Poitrail : 25-40 cm | Corps : 39-46 cm',
  },
  {
    key: 'S',
    icon: 'resize',
    title: 'Taille S',
    description: 'Poitrail : 40-50 cm | Corps : 42-57 cm',
  },
  {
    key: 'M',
    icon: 'resize',
    title: 'Taille M',
    description: 'Poitrail : 50-70 cm | Corps : 58-87 cm',
  },
  {
    key: 'L',
    icon: 'resize',
    title: 'Taille L',
    description: 'Poitrail : 65-90 cm | Corps : 74-117 cm',
  },
  {
    key: 'XL',
    icon: 'resize',
    title: 'Taille XL',
    description: 'Poitrail : 90+ cm | Corps : 100+ cm',
  },
]

export default function DogHarness_Component() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Pourquoi choisir un harnais pour votre chien ?
      </Text>
      <FlatList
        data={harnessBenefits}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <MaterialCommunityIcons
              name={item.icon}
              size={32}
              color="#444"
              style={styles.icon}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />

      <Text style={styles.title}>Quels types de harnais existe-t-il ?</Text>
      <FlatList
        data={harnessTypes}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <MaterialCommunityIcons
              name={item.icon}
              size={32}
              color="#555"
              style={styles.icon}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />

      <Text style={styles.title}>Guide des tailles</Text>
      <FlatList
        data={harnessSizes}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <FontAwesome5
              name={item.icon}
              size={28}
              color="#555"
              style={styles.icon}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />

      <Text style={styles.title}>Bien ajuster et habituer votre chien</Text>
      <Text style={styles.paragraph}>
        Prenez le temps d’habituer votre chien à son harnais. Laissez-lui le
        découvrir, portez-le brièvement à la maison, puis sortez progressivement
        avec.
      </Text>
      <Text style={styles.subtitle}>Étapes d’installation :</Text>
      <Text style={styles.paragraph}>
        1. Faites asseoir votre chien et placez-vous derrière lui.
      </Text>
      <Text style={styles.paragraph}>
        2. Enfilez doucement le harnais selon son modèle (H, X, Y).
      </Text>
      <Text style={styles.paragraph}>
        3. Vérifiez que les sangles sont bien à plat et positionnées.
      </Text>
      <Text style={styles.paragraph}>
        4. Ajustez pour pouvoir passer deux doigts entre le harnais et le corps.
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 4,
    color: '#444',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  icon: {
    marginTop: 4,
  },
})
