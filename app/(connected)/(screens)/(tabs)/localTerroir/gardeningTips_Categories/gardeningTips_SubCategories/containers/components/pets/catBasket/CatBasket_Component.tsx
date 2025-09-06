import React from 'react'
import { View, FlatList, Text, StyleSheet, ScrollView } from 'react-native'

interface Section {
  id: string
  title: string
  content: string
}

const sections: Section[] = [
  {
    id: '1',
    title: 'Le chat et ses longues siestes',
    content:
      'Sujet aux grasses matinées et aux siestes à répétition, le chat est un animal qui passe beaucoup de temps à dormir. Les propriétaires de chat savent qu’il est également capable de dormir presque n’importe où. Pour autant, votre petit félin a tout de même besoin de son panier pour chat bien à lui !',
  },
  {
    id: '2',
    title: 'Pourquoi un panier pour chat ?',
    content:
      'Votre chat dort partout : sur le canapé, sur votre lit, en haut d’une armoire… Mais cela ne signifie pas qu’il n’a pas besoin d’un panier pour chat, voire deux ! En effet, tous ces endroits de la maison qu’il s’approprie le temps d’une sieste ne sont pas uniquement à lui. Par exemple, un fauteuil convoité par votre animal est peut être déjà occupé, ce qui ne manquera pas de le contrarier. Voilà pourquoi votre chat doit avoir un endroit qui ne soit qu’à lui et où il sait que la place est toujours libre.',
  },
  {
    id: '3',
    title: 'Les avantages d’avoir deux paniers pour votre chat',
    content:
      'Pour un bonheur total, vous pouvez prévoir deux paniers pour votre chat. Un modèle ouvert de type corbeille ou coussin afin qu’il s’y étale de tout son long, et un panier façon igloo ou tipi qui lui permette de se reposer à l’abri des regards, ou de vous observer en toute discrétion.',
  },
  {
    id: '4',
    title: 'L’emplacement idéal du panier',
    content:
      'Le panier principal doit être placé dans le salon, derrière une fenêtre ensoleillée ou au moins dans un endroit lumineux. S’il y a un deuxième panier, il peut être installé dans un autre coin de la pièce (ne placez pas les deux paniers côte à côte), ou dans la cuisine qui est aussi un lieu de vie que les chats adorent.',
  },
  {
    id: '5',
    title: 'Respect de l’espace du chat',
    content:
      'Dans l’idéal, ce petit havre de paix doit être respecté par toute la famille : lorsque le chat est dans son panier, il est préférable de ne pas aller le caresser ni le prendre dans les bras. Ce caractère « intouchable » du panier favorise la quiétude de votre animal. Sachez toutefois que ce n’est pas parce que votre chat a un ou deux paniers qu’il ne continuera pas à venir se prélasser sur votre canapé ! Mais ce sera sûrement moins fréquent.',
  },
  {
    id: '6',
    title: 'Panier pour chat en hiver',
    content:
      'Conseil : à la saison froide, rapprochez le panier de votre chat de la cheminée ou du radiateur, tout en gardant une distance de sécurité suffisante.',
  },
  {
    id: '7',
    title: 'Les différents types de paniers',
    content:
      '• Le panier souple : dans lequel votre chat aimera se lover tant les contours sont malléables\n• La corbeille pour chat : ou le panier en plastique, le plus simple à entretenir dans le temps\n• Le panier en osier : particulièrement tendance en termes de décoration intérieure, assorti d’un coussin moelleux, ce panier apporte confort et stabilité à votre chat\n• Le panier en rotin : tout comme l’osier, le rotin se marie à merveille avec la plupart des styles déco et de nombreuses formes sont disponibles\n• Le panier en bambou : pour un intérieur zen et un chat bien dans ses pattes\n• Le coussin pour chat : pour les gros matous qui aiment s’étirer de tout leur long sans contraintes de rebords\n• Le plaid : façon épaisse couverture qui invite à venir s’y allonger\n• Le panier en polaire : apporte une douceur et une chaleur incomparables\n• Le lit pour chat : en format rectangulaire, parfait pour venir s’insérer dans un angle de la pièce et offrir un bel espace à votre chat\n• Le tipi pour chat : fournit un endroit clos où il se sentira en totale sécurité\n• Le hamac pour chat : en version à fixer au mur ou monté sur un support indépendant, le fait de dormir un peu en hauteur peut rassurer des chats en manque de confiance, particulièrement dans un environnement agité (avec par exemple des enfants qui jouent un peu brusquement)',
  },
  {
    id: '8',
    title: 'Choisir la forme et la taille',
    content:
      'Les paniers pour chats sont le plus souvent proposés au format rond. Toutefois, ils existent aussi en modèles carrés, rectangulaires, voire octogonaux. La forme du panier répond à vos critères esthétiques. Votre chat ne fera pas cas de ce détail. En revanche, la taille du panier est à choisir avec soin : trop petit il sera inconfortable, trop grand il ne sera pas assez rassurant pour votre chat.',
  },
  {
    id: '9',
    title: 'Nettoyer votre panier à chat',
    content:
      'Pour faciliter l’entretien de votre panier à chat, assurez-vous tout d’abord de choisir des coussins déhoussables que vous pourrez passer à la machine à laver. Pour le rembourrage, contentez-vous de le taper à l’extérieur afin d’en extraire la poussière.\n\nPour un panier en plastique, un coup d’éponge, voire un lavage à grande eau au jet. Si vous utilisez un produit ménager, ayez la main légère et choisissez un nettoyant sans odeur. Laissez sécher votre panier avant de remettre le coussin, mais jamais au soleil afin d’éviter les déformations.\n\nPour un panier en fibres naturelles (bambou, rotin, osier…), passez un coup de balayette puis finissez au chiffon afin de faire sortir toute la poussière. Pour d’éventuelles tâches, vous pouvez utiliser une éponge légèrement imbibée d’eau.',
  },
  {
    id: '10',
    title: 'Que faire si votre chat n’utilise pas son panier ?',
    content:
      'Il peut arriver que votre chat boude son nouveau panier les premiers temps. Pas de panique, la plupart du temps il finira par venir s’y installer au bout de 2 à 3 jours. Toutefois si la situation ne s’améliore pas, il se peut que :\n• Le panier ne soit pas dans un lieu de vie comme le salon\n• L’endroit ne soit pas suffisamment ensoleillé\n• Un autre animal vienne se coucher dans le panier et y laisse son odeur\n• Des enfants jouent avec le panier, ce qui n’aide pas le chat à se l’approprier.\n\nCertains chats ont également du mal à dormir à même le sol. Vous pouvez remarquer ce comportement si votre chat préfère les endroits en hauteur pour se reposer (le haut d’une armoire, une étagère…). Dans ce cas de figure, tentez de lui installer son panier en hauteur, dans un endroit sécurisé tout de même.\nSi vous n’avez pas cette possibilité, essayez de surélever le panier avec une caisse solide. Quelques dizaines de centimètres au-dessus du sol suffisent parfois à rassurer un matou en manque de confiance.',
  },
]

export default function CatBasket_Component() {
  const renderItem = ({ item }: { item: Section }) => (
    <View style={styles.section}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  )

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={sections}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5, // For Android
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
})
