import React from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from '@expo/vector-icons'
import { MotiView } from 'moti'

const dentalSections = [
  {
    title: "Pourquoi l'hygiène dentaire est essentielle",
    icon: <FontAwesome5 name="tooth" size={24} color="#4682B4" />,
    data: [
      'Une mauvaise haleine ou des problèmes dentaires peuvent signaler des troubles de santé plus profonds.',
      'Le tartre et les infections buccales peuvent entraîner des douleurs, des inflammations ou des complications graves.',
      'Une bouche saine est un élément clé du bien-être global du chien.',
    ],
  },
  {
    title: 'La dentition du chiot et du chien',
    icon: <MaterialCommunityIcons name="dog" size={24} color="#8A2BE2" />,
    data: [
      'Le chiot naît sans dents. Ses premières dents de lait apparaissent vers 3 à 4 semaines.',
      'Vers 4 à 6 mois, ces dents sont remplacées par la dentition définitive.',
      'Le chien adulte possède généralement 42 dents, bien réparties entre la mâchoire supérieure et inférieure.',
    ],
  },
  {
    title: 'À quoi servent les différentes dents ?',
    icon: <FontAwesome5 name="bone" size={24} color="#DAA520" />,
    data: [
      'Les incisives servent à couper ou à saisir.',
      'Les crocs permettent de percer ou retenir des proies.',
      'Les prémolaires et molaires broient et mâchent les aliments.',
    ],
  },
  {
    title: 'Tartre et plaque dentaire',
    icon: <FontAwesome5 name="bacteria" size={24} color="#CD5C5C" />,
    data: [
      "La plaque est un mélange de résidus et de salive qui s'accumule sur l'émail.",
      "Elle se transforme en tartre en se minéralisant sous l'effet des bactéries.",
      'Le tartre peut provoquer des gingivites, des douleurs et la chute des dents.',
    ],
  },
  {
    title: 'Pourquoi le chien a mauvaise haleine ?',
    icon: <Entypo name="emoji-sad" size={24} color="#FF6347" />,
    data: [
      'Accumulation de tartre et infections buccales.',
      'Présence de tumeurs ou de pus dans la bouche.',
      "Maladies comme le diabète, l'insuffisance rénale, ou troubles digestifs.",
      "Comportements comme la coprophagie (ingestion d'excréments).",
    ],
  },
  {
    title: '5 conseils pour des dents saines',
    icon: <FontAwesome5 name="hands-wash" size={24} color="#228B22" />,
    data: [
      'Brossez les dents de votre chien plusieurs fois par semaine avec ou sans dentifrice adapté.',
      'Utilisez un doigtier pour faciliter le nettoyage si nécessaire.',
      'Privilégiez des croquettes spécifiques antitartre, notamment pour chiens âgés ou petits.',
      'Offrez-lui des bâtonnets ou des os à mâcher adaptés.',
      'Faites examiner régulièrement sa bouche lors des visites vétérinaires.',
    ],
  },
]

export default function DogTeeth_Component() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hygiène dentaire du chien 🦷</Text>
      {dentalSections.map((section, index) => (
        <MotiView
          key={index}
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: index * 150 }}
          style={styles.section}
        >
          <View style={styles.sectionHeader}>
            {section.icon}
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
          <FlatList
            data={section.data}
            keyExtractor={(item, i) => `${index}-${i}`}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <FontAwesome5
                  name="check-circle"
                  size={16}
                  color="#4CAF50"
                  style={styles.bulletIcon}
                />
                <Text style={styles.itemText}>{item}</Text>
              </View>
            )}
          />
        </MotiView>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
    color: '#444',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletIcon: {
    marginTop: 3,
    marginRight: 8,
  },
  itemText: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
})
