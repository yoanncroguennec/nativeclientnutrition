import React from 'react'
import { FlatList, Text, View, StyleSheet, SafeAreaView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type InfoItem = {
  title: string
  description: string
  icon: keyof typeof MaterialCommunityIcons.glyphMap
}

const dogWeightTips: InfoItem[] = [
  {
    title: 'Pourquoi surveiller le poids ?',
    description:
      'Un chien obèse risque des maladies graves et une espérance de vie réduite. Agir tôt, c’est préserver sa santé !',
    icon: 'dog',
  },
  {
    title: 'Risques pour la santé',
    description:
      'Le surpoids favorise arthrose, problèmes cardiaques, diabète, maladies de peau et même cancer.',
    icon: 'heart-broken',
  },
  {
    title: 'Causes fréquentes',
    description:
      'Races à risque, stérilisation, âge, alimentation déséquilibrée et manque d’exercice sont les facteurs majeurs.',
    icon: 'alert-circle',
  },
  {
    title: 'Faire un bilan vétérinaire',
    description:
      'Le vétérinaire vous aide à fixer un poids cible, une alimentation adaptée et évite les carences.',
    icon: 'stethoscope',
  },
  {
    title: 'Stop aux à-côtés',
    description:
      'Évitez les restes de table, les extras, et privilégiez les friandises naturelles comme la carotte.',
    icon: 'food-off',
  },
  {
    title: 'Réduire les portions',
    description:
      'Une légère réduction (max 10%) peut aider. Utilisez un doseur et soyez régulier.',
    icon: 'scale-balance',
  },
  {
    title: 'Légumes coupe-faim',
    description:
      'Ajoutez carottes, courgettes ou haricots verts à ses repas pour limiter la faim sans excès de calories.',
    icon: 'carrot',
  },
  {
    title: 'Faire bouger son chien',
    description:
      'Augmentez la durée des promenades, jouez plus, testez la course ou le caniVTT, mais progressez doucement.',
    icon: 'run-fast',
  },
  {
    title: 'Maintenir les bons réflexes',
    description:
      'Une fois le poids idéal atteint, gardez de bonnes habitudes alimentaires et sportives !',
    icon: 'shield-check',
  },
]

export default function DogDiet_Component() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dogWeightTips}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <MaterialCommunityIcons
              name={item.icon}
              size={28}
              color="#0077b6"
              style={{ marginBottom: 6 }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#f0f4f7',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
})
