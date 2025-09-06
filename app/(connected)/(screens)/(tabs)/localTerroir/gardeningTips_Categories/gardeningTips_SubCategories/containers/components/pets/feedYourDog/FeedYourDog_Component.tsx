import React, { useEffect, useState } from 'react'
import { View, Text, AsyncStorage, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

const data = [
  { id: '1', title: 'Croquettes', icon: 'paw' },
  { id: '2', title: 'Pâtées', icon: 'food' },
  { id: '3', title: 'Nourriture maison', icon: 'utensils' },
  { id: '4', title: 'Alimentation BARF', icon: 'bone' },
  { id: '5', title: 'Friandises', icon: 'cookie' },
]

export default function FeedYourDog_Component() {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  useEffect(() => {
    // Charger les préférences alimentaires sauvegardées avec AsyncStorage
    const loadPreferences = async () => {
      try {
        const savedPreferences =
          await AsyncStorage.getItem('dogFoodPreferences')
        if (savedPreferences) {
          setSelectedItems(JSON.parse(savedPreferences))
        }
      } catch (error) {
        console.error('Failed to load preferences', error)
      }
    }
    loadPreferences()
  }, [])

  const handleSelectItem = async (itemId: string) => {
    let newSelection
    if (selectedItems.includes(itemId)) {
      newSelection = selectedItems.filter(id => id !== itemId)
    } else {
      newSelection = [...selectedItems, itemId]
    }

    setSelectedItems(newSelection)
    try {
      await AsyncStorage.setItem(
        'dogFoodPreferences',
        JSON.stringify(newSelection),
      )
    } catch (error) {
      console.error('Failed to save preferences', error)
    }
  }

  const renderItem = ({
    item,
  }: {
    item: { id: string; title: string; icon: string }
  }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleSelectItem(item.id)}
    >
      <FontAwesome5 name={item.icon} size={24} color="black" />
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alimentation du chien</Text>
      <Text style={styles.text}>
        L'alimentation de votre chien joue un rôle primordial dans sa santé et
        son bien-être. Une nourriture adaptée à ses besoins quotidiens est
        essentielle pour maintenir sa forme et son énergie. Organisez ses repas
        de manière à satisfaire ses besoins nutritionnels spécifiques, qu’il
        s’agisse de croquettes, de nourriture humide, ou de friandises.
      </Text>

      <Text style={styles.sectionTitle}>L’alimentation du chien</Text>
      <Text style={styles.text}>
        Le chien, descendant du loup, est principalement carnivore. Son
        alimentation doit donc se baser sur une majorité de protéines animales,
        mais elle doit aussi inclure des céréales et des légumes verts pour un
        équilibre nutritionnel complet.
      </Text>

      <Text style={styles.sectionTitle}>
        Nourriture maison ou industrielle ?
      </Text>
      <Text style={styles.text}>
        Vous avez deux choix pour nourrir votre chien : préparer vous-même ses
        repas à la maison ou opter pour une nourriture industrielle. Plus de 80
        % des maîtres choisissent la nourriture industrielle. Les deux options
        ont leurs avantages et leurs contraintes, mais il est important de ne
        pas passer d’une à l’autre de manière trop fréquente. Si vous souhaitez
        les combiner, vous pouvez donner à votre chien un repas industriel et un
        repas maison chaque jour.
      </Text>

      <Text style={styles.sectionTitle}>
        Comment savoir si la nourriture convient à votre chien ?
      </Text>
      <Text style={styles.text}>
        Observez l'état du poil de votre chien, sa digestion et ses selles. Si
        son poil devient terne, si des flatulences fréquentes apparaissent ou si
        ses selles sont mal formées, cela peut être un signe que son
        alimentation ne lui convient pas. N’hésitez pas à consulter un
        vétérinaire pour vérifier l’adéquation de sa nourriture.
      </Text>

      <Text style={styles.sectionTitle}>Les friandises pour chien</Text>
      <Text style={styles.text}>
        En complément de ses repas quotidiens, vous pouvez offrir à votre chien
        des friandises spéciales. Elles doivent être adaptées à sa taille et à
        ses besoins. Toutefois, le choix d’une nourriture de qualité reste
        essentiel pour préserver sa santé.
      </Text>

      <Text style={styles.sectionTitle}>
        Comment nourrir son chien avec des préparations maison ?
      </Text>
      <Text style={styles.text}>
        Pour nourrir votre chien avec des repas maison, vous avez deux options :
        préparer des repas traditionnels ou adopter une alimentation naturelle
        comme le régime BARF.
      </Text>

      <Text style={styles.subSectionTitle}>Recette maison classique</Text>
      <Text style={styles.text}>
        Ce régime comprend de la viande, des féculents (riz ou pâtes bien cuits)
        et des légumes verts, avec un supplément minéralo-vitaminé pour éviter
        les carences.
      </Text>

      <Text style={styles.subSectionTitle}>Alimentation type BARF</Text>
      <Text style={styles.text}>
        Ce régime se base sur l’alimentation crue, pour un retour aux origines
        carnivores du chien. Cependant, il nécessite une attention particulière
        en matière d’hygiène et de stockage des aliments, ainsi qu’un vermifuge
        plus fréquent.
      </Text>

      <Text style={styles.sectionTitle}>
        Avantages et inconvénients de la nourriture maison
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Avantages :</Text>
        {'\n'}- Le plaisir de cuisiner pour son chien{'\n'}- La connaissance de
        la provenance des ingrédients{'\n'}- Une meilleure digestibilité{'\n'}
        <Text style={styles.bold}>Inconvénients :</Text>
        {'\n'}- Durée de conservation limitée{'\n'}- Risques de carences
        nutritionnelles{'\n'}- Moins pratique si votre chien est confié à un
        tiers{'\n'}- Coût plus élevé que les aliments industriels
      </Text>

      <Text style={styles.sectionTitle}>
        Pourquoi choisir une alimentation industrielle pour son chien ?
      </Text>
      <Text style={styles.text}>
        Les aliments industriels sont spécifiquement conçus pour répondre à tous
        les besoins nutritionnels de votre chien. Leur coût est souvent
        inférieur à celui des repas maison, et ils sont très pratiques à
        utiliser. Ils se déclinent en diverses gammes pour répondre aux besoins
        des chiens de toutes tailles, races et âges.
      </Text>

      <Text style={styles.sectionTitle}>
        Croquettes pour chien (aliments secs)
      </Text>
      <Text style={styles.text}>
        Les croquettes sont fabriquées avec des ingrédients variés, et sont
        considérées comme des « aliments complets », ce qui signifie qu'elles
        sont suffisamment équilibrées pour nourrir votre chien sans provoquer de
        carences. Elles se conservent longtemps et sont faciles à stocker.
        Toutefois, elles manquent d’humidité, et il est important que votre
        chien boive suffisamment pour éviter des problèmes rénaux.
      </Text>

      <Text style={styles.sectionTitle}>
        Pâtées pour chien (aliments humides)
      </Text>
      <Text style={styles.text}>
        Les pâtées contiennent environ 85 % d'humidité et sont plus appétentes
        que les croquettes. Cependant, elles peuvent favoriser l'accumulation de
        tartre, car elles n'ont pas l'effet de brossage des dents que procurent
        les croquettes. Soyez attentif à la mention « aliment complémentaire »
        sur l’emballage, car certaines pâtées ne suffisent pas pour une
        alimentation complète.
      </Text>

      <Text style={styles.sectionTitle}>
        Comment choisir ses aliments industriels ?
      </Text>
      <Text style={styles.text}>
        Pour garantir la qualité de la nourriture de votre chien, comparez la
        liste des ingrédients des différents produits. Préférez les marques qui
        détaillent précisément la composition. Les produits de qualité
        inférieure peuvent contenir trop de céréales et pas assez de protéines
        animales. Les gammes « Super Premium » offrent des aliments de haute
        qualité, facilement digestibles et très appétents.
      </Text>

      <Text style={styles.sectionTitle}>
        Comment organiser les repas quotidiens de son chien ?
      </Text>
      <Text style={styles.text}>
        Les chiens peuvent être nourris en un seul repas ou deux par jour, avec
        des horaires fixes. Il est recommandé de donner deux repas par jour,
        surtout pour les grandes races. Pour les chiots, la ration est
        généralement divisée en trois repas.
      </Text>

      <Text style={styles.sectionTitle}>Quelle quantité de nourriture ?</Text>
      <Text style={styles.text}>
        La quantité de nourriture que vous devez donner à votre chien dépend de
        son poids, de son activité et de son âge. Suivez les recommandations du
        fabricant de la nourriture industrielle et ajustez la quantité si
        nécessaire.
      </Text>

      <Text style={styles.sectionTitle}>
        Les allergies alimentaires chez les chiens
      </Text>
      <Text style={styles.text}>
        Certains chiens sont sensibles ou allergiques à certains ingrédients
        alimentaires, comme le gluten, le soja ou les produits laitiers. Si
        votre chien présente des symptômes comme des démangeaisons, des
        vomissements ou des problèmes de peau, consultez un vétérinaire pour
        identifier les aliments responsables.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
  },
})
