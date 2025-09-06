// import { View, Text } from 'react-native'
// import React from 'react'

// export default function CatTeeth() {
//   return (
//     <View>
//       <Text>CatTeeth</Text>
//     </View>
//   )
// }

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
      'La santé dentaire de votre chat est essentielle pour prévenir de nombreux problèmes. En effet, environ 70 % des chats de plus de trois ans souffrent de problèmes dentaires...',
  },
  {
    title: 'La dentition du chat',
    content:
      "Les dents du chat sont adaptées à une alimentation carnée. Toutefois, contrairement à d'autres animaux, ses molaires ne sont pas plates...",
  },
  {
    title: 'Les dents de lait et la dentition du chaton',
    content:
      "Les chatons naissent sans dents, mais dès l'âge de 2 semaines, les premières dents de lait apparaissent...",
  },
  {
    title: 'Mauvaise haleine chez le chat : Causes et solutions',
    content:
      'La mauvaise haleine, ou halitose, peut être causée par plusieurs facteurs, comme la présence de tartre ou une infection buccale...',
  },
  {
    title: 'Reconnaître les signes de douleur dentaire chez le chat',
    content:
      'Les chats ne montrent pas toujours de signes évidents de douleur, surtout au niveau dentaire. Cependant, voici quelques symptômes à surveiller...',
  },
  // Ajoutez toutes les autres sections ici
]

export default function CatTeeth() {
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
