import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import Animated, { FadeInUp } from 'react-native-reanimated'

const data = [
  {
    icon: <MaterialIcons name="cleaning-services" size={24} color="#4A90E2" />,
    title: 'Pourquoi toiletter son chien ?',
    description:
      "Un brossage régulier suffit souvent pour entretenir le pelage, mais raccourcir certains poils (tête, pattes, zones sensibles) aide à l'hygiène et limite les parasites, surtout en extérieur.",
  },
  {
    icon: <FontAwesome5 name="dog" size={24} color="#F5A623" />,
    title: 'Un toilettage adapté à chaque chien',
    description:
      'Les poils courts ou mi-longs nécessitent un bon brossage du sous-poil. Pour les races à poils longs, la tonte est souvent la solution idéale. Demandez conseil à votre toiletteur selon la race.',
  },
  {
    icon: <FontAwesome5 name="cut" size={24} color="#50E3C2" />,
    title: 'Le matériel de base',
    description:
      'Munissez-vous d’un peigne, d’une brosse, d’un gant, et d’une tondeuse pour animaux. Ne tondez jamais à moins de 3 mm pour éviter les inflammations ou coups de soleil.',
  },
  {
    icon: <FontAwesome5 name="clipboard-list" size={24} color="#BD10E0" />,
    title: 'Étapes d’un bon toilettage',
    description:
      '1. Peignez et retirez les nœuds. 2. Donnez un bain avec un shampoing doux. 3. Séchez entièrement avant la coupe.',
  },
  {
    icon: <MaterialIcons name="face" size={24} color="#FF3366" />,
    title: '1. La tête',
    description:
      'Coupez les poils autour des yeux pour éviter les infections et préserver la vue, sans descendre sous les 3 mm.',
  },
  {
    icon: <MaterialIcons name="pets" size={24} color="#FF9500" />,
    title: '2. Les pattes',
    description:
      'Coupez les poils au niveau des coussinets (1 à 2 mm) pour éviter la macération. Vérifiez aussi la longueur des griffes.',
  },
  {
    icon: <FontAwesome5 name="bone" size={24} color="#7ED321" />,
    title: '3. L’abdomen',
    description:
      'Zone sensible souvent salie, surtout par l’urine. La tondre limite les risques de parasites, d’infections, et améliore l’hygiène.',
  },
]

export default function DogGrooming_Component() {
  const renderItem = ({ item }: { item: (typeof data)[0] }) => (
    <Animated.View
      entering={FadeInUp.delay(100).duration(400)}
      style={styles.itemContainer}
    >
      <View style={styles.icon}>{item.icon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </Animated.View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Toilettage du chien</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 20,
    color: '#333',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 12,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
    justifyContent: 'center',
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
