import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { FadeInUp } from 'react-native-reanimated'

const sections = [
  {
    title: 'Décision importante',
    icon: 'question-circle',
    data: [
      'La stérilisation est une décision irréversible qui mérite réflexion.',
      'Il est essentiel d’en discuter avec un vétérinaire pour peser les avantages et les inconvénients.',
    ],
  },
  {
    title: 'Principe de la stérilisation chirurgicale',
    icon: 'scalpel',
    data: [
      'C’est la méthode de contraception la plus fiable sur le long terme.',
      'Routinière pour les vétérinaires, elle présente les risques classiques liés à une anesthésie.',
    ],
  },
  {
    title: "Types d'interventions chez la chienne",
    icon: 'venus',
    data: [
      'L’ovariectomie retire les ovaires.',
      'L’hystérectomie concerne l’utérus.',
      'L’ovario-hystérectomie supprime les deux.',
    ],
  },
  {
    title: 'Prix des interventions',
    icon: 'euro-sign',
    data: [
      'Pour la chienne : entre 150 € et 500 € selon son poids et la clinique.',
      'Pour le chien mâle : entre 130 € et 300 €.',
    ],
  },
  {
    title: 'Déroulé de l’opération',
    icon: 'heartbeat',
    data: [
      'L’animal est déposé à jeun le matin et récupéré le soir.',
      'L’intervention se fait sous anesthésie générale.',
    ],
  },
  {
    title: 'Avantages chez la chienne',
    icon: 'female',
    data: [
      'Fin des chaleurs et comportements associés (fugues, pertes, etc.).',
      'Moins de risques de grossesses nerveuses, infections de l’utérus, tumeurs ovariennes et mammaires.',
    ],
  },
  {
    title: 'Avantages chez le chien',
    icon: 'male',
    data: [
      'Réduction des fugues et comportements liés à la reproduction.',
      'Moins de risques de tumeurs testiculaires et de problèmes de prostate.',
    ],
  },
  {
    title: 'Soins post-opératoires',
    icon: 'medkit',
    data: [
      'Surveiller les fuites urinaires chez les femelles (environ 5 % des cas).',
      'Limiter la prise de poids avec une alimentation adaptée et de l’exercice régulier.',
      'Privilégier les croquettes pour chien stérilisé riches en protéines et pauvres en graisses.',
    ],
  },
  {
    title: 'Alternatives non chirurgicales',
    icon: 'flask',
    data: [
      'Les contraceptifs pour chiennes sont rarement conseillés car potentiellement dangereux.',
      'La castration chimique existe pour les mâles via un implant temporaire (6 à 12 mois).',
    ],
  },
]

export default function DogSterilisation_Component() {
  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.bulletItem}>
      <MaterialIcons
        name="pets"
        size={18}
        color="#333"
        style={styles.bulletIcon}
      />
      <Text style={styles.bulletText}>{item}</Text>
    </View>
  )

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {sections.map((section, index) => (
        <View key={index} style={styles.sectionContainer}>
          <View style={styles.titleRow}>
            <FontAwesome5
              name={section.icon as any}
              size={20}
              color="#2e7d32"
              style={styles.icon}
            />
            <Text style={styles.title}>{section.title}</Text>
          </View>
          <FlatList
            data={section.data}
            renderItem={renderItem}
            keyExtractor={(_, i) => i.toString()}
            scrollEnabled={false}
          />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  sectionContainer: {
    marginBottom: 24,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  bulletIcon: {
    marginTop: 3,
    marginRight: 6,
  },
  bulletText: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
})
