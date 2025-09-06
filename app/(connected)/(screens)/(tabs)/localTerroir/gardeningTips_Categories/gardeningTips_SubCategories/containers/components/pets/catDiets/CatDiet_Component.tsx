import React from 'react'
import { FlatList, Text, View, StyleSheet, ScrollView } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const data = [
  {
    title: 'Le surpoids chez le chat',
    icon: <MaterialCommunityIcons name="cat" size={24} color="#4A90E2" />,
    content:
      "L'obésité est une pathologie fréquente chez le chat moderne. Elle résulte souvent d'un déséquilibre entre les apports caloriques et l'activité physique quotidienne.",
  },
  {
    title: 'Pourquoi mon chat est-il en surpoids ?',
    icon: <Ionicons name="help-circle-outline" size={24} color="#4A90E2" />,
    content:
      "Plusieurs facteurs peuvent expliquer la prise de poids :\n- Manque d'activité\n- Alimentation trop riche ou inadaptée\n- Friandises et restes de table\n- Stérilisation : souvent suivie d'une prise de poids si l'alimentation n'est pas ajustée",
  },
  {
    title: 'Un mode alimentaire différent de celui du chien',
    icon: (
      <MaterialCommunityIcons name="food-variant" size={24} color="#4A90E2" />
    ),
    content:
      "Le chat grignote plusieurs fois par jour, contrairement au chien. Lui imposer un repas unique favorise la surconsommation. Il faut adapter l'alimentation à son comportement naturel.",
  },
  {
    title: "Conséquences de l'obésité",
    icon: (
      <MaterialCommunityIcons
        name="alert-circle-outline"
        size={24}
        color="#E94E77"
      />
    ),
    content:
      "Le surpoids peut entraîner :\n- Diabète\n- Problèmes articulaires\n- Maladies cardiovasculaires\n- Diminution de l'espérance de vie",
  },
  {
    title: 'Reconnaître le surpoids',
    icon: <Ionicons name="body-outline" size={24} color="#4A90E2" />,
    content:
      'Observez la silhouette de votre chat. Ses côtes sont-elles palpables ? A-t-il une taille marquée ? Chaque race a un poids de forme différent. Demandez conseil à votre vétérinaire.',
  },
  {
    title: 'Adapter son régime pour le faire maigrir',
    icon: (
      <MaterialCommunityIcons name="scale-bathroom" size={24} color="#4A90E2" />
    ),
    content:
      'Voici quelques étapes clés :\n1. Établir un régime adapté avec un vétérinaire.\n2. Supprimer les friandises et restes.\n3. Introduire progressivement des croquettes light riches en fibres.\nNe réduisez jamais brutalement ses portions sans avis médical.',
  },
  {
    title: '4 astuces pour prévenir le surpoids',
    icon: <Ionicons name="bulb-outline" size={24} color="#4A90E2" />,
    content:
      "1. Respecter son sommeil : le déranger augmente son stress et son poids.\n2. Stimuler sa chasse : utilisez une balle distributrice pour l'inciter à bouger.\n3. Donner de la nourriture humide : elle couvre 70% de ses besoins en eau.\n4. Proposer des jeux variés chaque jour : jouez avec lui 15 à 20 minutes quotidiennement.",
  },
  {
    title: 'Besoin de conseils ?',
    icon: <Ionicons name="chatbubbles-outline" size={24} color="#4A90E2" />,
    content:
      "Vous avez des questions sur l'alimentation ou la santé de votre chat ? N'hésitez pas à consulter votre vétérinaire ou à demander conseil dans un magasin Truffaut.",
  },
]

export default function CatDiet_Component() {
  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <View style={styles.titleRow}>
        {item.icon}
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  )

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
})
