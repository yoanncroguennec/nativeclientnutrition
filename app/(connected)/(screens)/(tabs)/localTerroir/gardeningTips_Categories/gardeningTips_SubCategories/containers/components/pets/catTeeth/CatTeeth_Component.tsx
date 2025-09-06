import React from 'react'
import { View, FlatList, Text, StyleSheet, ScrollView } from 'react-native'

interface Section {
  title: string
  content: string
}

const sections: Section[] = [
  {
    title: 'Hygiène dentaire du chat et importance des soins',
    content:
      'Il est essentiel de prendre soin de l’hygiène dentaire de votre chat. Environ 70 % des chats de plus de trois ans souffrent de problèmes dentaires...',
  },
  {
    title: 'La dentition du chat',
    content:
      'Les chats sont carnivores, et leurs dents sont adaptées pour découper leur nourriture. Cependant, contrairement à d’autres animaux, leurs molaires ne sont pas plates...',
  },
  {
    title: 'Les dents de lait et la dentition du chaton',
    content:
      'Le chaton naît sans dents. Les premières dents de lait apparaissent à partir de 2 semaines. Ces dents ont une grande importance, car elles jouent un rôle...',
  },
  {
    title: 'Mauvaise haleine chez le chat : Causes et solutions',
    content:
      'La mauvaise haleine, ou halitose, est un problème courant chez les chats, souvent causé par une accumulation de tartre ou une infection buccale...',
  },
  {
    title: 'Reconnaître les signes de douleur dentaire chez le chat',
    content:
      "Les chats sont souvent discrets lorsqu'il s'agit de montrer de la douleur, mais certains signes peuvent alerter le propriétaire...",
  },
  {
    title: 'Lutter contre le tartre chez le chat',
    content:
      'Le tartre est l’une des principales causes de mauvaise haleine chez les chats. Il résulte de l’accumulation de plaque dentaire, composée de bactéries...',
  },
  {
    title: 'Le détartrage chez le vétérinaire',
    content:
      'Si votre chat souffre de tartre important, un détartrage professionnel sous anesthésie peut être nécessaire. Cette procédure est effectuée par un vétérinaire...',
  },
  {
    title: 'Brossage des dents du chat',
    content:
      'Le brossage des dents est l’un des moyens les plus efficaces pour maintenir une bonne hygiène dentaire chez votre chat et prévenir la formation de tartre...',
  },
  {
    title: 'Astuces pour maintenir une bonne dentition chez votre chat',
    content:
      'En plus du brossage des dents, voici quelques astuces pour assurer la santé dentaire de votre chat tout au long de sa vie...',
  },
  {
    title: 'Les friandises et poudres antitartre',
    content:
      'Il existe des friandises spécialement conçues pour aider à prévenir la formation de tartre. De plus, certains produits sous forme de poudre...',
  },
  {
    title: 'Précautions et consultation vétérinaire',
    content:
      'Si vous avez des doutes sur la santé dentaire de votre chat, il est toujours préférable de consulter un vétérinaire...',
  },
  {
    title: 'Questions ?',
    content:
      "Si vous avez des préoccupations concernant la santé dentaire de votre chat, n'hésitez pas à contacter votre vétérinaire habituel...",
  },
]

export default function CatTeeth_Component() {
  const renderItem = ({ item }: { item: Section }) => (
    <View style={styles.section}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  )

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={sections}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#555',
  },
})
