import React from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native'
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
} from '@expo/vector-icons'

type Section = {
  title: string
  content: string
  icon?: React.ReactNode
}

const sections: Section[] = [
  {
    title: 'Pourquoi se forment les boules de poils ?',
    content:
      'Lors de sa toilette, le chat utilise sa langue râpeuse pour éliminer les poils morts. En se léchant, il en avale parfois plusieurs centaines, qui s’accumulent dans son estomac. Une partie est évacuée par les selles, mais le reste forme des amas compacts appelés trichobézoards, ou boules de poils.',
    icon: <MaterialCommunityIcons name="cat" size={28} color="#6b4c9a" />,
  },
  {
    title: 'Régurgitation : un mécanisme naturel',
    content:
      'Le chat rejette souvent ces boules en vomissant. Si cela reste occasionnel et que l’animal mange normalement, il n’y a pas lieu de s’inquiéter.',
    icon: <Entypo name="cycle" size={26} color="#f97316" />,
  },
  {
    title: 'Quels sont les risques ?',
    content:
      'Quand les boules de poils ne sont pas expulsées, elles peuvent bloquer le système digestif, causant de graves troubles du transit nécessitant une intervention vétérinaire.',
    icon: (
      <FontAwesome5 name="exclamation-triangle" size={24} color="#e63946" />
    ),
  },
  {
    title: 'Chats les plus exposés',
    content:
      "- Chats à poils longs\n- Chats d'intérieur (moins actifs)\n- Chats stressés (toilettage excessif)\n- Chats âgés (transit ralenti)\nLe phénomène est aggravé lors des mues saisonnières ou en cas de parasites provoquant des démangeaisons.",
    icon: (
      <MaterialCommunityIcons name="account-alert" size={26} color="#3b82f6" />
    ),
  },
  {
    title: 'Quand s’inquiéter ?',
    content:
      'Si votre chat tousse, tente de vomir sans succès, mange moins ou semble abattu, consultez rapidement un vétérinaire. Une obstruction digestive est une urgence.',
    icon: <FontAwesome5 name="clinic-medical" size={24} color="#dc2626" />,
  },
  {
    title: 'Prévention : que faire ?',
    content:
      'Plusieurs mesures permettent de réduire les risques de boules de poils. Découvrez-les ci-dessous.',
    icon: (
      <MaterialCommunityIcons name="shield-check" size={26} color="#059669" />
    ),
  },
]

const conseils: Section[] = [
  {
    title: '1. Brosser votre chat',
    content:
      'Un brossage régulier élimine les poils morts avant qu’ils ne soient avalés. Pour les races à poils longs, cela doit être fait plusieurs fois par semaine, voire quotidiennement pendant les mues.',
    icon: <MaterialCommunityIcons name="brush" size={24} color="#4b5563" />,
  },
  {
    title: '2. Une alimentation riche en fibres',
    content:
      'Des croquettes adaptées permettent une meilleure évacuation des poils dans les selles. Demandez conseil à votre vétérinaire.',
    icon: <MaterialCommunityIcons name="food" size={24} color="#f59e0b" />,
  },
  {
    title: '3. L’herbe à chat',
    content:
      "Facile à cultiver, elle aide le chat à se purger naturellement. Attention à ne pas confondre avec les herbes euphorisantes appelées aussi 'herbes-aux-chats'.",
    icon: <Entypo name="leaf" size={24} color="#16a34a" />,
  },
  {
    title: '4. Les compléments alimentaires',
    content:
      'Certaines pâtes ou boulettes favorisent le transit intestinal. À utiliser avec l’avis d’un vétérinaire.',
    icon: <MaterialCommunityIcons name="pill" size={24} color="#8b5cf6" />,
  },
]

export default function AnimalHairballs_Component() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Les boules de poils chez le chat</Text>
      <Text style={styles.intro}>
        Un phénomène naturel lié au toilettage, parfois sans gravité, mais qui
        peut engendrer de réelles complications digestives si elles ne sont pas
        éliminées.
      </Text>

      {sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <View style={styles.icon}>{section.icon}</View>
          <View style={styles.textBlock}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionContent}>{section.content}</Text>
          </View>
        </View>
      ))}

      <Text style={styles.subtitle}>Conseils de prévention</Text>
      <FlatList
        data={conseils}
        keyExtractor={item => item.title}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.advice}>
            <View style={styles.icon}>{item.icon}</View>
            <View style={styles.textBlock}>
              <Text style={styles.sectionTitle}>{item.title}</Text>
              <Text style={styles.sectionContent}>{item.content}</Text>
            </View>
          </View>
        )}
      />

      <Text style={styles.warning}>
        ⚠️ Si vous avez le moindre doute sur la santé de votre chat, ne tardez
        pas à consulter votre vétérinaire.
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    color: '#1f2937',
  },
  intro: {
    fontSize: 15,
    color: '#374151',
    marginBottom: 20,
    lineHeight: 22,
  },
  section: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f9fafb',
    padding: 12,
    borderRadius: 10,
  },
  advice: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f0fdf4',
    padding: 12,
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
  },
  textBlock: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  sectionContent: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#10b981',
    marginVertical: 20,
  },
  warning: {
    marginTop: 30,
    fontSize: 14,
    color: '#dc2626',
    fontWeight: '600',
    lineHeight: 20,
  },
})
