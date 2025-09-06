import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const conseils = [
  {
    title: 'Anticiper le manque d’eau',
    content:
      'Quand la sécheresse menace, il est essentiel de préparer le sol dès le printemps pour qu’il conserve un maximum d’humidité. Cela permet de préserver vos plantes durant l’été.',
  },
  {
    title: 'Aérer la terre efficacement',
    content:
      'Retourner la couche supérieure du sol avec une bêche ou une binette permet de mieux faire pénétrer l’eau. Cette étape est importante, surtout sur les sols argileux qui ont tendance à se compacter.',
  },
  {
    title: 'Enrichir le sol pour retenir l’eau',
    content:
      'Incorporer du compost ou du fumier améliore la structure du sol. Ces matières organiques absorbent l’eau comme une éponge et la redistribuent aux racines selon les besoins.',
  },
  {
    title: 'Installer un paillage protecteur',
    content:
      'Pour limiter l’évaporation, il est conseillé de pailler la surface du sol. Cela évite que la chaleur forme une croûte qui empêcherait l’eau de pénétrer profondément.',
  },
  {
    title: 'Types de paillage organique',
    content:
      'Tontes de gazon, feuilles mortes, paillis de lin, chanvre ou écorces : tous ces paillages végétaux se décomposent et enrichissent la terre naturellement.',
  },
  {
    title: 'Paillages minéraux pour plus de durabilité',
    content:
      'Graviers, ardoises ou billes d’argile offrent une protection longue durée contre les intempéries et limitent efficacement la pousse des mauvaises herbes.',
  },
  {
    title: 'Récapitulatif à retenir',
    content:
      '- Aérer le sol\n- Apporter du compost\n- Pailler la surface\nCes actions simples optimisent la gestion de l’eau au jardin.',
  },
  {
    title: 'FAQ - Questions fréquentes',
    content:
      'Quels apports améliorent la rétention d’eau ? Le compost et le fumier. Comment reconnaître un sol enrichi ? Il est foncé, souple et retient bien l’humidité sans se gorger d’eau.',
  },
]

export default function FeedTheSoil_waterLess_Component() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <MaterialIcons
        name="opacity"
        size={24}
        color="#4CAF50"
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.content}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={conseils}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  icon: {
    marginRight: 10,
    marginTop: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
  },
})
