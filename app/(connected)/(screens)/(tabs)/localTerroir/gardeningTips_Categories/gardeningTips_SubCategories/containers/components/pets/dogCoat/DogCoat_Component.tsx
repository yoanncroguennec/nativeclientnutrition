import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const sections = {
  reasonsForDogCoat: [
    {
      id: '1',
      icon: 'snowflake',
      title: 'Protection contre le froid',
      description:
        'Certaines races et certains âges de chiens sont plus sensibles aux basses températures, rendant le manteau essentiel en hiver.',
    },
    {
      id: '2',
      icon: 'baby',
      title: 'Chiots et chiens âgés',
      description:
        'Les plus jeunes et les plus vieux chiens sont souvent plus frileux et vulnérables.',
    },
    {
      id: '3',
      icon: 'thermometer',
      title: 'Réactions au froid',
      description:
        'Si votre chien tremble, rechigne à sortir ou baisse la tête pendant la promenade, il a probablement froid.',
    },
    {
      id: '4',
      icon: 'house',
      title: 'Usage uniquement extérieur',
      description:
        'Le manteau doit être réservé aux sorties en extérieur uniquement pour éviter les déséquilibres thermiques.',
    },
  ],
  dogBreedsNeedingCoats: [
    {
      id: '1',
      icon: 'dog',
      title: 'Petites races à poil ras',
      description: 'Chihuahua, Pinscher, Yorkshire, Teckel, Whippet, etc.',
    },
    {
      id: '2',
      icon: 'dog-service',
      title: 'Chiens sans sous-poil',
      description: 'Shar-Peï, Cocker américain, etc.',
    },
    {
      id: '3',
      icon: 'heartbeat',
      title: 'Chiens maigres ou malades',
      description: 'Les chiens affaiblis ont davantage besoin de chaleur.',
    },
  ],
  coatFeatures: [
    {
      id: '1',
      icon: 'tshirt',
      title: 'Facilité d’enfilage',
      description:
        'Privilégiez les manteaux avec fermeture par scratch, boutons ou pression.',
    },
    {
      id: '2',
      icon: 'ruler-combined',
      title: 'Ajustement à la morphologie',
      description:
        'Le manteau doit s’adapter au corps de votre chien sans le gêner.',
    },
    {
      id: '3',
      icon: 'soap',
      title: 'Entretien facile',
      description: 'Assurez-vous que le vêtement passe à la machine.',
    },
    {
      id: '4',
      icon: 'dog-leash',
      title: 'Ouverture pour la laisse',
      description:
        'Certains modèles incluent une ouverture zippée pour laisser passer la laisse.',
    },
  ],
  dogCoatSizes: [
    {
      id: '1',
      icon: 'weight-hanging',
      title: 'Taille 1',
      description: '2-3 kg (Chihuahua, Pinscher, Caniche toy)',
    },
    {
      id: '2',
      icon: 'weight-hanging',
      title: 'Taille 2',
      description: '3-4 kg (Yorkshire, Caniche nain)',
    },
    {
      id: '3',
      icon: 'weight-hanging',
      title: 'Taille 3',
      description: '5-6 kg (Shih Tzu, Cavalier King Charles)',
    },
    {
      id: '4',
      icon: 'weight-hanging',
      title: 'Taille 4',
      description: '7-8 kg (Bouledogue français)',
    },
    {
      id: '5',
      icon: 'weight-hanging',
      title: 'Taille 5',
      description: '10-13 kg (Cocker américain, Fox Terrier)',
    },
    {
      id: '6',
      icon: 'weight-hanging',
      title: 'Taille 6',
      description: '13-16 kg (Cocker anglais)',
    },
    {
      id: '7',
      icon: 'weight-hanging',
      title: 'Taille 7',
      description: '16-20 kg (Shar-peï)',
    },
  ],
}

const Section = ({ title, data }: { title: string; data: any[] }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <FontAwesome5
            name={item.icon}
            size={24}
            color="#4A90E2"
            style={styles.icon}
          />
          <View>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        </View>
      )}
    />
  </View>
)

export default function DogCoat_Component() {
  const fadeAnim = useState(new Animated.Value(0))[0]

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
      <ScrollView>
        <Section
          title="Pourquoi un manteau pour votre chien ?"
          data={sections.reasonsForDogCoat}
        />
        <Section
          title="Quels chiens ont besoin d’un manteau ?"
          data={sections.dogBreedsNeedingCoats}
        />
        <Section
          title="Bien choisir son manteau"
          data={sections.coatFeatures}
        />
        <Section title="Choisir la bonne taille" data={sections.dogCoatSizes} />
        <Text style={styles.tipText}>
          🔁 Même un manteau bien ajusté peut surprendre votre chien au début :
          laissez-lui un temps d’adaptation !
        </Text>
      </ScrollView>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  icon: {
    marginRight: 12,
    marginTop: 4,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
  },
  tipText: {
    fontStyle: 'italic',
    fontSize: 15,
    marginTop: 16,
    color: '#666',
  },
})
