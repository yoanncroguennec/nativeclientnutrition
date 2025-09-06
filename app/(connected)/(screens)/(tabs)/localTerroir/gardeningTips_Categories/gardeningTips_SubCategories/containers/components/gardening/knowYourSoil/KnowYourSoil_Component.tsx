import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

interface SectionItem {
  title: string
  content: string
  icon: string
}

const sectionsData: SectionItem[] = [
  {
    title: 'Introduction à la Terre',
    content:
      "La Terre est un environnement complexe constitué d'eau, d'air, et d'une vaste gamme de particules organiques et minérales. Elle constitue à la fois un support et une source de nourriture pour les plantes. Il est essentiel de comprendre la composition du sol afin de préserver sa santé, afin que nos arbres, légumes, fleurs et fruits continuent à nous ravir.",
    icon: 'nature-people',
  },
  {
    title: 'Le Sol : Un Organisme Vivant',
    content:
      "Le sol est un organisme vivant à part entière. Une multitude d'organismes interagissent avec les éléments du sol, transformant, assimilant et recyclant les minéraux et matières organiques pour maintenir l'équilibre nécessaire à la vie. Ce processus se déroule sous nos pieds de manière constante et ce, depuis des milliers d'années.",
    icon: 'eco',
  },
  {
    title: 'La Composition du Sol',
    content:
      "Le sol est principalement composé de quatre éléments :\n\n1. **L'argile** : Une roche sédimentaire qui devient pâteuse et collante lorsqu'elle est humide. Elle a la capacité de retenir l'eau et d’assurer une bonne cohésion des particules du sol, facilitant ainsi la fixation des engrais autour des racines des plantes.\n\n2. **Le calcaire** : Composé de carbonate de chaux, le calcaire neutralise l’acidité du sol, tout en apportant des nutriments essentiels aux plantes. Il joue également un rôle clé dans la dégradation des matières organiques et rend les engrais plus facilement assimilables par les plantes.\n\n3. **Le sable** : Ce sol fluide et instable aide à alléger les sols lourds. Il favorise la pénétration de l’air, de l’eau et des nutriments. Il se réchauffe rapidement au printemps, ce qui est idéal pour les cultures précoces.\n\n4. **L'humus** : Il s’agit du produit de la dégradation de la matière végétale par les micro-organismes du sol. L’humus transforme les matières organiques en éléments minéraux, rendant ainsi la terre apte à nourrir les plantes.",
    icon: 'local-florist',
  },
  {
    title: 'Le pH du Sol',
    content:
      "Le pH, ou potentiel hydrogène, mesure l’acidité ou l’alcalinité d’un sol. La neutralité se situe autour de 7, un pH inférieur à 7 indique un sol acide, tandis qu’un pH supérieur à 7 révèle un sol alcalin. Il est possible d'ajuster le pH en apportant de la chaux pour un sol acide ou de la tourbe pour un sol basique.",
    icon: 'tune',
  },
  {
    title: 'Les Types de Sol',
    content:
      "Voici les types de sol courants :\n\n1. **Sol Argileux** : Le sol argileux est lourd et compact, il forme de grosses mottes qui collent aux outils lorsque l’on le travaille. Ce type de sol est souvent imperméable et retient bien l'eau, ce qui le rend difficile à travailler lors des périodes humides. En été, il peut se durcir, rendant la pénétration des racines plus compliquée. Cependant, il est propice aux plantes qui résistent à ces conditions, comme le liseron, le pissenlit et certaines légumineuses.\n\n2. **Sol Sableux** : Ce sol est léger et facilement manipulable. Cependant, il souffre de la capacité limitée de rétention d’eau et de nutriments, ce qui nécessite des apports fréquents en engrais. Il est parfait pour les plantes acidophiles comme la bruyère ou les rhododendrons. Bien qu’il soit facile à travailler, il se dessèche rapidement et peut devenir pauvre en éléments nutritifs.\n\n3. **Sol Calcaire** : Les sols calcaires se reconnaissent à leur teinte claire et leur forte teneur en chaux. Ils sont souvent bien drainés mais peuvent manquer de nutriments essentiels, rendant difficile la croissance de certaines plantes. Le sol calcaire est également difficile à travailler, notamment lorsqu’il devient trop sec.\n\n4. **Sol Humifère** : Le sol humifère est riche en matière organique et généralement bien perméable. C’est un sol idéal pour les plantes acidophiles et pour les cultures en jardin. Cependant, lorsqu’il est mal drainé, il peut se transformer en un marécage. Ce sol est également susceptible de se dessécher en été.",
    icon: 'nature',
  },
  {
    title: 'Améliorer votre Sol',
    content:
      'Il est rare de rencontrer un sol parfaitement équilibré. Le sol de jardin change constamment, et il est important de l’adapter pour favoriser la croissance des plantes. Voici comment améliorer votre sol :\n\n1. **Sols Argileux** : Avantages, inconvénients et solutions pour améliorer la structure du sol argileux.\n\n2. **Sols Sableux** : Avantages, inconvénients et solutions pour améliorer la structure du sol sableux.\n\n3. **Sols Calcaires** : Avantages, inconvénients et solutions pour améliorer la structure du sol calcaire.\n\n4. **Sols Humifères** : Avantages, inconvénients et solutions pour améliorer la structure du sol humifère.',
    icon: 'update',
  },
]

export default function KnowYourSoil_Component() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={sectionsData}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <View style={styles.section}>
              <MaterialIcons name={item.icon} size={30} color="black" />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.content}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    paddingBottom: 10,
  },
  section: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    color: '#555',
  },
})
