import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import {
  FontAwesome5,
  MaterialIcons,
  Entypo,
  Ionicons,
} from '@expo/vector-icons'

const data = [
  {
    id: '1',
    title: 'Pourquoi utiliser un GPS pour son chat ?',
    icon: <FontAwesome5 name="cat" size={20} color="#4B5563" />,
    content:
      'Si votre chat est curieux et aime explorer au-delà de votre jardin, un collier GPS peut vous rassurer en le localisant à tout moment. C’est un outil essentiel pour retrouver votre animal en cas de fugue.',
  },
  {
    id: '2',
    title: 'Fonctionnement du GPS pour chat',
    icon: <MaterialIcons name="gps-fixed" size={20} color="#4B5563" />,
    content:
      'Le traceur GPS utilise une puce intégrée pour envoyer en temps réel la position de votre chat sur une carte via une application. La localisation fonctionne tant que la zone bénéficie d’une couverture satellite. Un abonnement est nécessaire, car le traceur utilise le réseau mobile pour transmettre les données.',
  },
  {
    id: '3',
    title: 'Traceur GPS avec ou sans abonnement',
    icon: <Entypo name="network" size={20} color="#4B5563" />,
    content:
      'Certains modèles sans abonnement passent par des réseaux ouverts, mais la position n’est pas en temps réel, ce qui complique les recherches. Les alternatives radio, Bluetooth ou Wi-Fi ont une portée très limitée.',
  },
  {
    id: '4',
    title: 'Comment choisir le bon GPS pour son chat ?',
    icon: <Ionicons name="options-outline" size={20} color="#4B5563" />,
    content:
      'Voici les critères à évaluer :\n• Taille et poids (préférez un modèle léger, max 25g)\n• Autonomie (1 à 5 jours ou plus)\n• Précision de la puce GPS\n• Fréquence des mises à jour (de toutes les heures à toutes les 10 secondes)\n• Étanchéité (indispensable pour un usage extérieur)',
  },
  {
    id: '5',
    title: 'Fonctionnalités supplémentaires utiles',
    icon: <MaterialIcons name="settings" size={20} color="#4B5563" />,
    content:
      'Certains GPS offrent des options pratiques comme :\n• Clôture virtuelle avec alertes\n• Historique des déplacements\n• Micro et haut-parleur pour écouter ou parler à distance\n• Fonction dressage (sonnerie)\n• Suivi d’activité (sommeil, distance parcourue, comportement)',
  },
  {
    id: '6',
    title: 'Quel budget prévoir ?',
    icon: <FontAwesome5 name="euro-sign" size={20} color="#4B5563" />,
    content:
      'Un bon collier GPS pour chat coûte à partir de 50 €. Il faut ensuite ajouter un abonnement de 3 à 8 € par mois. Un investissement utile pour la tranquillité d’esprit.',
  },
]

export default function GPS_Collar_Component() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Collier GPS pour chat : Guide complet</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.icon}>{item.icon}</View>
            <View style={styles.textContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F3F4F6',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1F2937',
  },
  list: {
    paddingBottom: 32,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
    color: '#111827',
  },
  content: {
    fontSize: 14,
    color: '#4B5563',
  },
})
