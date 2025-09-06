import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const data = [
  {
    title: 'Accueillir un chat : Un engagement',
    description:
      'Adopter un chat, c’est bien plus qu’une simple compagnie. C’est un engagement de plusieurs années, car un chat peut vivre en moyenne entre 15 et 18 ans. Il est donc essentiel de choisir celui qui correspondra le mieux à votre mode de vie et à votre personnalité pour vivre une cohabitation harmonieuse.',
    icon: 'md-heart',
  },
  {
    title: 'Quel type de chat pour vous ?',
    description:
      'Avant d’adopter un chat, il est important de se poser les bonnes questions : Cherchez-vous un chat calme ou joueur ? Préférez-vous un compagnon câlin ou plus indépendant ? Vous vivez en ville ou à la campagne ? Avez-vous des enfants ou d’autres animaux ? Votre chat devra-t-il passer du temps seul, ou sera-t-il entouré ?',
    icon: 'md-search',
  },
  {
    title: 'Choisissez un chat adapté à votre mode de vie',
    description:
      'L’essentiel est de choisir un chat qui correspond à vos besoins. Réfléchissez à votre personnalité et à votre environnement. Un chat actif aura besoin d’un espace pour se dépenser, tandis qu’un chat calme appréciera un intérieur tranquille. Votre choix doit prendre en compte la taille, le tempérament et l’énergie du chat.',
    icon: 'md-person',
  },
  {
    title: 'Les races de chats câlins et indépendants',
    description:
      'Certaines races de chats allient indépendance et affection. Elles sont idéales pour les personnes recherchant un compagnon calme mais capable de passer du temps avec eux.',
    icon: 'md-paw',
  },
  {
    title: 'Maine Coon',
    description:
      'Le Maine Coon est un chat majestueux au caractère doux. Bien qu’imposant, il s’adapte parfaitement à la vie en appartement et s’entend bien avec les enfants. C’est un excellent compagnon, calme et affectueux, mais il apprécie aussi ses moments de tranquillité.',
    icon: 'md-paw',
  },
  {
    title: 'Norvégien',
    description:
      'Le chat Norvégien est très adaptable. D’un naturel calme et paisible, il sait alterner entre moments de jeu et de relaxation. Bien qu’il soit imposant, il convient parfaitement à la vie en appartement.',
    icon: 'md-paw',
  },
  {
    title: 'Sacré de Birmanie',
    description:
      'Ce chat possède une allure élégante avec de grands yeux bleus. Son caractère calme et affectueux fait de lui un excellent chat d’intérieur. Le Sacré de Birmanie est très sociable et aime passer du temps avec ses maîtres.',
    icon: 'md-paw',
  },
  {
    title: 'Les chats communicatifs',
    description:
      'Certains chats sont plus bavards et communicatifs. Ils aiment interagir avec leur propriétaire et exprimer leurs besoins de manière audacieuse.',
    icon: 'md-volume-high',
  },
  {
    title: "L'Oriental",
    description:
      'L’Oriental est un chat svelte et énergique, toujours en quête d’attention. Il est très câlin et aime être au centre de l’attention. Ce chat sociable adore les conversations et n’hésite pas à s’exprimer.',
    icon: 'md-volume-high',
  },
  {
    title: 'Siamois',
    description:
      'Le Siamois est élégant et mystérieux avec un caractère actif et affectueux. Il est très bavard et aime faire savoir ce qu’il veut. C’est un chat plein d’énergie qui aime être entouré.',
    icon: 'md-volume-high',
  },
  {
    title: 'Chartreux',
    description:
      'Le Chartreux est un chat robuste et intelligent. Il est calme, mais vif et vigoureux lorsqu’il est en activité. Sa capacité d’adaptation en fait un compagnon idéal pour la vie en appartement.',
    icon: 'md-paw',
  },
  {
    title: 'Les chats calmes et patients',
    description:
      'Les chats calmes et patients sont parfaits pour les foyers recherchant un compagnon tranquille et posé. Ils sont moins actifs et plus réservés, appréciant le confort de leur foyer.',
    icon: 'md-sunny',
  },
  {
    title: 'Persan',
    description:
      'Le Persan est un chat doux et calme, avec une fourrure dense et luxuriante. C’est un chat discret qui préfère les environnements tranquilles, idéal pour les personnes vivant dans un appartement.',
    icon: 'md-paw',
  },
  {
    title: 'Somali',
    description:
      'Le Somali est un chat élégant et agile, avec un caractère vif et curieux. Bien qu’il soit enjoué, il reste un chat calme et patient avec son maître, cherchant souvent à se faire câliner.',
    icon: 'md-paw',
  },
  {
    title: 'Scottish Fold',
    description:
      'Le Scottish Fold est un chat doux et affectueux avec des oreilles repliées qui lui donnent une apparence unique. C’est un chat calme et réfléchi qui s’entend bien avec les enfants et les autres animaux.',
    icon: 'md-paw',
  },
  {
    title: 'British Longhair',
    description:
      'Le British Longhair est un chat robuste et doux. Il est calme, réservé et parfait pour les foyers recherchant un chat posé et sociable. Il est particulièrement apprécié des personnes stressées.',
    icon: 'md-paw',
  },
  {
    title: 'Ragdoll',
    description:
      'Le Ragdoll est un chat docile et affectueux, souvent décrit comme le chat le plus calme et doux. C’est un excellent compagnon de famille qui aime passer du temps sur les genoux de ses maîtres.',
    icon: 'md-paw',
  },
  {
    title: 'Les chats joueurs',
    description:
      'Les chats joueurs sont actifs et curieux. Ils aiment explorer leur environnement et interagir avec leur maître. Si vous êtes à la recherche d’un chat dynamique, ces races sont faites pour vous.',
    icon: 'md-football',
  },
  {
    title: 'Bengal',
    description:
      'Le Bengal est un chat athlétique et énergique. Il a un caractère joueur et affectueux, et adore explorer. Ce chat est très intelligent et sait interagir avec son maître de manière amicale.',
    icon: 'md-paw',
  },
  {
    title: 'Abyssin',
    description:
      'L’Abyssin est un chat élégant et agile. Très joueur, il est également affectueux et aime interagir avec les membres de la famille. Ce chat est toujours prêt pour une nouvelle aventure.',
    icon: 'md-paw',
  },
]

export default function WhichCatBreedToChoose_Component() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Ionicons name={item.icon} size={30} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      )}
      keyExtractor={item => item.title}
    />
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
})
