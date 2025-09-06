import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const data = [
  {
    title: 'Faut-il stériliser votre chat ?',
    description:
      "La décision de stériliser votre chat est souvent difficile. D'un côté, il s'agit de renoncer à la possibilité d\'avoir des chatons, mais de l\'autre, vous offrez à votre compagnon une vie plus sereine et en bonne santé, parfois plus longue. Voici un résumé des principaux aspects à considérer avant de prendre cette décision importante.",
    icon: 'md-paw',
  },
  {
    title: 'La stérilisation de votre chat : Âge et Coût',
    description:
      "La stérilisation, qu'il s'agisse de la castration pour le mâle ou de l'ovariectomie pour la femelle, est une intervention chirurgicale. Elle consiste à retirer une partie de l'appareil reproducteur, un choix irréversible. Avant de décider, il est essentiel d'en discuter avec votre vétérinaire.",
    icon: 'md-cash',
  },
  {
    title: 'L’ovariectomie chez la chatte',
    description:
      "L'ovariectomie consiste à retirer les ovaires de la chatte, une opération courante réalisée sous anesthésie générale. Bien que les risques soient faibles, toute intervention chirurgicale comporte des risques mineurs liés à l'anesthésie.",
    icon: 'md-paw',
  },
  {
    title: 'La castration chez le chat',
    description:
      'La castration chez le mâle consiste à retirer les testicules sous anesthésie générale. Il existe plusieurs techniques possibles, n’hésitez pas à demander des détails à votre vétérinaire.',
    icon: 'md-paw',
  },
  {
    title: 'Pourquoi stériliser un chat ?',
    description:
      "La stérilisation est fortement recommandée si vous n’avez pas l'intention de faire reproduire votre chat. Elle est non seulement bénéfique pour la santé de l'animal, mais elle améliore également la vie des maîtres.",
    icon: 'md-heart',
  },
  {
    title: 'Le cycle de chaleur chez la chatte',
    description:
      "Les chattes atteignent la maturité sexuelle autour de 6 mois. Elles connaissent des périodes de chaleur, généralement tous les mois, bien que cela puisse varier d'une race à l'autre. Les chaleurs peuvent durer entre 1 et 3 semaines et sont plus fréquentes pendant la belle saison.",
    icon: 'md-calendar',
  },
  {
    title: 'Avantages de la stérilisation pour la chatte',
    description:
      'Disparition des comportements liés au cycle sexuel, comme les miaulements excessifs, les fugues ou l’attachement excessif. Prévention des maladies sexuellement transmissibles et des tumeurs ovariennes ou mammaires, qui représentent 15 % des cancers chez la chatte.',
    icon: 'md-checkmark-circle',
  },
  {
    title: 'Pourquoi castrer un chat mâle ?',
    description:
      'La castration permet de prévenir plusieurs problèmes, comme les comportements liés au rut (bagarres, fugues, marquage de territoire). Elle empêche également les vagabondages.',
    icon: 'md-paw',
  },
  {
    title: 'Alternatives à la stérilisation',
    description:
      "Il existe des options contraceptives pour les chattes, comme la pilule orale ou l’injection hormonale. Toutefois, ces méthodes sont à utiliser avec prudence car elles peuvent favoriser des infections de l'utérus ou le développement de tumeurs. Consultez votre vétérinaire avant de choisir cette solution.",
    icon: 'md-options',
  },
  {
    title: 'Comment prendre soin de votre chat stérilisé ?',
    description:
      "Après la stérilisation, il est important de donner à votre chat une alimentation adaptée. Discutez-en avec votre vétérinaire pour connaître les meilleures options pour éviter l'obésité et d'autres problèmes de santé.",
    icon: 'md-nutrition',
  },
  {
    title: 'Attention au surpoids !',
    description:
      "Un des inconvénients de la stérilisation est la tendance à prendre du poids, surtout chez les mâles, qui peuvent prendre jusqu'à 2 kg en seulement 2 mois, soit l'équivalent de 30 kg pour un homme de 60 kg. Cette prise de poids peut entraîner des problèmes de santé comme des cristaux urinaires, qui sont une urgence vétérinaire.",
    icon: 'md-warning',
  },
  {
    title: 'Conseils pour garder votre chat en forme après la stérilisation',
    description:
      "Voici quelques astuces pour éviter que votre chat ne prenne trop de poids : Choisissez une alimentation équilibrée, offrez de l'eau à volonté, privilégiez une alimentation mixte, et encouragez l'exercice physique.",
    icon: 'md-fitness',
  },
  {
    title: 'Alimentation équilibrée',
    description:
      'Optez pour une nourriture faible en graisses et en glucides, mais riche en protéines pour maintenir la masse musculaire. Privilégiez les produits spécifiquement conçus pour les chats stérilisés.',
    icon: 'md-fastfood',
  },
  {
    title: 'L’eau à volonté',
    description:
      "Assurez-vous que votre chat ait toujours de l'eau propre à disposition. Une fontaine peut l’inciter à boire davantage.",
    icon: 'md-water',
  },
  {
    title: 'Alimentation mixte',
    description:
      'Combinez croquettes et pâtée pour favoriser une meilleure satiété et éviter les maladies urinaires. Assurez-vous que la pâtée soit étiquetée "aliment complet".',
    icon: 'md-pizza',
  },
  {
    title: 'Encouragez l’exercice',
    description:
      'Fournissez des jouets et un arbre à chat pour stimuler son activité physique. Cacher de la nourriture ou utiliser des distributeurs de croquettes peut également éveiller ses instincts de chasseur.',
    icon: 'md-walk',
  },
]

export default function CatSterilisation_Component() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Ionicons name={item.icon} size={30} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      )}
      keyExtractor={item => item.title}
    />
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
})
