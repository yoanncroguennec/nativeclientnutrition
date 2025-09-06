import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const gardenTips = [
  {
    id: '1',
    title: 'Soigner et préserver la vie du sol',
    icon: 'grass',
    content: `Un jardin respectueux de la nature commence par un sol vivant. Un sol riche en micro-organismes nourrit naturellement les plantes, qui deviennent alors plus résistantes aux maladies.

Évitez de retourner profondément la terre, car cela perturbe les vers de terre et la vie souterraine. Optez plutôt pour la grelinette, un outil qui aère sans abîmer l’écosystème du sol.

Utilisez des amendements naturels : compost maison, corne broyée, guano, fumier bien décomposé ou engrais verts. Le paillage (BRF, feuilles mortes, etc.) est aussi un allié précieux pour enrichir la terre, la protéger des intempéries et limiter l’évaporation.`,
  },
  {
    id: '2',
    title: 'Tenir compte du climat, du sol et des saisons',
    icon: 'cloud',
    content: `Adaptez vos plantations au climat local et au type de sol. Faites analyser la terre ou observez les plantes sauvages qui y poussent naturellement pour mieux la comprendre.

Choisissez des espèces robustes, adaptées à votre environnement. Elles demanderont moins d'entretien et seront moins sensibles aux maladies.

Plantez au bon moment : arbres et arbustes à l’automne, légumes au printemps après les gelées, etc. Cela garantit une meilleure reprise.`,
  },
  {
    id: '3',
    title: 'Favoriser la biodiversité',
    icon: 'nature',
    content: `Invitez la nature dans votre jardin en diversifiant les espèces végétales et en laissant un coin sauvage.

Variez les plantes, introduisez des fleurs locales, plantez des haies champêtres et installez des abris pour la petite faune : tas de bois, pierres, mare ou hôtels à insectes.

Ces aménagements attirent les pollinisateurs et les prédateurs naturels des nuisibles, créant un équilibre écologique durable.`,
  },
  {
    id: '4',
    title: 'Faire tourner les cultures',
    icon: 'loop',
    content: `Alternez les cultures au potager d’année en année. Cela évite d’épuiser certaines ressources du sol et réduit les risques de maladies ou d’invasions d’insectes nuisibles.

Chaque famille de légumes a ses besoins spécifiques : faites-les se succéder de manière logique pour maintenir un sol équilibré.`,
  },
  {
    id: '5',
    title: 'Prévenir naturellement maladies et parasites',
    icon: 'healing',
    content: `La meilleure défense contre les maladies est un jardin sain. Sol vivant, plantes adaptées, biodiversité et rotation des cultures sont vos alliés.

Renforcez la prévention avec des associations végétales utiles : œillet d’Inde, ail, oignon, lavande...

En traitement préventif, les purins d’ortie ou de prêle sont efficaces. En cas d’attaque, privilégiez le savon noir, le bicarbonate ou les auxiliaires naturels comme les coccinelles.`,
  },
  {
    id: '6',
    title: 'Économiser l’eau efficacement',
    icon: 'water',
    content: `Choisissez des plantes peu gourmandes en eau, surtout dans les régions sèches. Arrosez de manière espacée mais abondante, de préférence tôt le matin ou en soirée.

Utilisez des systèmes économes comme le goutte-à-goutte. Pensez aussi au paillage et au binage pour garder l’humidité en terre.

Pour aller plus loin, installez un récupérateur d’eau de pluie pour arroser gratuitement.`,
  },
]

export default function SevenTipsForEcoFriendlyGardening_Component() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>
        7 Gestes Simples pour un Jardin Écologique
      </Text>
      <FlatList
        data={gardenTips}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.titleRow}>
              <MaterialIcons
                name={item.icon as any}
                size={24}
                style={styles.icon}
              />
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <Text style={styles.content}>{item.content}</Text>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    marginBottom: 24,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
  },
})
