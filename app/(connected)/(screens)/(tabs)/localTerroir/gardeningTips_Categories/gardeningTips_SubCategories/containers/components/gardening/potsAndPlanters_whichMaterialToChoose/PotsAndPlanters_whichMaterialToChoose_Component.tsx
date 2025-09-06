import React from 'react'
import { View, FlatList, Text, StyleSheet, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const data = [
  {
    title: 'Pots en Terre Cuite',
    description: `Matériau naturel et écologique, connu pour sa capacité à offrir une bonne aération et un bon drainage des racines des plantes. Poreuse, elle permet à l'air et à l'eau de circuler, ce qui est bénéfique pour les racines. Isolants, ces pots offrent aussi une certaine protection contre la chaleur et le froid. Bien que la terre cuite soit parfois considérée comme gélive, de nombreux pots modernes sont résistants au gel. En revanche, ils sont assez lourds, ce qui peut être un atout en extérieur, surtout sur des balcons ou des terrasses exposées au vent. Ces pots peuvent être fragiles aux chocs et leur poids peut être un facteur à prendre en compte.`,
    icon: 'local-florist',
  },
  {
    title: 'Bacs en Bois',
    description: `Matériau naturel et résistant, souvent utilisé pour des bacs de grande taille qui sont parfaits pour planter des arbustes ou des plantes nécessitant beaucoup d'espace pour les racines. Ce matériau est **isolant** et permet une bonne protection des racines contre les températures extrêmes. Le bois peut être traité pour résister à l'humidité et à la putréfaction. En fonction du type de bois et de son entretien, ces bacs peuvent durer longtemps. Cependant, le bois nécessite un entretien régulier pour préserver sa durabilité.`,
    icon: 'grass',
  },
  {
    title: 'Pots en Plastique ou Résine',
    description: `Populaires pour leur légèreté et leur résistance aux chocs. Faciles à déplacer, ces pots sont également disponibles dans une large gamme de formes et de couleurs, offrant un large éventail d'options pour personnaliser votre espace extérieur. Ils sont **étanches**, ce qui peut être bénéfique pour conserver l'humidité, mais cela peut aussi empêcher une bonne circulation de l'air autour des racines. Les pots en plastique ou résine sont particulièrement adaptés pour des pots à réserve d'eau, et leur durabilité dépendra de la qualité du matériau utilisé.`,
    icon: 'invert-colors',
  },
  {
    title: 'Pots en Métal',
    description: `Les pots en métal, tels que ceux fabriqués en **zinc** ou en **aluminium laqué**, sont modernes et très résistants. Leur finition brillante ou patinée leur donne un charme particulier, souvent associé à un style vintage ou industriel. Cependant, ces pots ne sont pas isolants, ce qui signifie qu'ils peuvent entraîner des variations de température plus importantes pour les racines des plantes. Les pots en métal ont une longue durée de vie et sont résistants à la rouille grâce à des traitements comme le galvanisage.`,
    icon: 'panorama-fish-eye',
  },
  {
    title: 'Pots en Fibres',
    description: `Très légers et souvent fabriqués à partir de matériaux comme la **terre**, l'**argile**, la **résine**, et des **fibres naturelles** telles que le bambou. Ils sont durables, résistants au gel, et leur aspect rappelle celui de la terre cuite ou de la pierre. Ces pots sont de plus en plus populaires en raison de leur **légèreté**, ce qui les rend faciles à déplacer. La durabilité de ces pots dépend de la composition et de la qualité des matériaux utilisés.`,
    icon: 'filter-vintage',
  },
  {
    title: 'Pots en Béton',
    description: `Très solides et durables, parfaits pour des environnements modernes et contemporains. Ils sont résistants aux chocs et aux intempéries. Toutefois, leur poids peut être un inconvénient si vous prévoyez de déplacer fréquemment les pots. Leur apparence brute et industrielle peut être idéale pour des décors extérieurs minimalistes, mais ces pots sont parfois concurrencés par des matériaux plus légers, comme les pots en fibres.`,
    icon: 'build',
  },
  {
    title: 'Pots en Géotextile',
    description: `Les pots en géotextile sont relativement récents et se distinguent par leur légèreté et leur perméabilité. Ce matériau est très favorable au développement des racines des plantes, car il permet à l'air et à l'eau de circuler facilement. De plus, les pots en géotextile sont **pliables** et très faciles à transporter. Ils sont particulièrement appréciés pour leur aspect pratique et pour les petits espaces comme les balcons ou jardins urbains.`,
    icon: 'cloud-upload',
  },
  {
    title: 'Pots en Osier',
    description: `Souvent utilisé pour des pots de petites tailles ou comme cache-pot. Si les pots en osier sont doublés d'un film **imperméable**, ils peuvent être utilisés pour planter directement des végétaux. Cependant, leur durabilité est limitée, et ils ne conviennent pas pour des plantations de grande envergure. L'osier est surtout apprécié pour son aspect esthétique et son côté traditionnel.`,
    icon: 'style',
  },
]

export default function PotsAndPlanters_whichMaterialToChoose_Component() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <MaterialIcons name={item.icon} size={24} color="black" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f8f8f8',
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
})
