import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

const data = [
  {
    title: 'Nos chiens et nos chats vivent de plus en plus longtemps.',
    content:
      'Une alimentation adaptée, une médecine performante et le confort d’un foyer protecteur permettent à nos animaux de bien vivre leur vieillesse.',
  },
  {
    title: 'À quel âge nos chiens et nos chats commencent-ils à vieillir ?',
    content:
      'Le vieillissement de nos animaux se divise en deux phases. La maturité commence lorsque le chien ou le chat montre des signes subtils, comme des poils blancs ou un comportement plus calme. La période senior, quant à elle, est marquée par des signes plus visibles comme le blanchissement de la fourrure et un affaiblissement des capacités physiques et cognitives.',
  },
  {
    title: 'Quelle est l’espérance de vie des chats et des chiens ?',
    content:
      'Chez le chat, l’espérance de vie est d’environ 14 à 15 ans, bien que certains puissent vivre plus longtemps. Les signes de vieillissement apparaissent généralement autour de 10 ans. Chez le chien, l’espérance de vie varie selon la race, la taille et le poids, allant de 10 à 16 ans. Les petits chiens deviennent matures vers 8 ans, les moyens vers 7 ans, et les grands vers 5 ans.',
  },
  {
    title: 'Reconnaître les signes de vieillesse chez le chien et le chat',
    content:
      'Chez le chien âgé, vous pourriez remarquer des difficultés à se déplacer, une perte de poids, une mauvaise haleine, ou un manque d’entrain lors des promenades. Le chat senior pourrait souffrir de douleurs articulaires, d’une mauvaise haleine, et de la perte de ses sens comme la vue et l’ouïe. Des maladies fréquentes chez le chat âgé incluent l’hyperthyroïdie, l’insuffisance rénale chronique, et le diabète.',
  },
  {
    title: 'Comment aider son chien ou son chat à bien vieillir ?',
    content:
      'Pour aider vos animaux vieillissants, il est essentiel d’adapter leur environnement : choisissez des paniers et litières accessibles, placez des commodités au rez-de-chaussée, et évitez les escaliers. Pour les sorties, optez pour des promenades plus courtes mais plus fréquentes. Il est également recommandé de fournir une alimentation spécifique, comme des croquettes et pâtées adaptées aux besoins des animaux âgés, riches en vitamines et minéraux.',
  },
  {
    title: 'Chien ou chat âgé : nos astuces',
    content:
      'Pour préserver le bien-être de vos animaux âgés, il est important de leur offrir un environnement calme et stable. Évitez de perturber leurs habitudes quotidiennes et assurez-vous qu’ils puissent se reposer tranquillement. En cas de miaulements fréquents ou de comportements inhabituels, il est important de ne pas punir votre animal, car il n’est pas responsable de ces changements.',
  },
  {
    title: 'Facilitez-leur la vie',
    content:
      'Rendez les paniers et litières accessibles ! Évitez ceux avec de trop hauts rebords. Adoptez un matelas épais pour votre chien et prévoyez un marchepied pour que le chat monte sur son fauteuil préféré. Placez les commodités au rez-de-chaussée pour qu’ils n’aient pas à monter d’escaliers. Si certaines marches sont un passage obligé, comme un perron, installez si vous le pouvez un plan incliné, moins contraignant pour les articulations.',
  },
  {
    title: 'Quelles sorties pour votre animal âgé ?',
    content:
      'En vieillissant, votre compagnon fera des sorties plus courtes. Surveillez votre chat, surtout si ses sens sont amoindris. Même dans un jardin qu’il connaît par cœur, il peut perdre ses repères. Pour votre chien âgé, réduisez la durée des promenades : une demi-heure peut être suffisante. En revanche, augmentez-en la fréquence, car l’incontinence est un problème récurrent.',
  },
  {
    title: 'Croquettes et pâtées pour animaux seniors',
    content:
      'Les gingivites, dues à l’accumulation de tartre, étant fréquentes, il convient de fournir à votre compagnon une nourriture plus facilement assimilable, sous forme de pâtée ou de croquettes humidifiées par exemple. Les aliments destinés aux chats et chiens âgés sont riches en éléments nécessaires au bon fonctionnement de leur organisme : ils sont renforcés en vitamines E et C, en polyphénols, en chondroprotecteurs ou en taurine. Pour les chats plus particulièrement, ils contiennent un taux réduit en phosphore et en sodium pour favoriser le bon fonctionnement de la fonction rénale.',
  },
  {
    title: 'Calme et habitude',
    content:
      'Les chats et les chiens vieillissants ont besoin de calme et de repères. Évitez de changer leurs habitudes et laissez-les se reposer.',
  },
  {
    title: 'Chien : un nouveau compagnon ?',
    content:
      'Il est possible dans certains cas d’adopter un chien plus jeune pour accompagner les vieux jours de votre compagnon, s’il n’est pas encore trop sénile (dans ce cas, la présence d’un chiot turbulent pourrait risquer de le perturber davantage).',
  },
  {
    title: 'Chat : ne le grondez pas',
    content:
      'Des nuits agitées, des miaulements fréquents, des oublis sur la moquette : la vieillesse d’un chat peut être difficile à vivre pour lui comme pour vous. Aidez-le à surmonter cette étape en lui simplifiant la tâche et en plaçant tout ce dont il a besoin dans un périmètre restreint (sans pour autant mettre la litière juste à côté de sa gamelle). Ne le grondez pas s’il urine n’importe où ou s’il vous réveille en pleine nuit, cela ne changera rien et il n’en est plus du tout responsable…',
  },
  {
    title: 'Attention',
    content:
      'Votre vétérinaire peut seul poser un diagnostic et vous orienter vers le bon traitement. Si vous avez la moindre interrogation sur la santé de votre animal, contactez votre vétérinaire.',
  },
  {
    title: 'Des questions ?',
    content:
      "Vous avez des questions sur le vieillissement de votre chat ou de votre chien ? N'hésitez pas à nous contacter ou à vous rendre dans une de nos jardineries Truffaut, un conseiller animalerie se fera un plaisir de répondre à vos questions.",
  },
]

export default function MyPetOldAge_Component() {
  const renderItem = ({
    item,
  }: {
    item: { title: string; content: string }
  }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  )

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#555',
  },
})
