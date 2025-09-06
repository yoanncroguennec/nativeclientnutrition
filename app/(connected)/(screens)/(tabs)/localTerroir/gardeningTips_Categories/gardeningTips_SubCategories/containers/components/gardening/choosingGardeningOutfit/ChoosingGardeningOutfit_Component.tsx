import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const data = [
  {
    title: 'Tenue idéale du jardinier',
    icon: 'check-circle',
    items: [
      'Doit être confortable, résistante et adaptée aux mouvements.',
      'Les vêtements de jardin sont conçus pour durer et supporter les salissures.',
      'Choisir des vêtements à votre taille pour éviter toute gêne.',
    ],
  },
  {
    title: 'Vêtements recommandés',
    icon: 'shopping-bag',
    items: [
      'Pantalon : robuste, bien coupé et avec poches utiles.',
      'Cotte : se porte par-dessus vos vêtements pour une protection renforcée.',
      'Tablier : pratique pour garder outils et accessoires à portée de main.',
    ],
  },
  {
    title: 'Gants de jardinage',
    icon: 'pan-tool',
    items: [
      'Protègent les mains des blessures, salissures et échauffements.',
      'Gants fins pour petits travaux, en coton ou matière souple.',
      'Modèles spécifiques pour rosiers et gros travaux, souvent renforcés.',
    ],
  },
  {
    title: 'Chaussures adaptées',
    icon: 'hiking',
    items: [
      'Imperméables et solides pour protéger vos pieds.',
      'Bottes recommandées en hiver ou temps humide.',
      'Sabots pratiques pour les saisons douces.',
    ],
  },
  {
    title: 'Protection contre le soleil',
    icon: 'wb-sunny',
    items: [
      'Chapeau en paille, coton ou fibres naturelles à larges bords.',
      'Bien choisir la taille pour assurer un bon maintien.',
    ],
  },
  {
    title: 'Équipements de sécurité',
    icon: 'security',
    items: [
      'Casque anti-bruit pour les machines bruyantes.',
      'Lunettes pour protéger vos yeux des projections.',
    ],
  },
]

export default function ChoosingGardeningOutfit_Component() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Guide complet de la tenue du jardinier</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={styles.section}>
            <View style={styles.iconTitle}>
              <MaterialIcons name={item.icon} size={24} color="#4CAF50" />
              <Text style={styles.title}>{item.title}</Text>
            </View>
            {item.items.map((text, idx) => (
              <View key={idx} style={styles.itemRow}>
                <MaterialIcons name="chevron-right" size={20} color="#757575" />
                <Text style={styles.itemText}>{text}</Text>
              </View>
            ))}
          </View>
        )}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2e7d32',
  },
  section: {
    marginBottom: 24,
  },
  iconTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
    color: '#333',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  itemText: {
    fontSize: 15,
    color: '#444',
    marginLeft: 4,
  },
})
