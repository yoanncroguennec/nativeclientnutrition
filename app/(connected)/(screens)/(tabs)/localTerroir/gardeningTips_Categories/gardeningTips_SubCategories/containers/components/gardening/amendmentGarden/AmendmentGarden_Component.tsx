import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type Section = {
  title: string
  icon: keyof typeof MaterialIcons.glyphMap
  content: string[]
}

const data: Section[] = [
  {
    title: 'Pourquoi amender la terre ?',
    icon: 'spa',
    content: [
      'Pour obtenir un sol fertile sur le long terme, notamment au potager, il est nécessaire d’ajouter des amendements.',
      'On distingue deux types d’amendements : organiques et minéraux, chacun ayant un rôle spécifique pour améliorer la qualité du sol.',
    ],
  },
  {
    title: 'Composition idéale d’un sol',
    icon: 'grass',
    content: [
      'Un bon sol contient 60 % de sable, 20 % d’argile, 10 % de calcaire et 10 % d’humus, avec un pH neutre (6,5 à 7).',
      'Ce type de sol est perméable à l’eau et à l’air, tout en retenant suffisamment d’humidité et de nutriments.',
    ],
  },
  {
    title: 'Amendement vs engrais',
    icon: 'compare-arrows',
    content: [
      'Les amendements améliorent durablement la structure et l’équilibre du sol.',
      'Les engrais nourrissent temporairement les plantes, sans effet durable sur la structure du sol.',
    ],
  },
  {
    title: 'Amendements minéraux',
    icon: 'landscape',
    content: [
      'Le sable allège les sols lourds.',
      'La chaux ou les amendements calcaires corrigent un sol acide.',
      'L’argile bentonitique enrichit les sols sableux en structure.',
    ],
  },
  {
    title: 'Amendements organiques',
    icon: 'eco',
    content: [
      'Issus de matières végétales ou animales, ils améliorent à la fois la structure du sol et fournissent des nutriments.',
      'Exemples : compost, fumier, tourbe (blonde, brune, noire).',
    ],
  },
  {
    title: 'Zoom sur Biomarine',
    icon: 'science',
    content: [
      'Biomarine est un mélange de fumiers et de matières végétales dont des algues marines, vendu en jardinerie.',
    ],
  },
  {
    title: 'Comment bien amender ?',
    icon: 'construction',
    content: [
      'Observez la texture du sol et mesurez son pH pour choisir le bon amendement.',
      'Acide (< 6,5) → Chaux ou cendre.',
      'Calcaire (> 7,5) → Compost, fumier, tourbe.',
      'Argileux → Sable + compost.',
      'Sableux → Compost + argile ou terre végétale.',
    ],
  },
  {
    title: 'Période d’amendement',
    icon: 'calendar-month',
    content: [
      'Appliquez l’amendement en automne ou en hiver.',
      'Épandez-le en surface puis incorporez légèrement à l’aide d’une griffe.',
    ],
  },
]

export default function AmendmentGarden_Component() {
  const renderItem = ({ item }: { item: Section }) => (
    <View style={{ marginBottom: 20 }} className="section">
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}
      >
        <MaterialIcons name={item.icon} size={24} color="#4CAF50" />
        <Text className="section-title">{item.title}</Text>
      </View>
      {item.content.map((para, idx) => (
        <Text key={idx} className="section-text">
          {para}
        </Text>
      ))}
    </View>
  )

  return (
    <View style={{ padding: 20 }} className="container">
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={renderItem}
      />
    </View>
  )
}
