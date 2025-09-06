import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native'
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
} from '@expo/vector-icons'

interface Reason {
  id: string
  title: string
  description: string
  icon: JSX.Element
}

const kongReasons: Reason[] = [
  {
    id: '1',
    title: 'Un jouet polyvalent et intelligent',
    description: `Créé dans les années 70, le Kong a conquis les chiens et leurs maîtres grâce à sa forme creuse et ses différentes tailles. Il peut être rempli de friandises pour occuper le chien intelligemment et servir de support éducatif.`,
    icon: (
      <MaterialCommunityIcons
        name="lightbulb-on-outline"
        size={28}
        color="#f57c00"
      />
    ),
  },
  {
    id: '2',
    title: 'Satisfaire son besoin de mastication',
    description: `Les chiots comme les adultes ont besoin de mâcher. Le Kong, solide et texturé, est idéal pour soulager les douleurs dentaires et canaliser l’énergie destructrice.`,
    icon: <FontAwesome5 name="bone" size={24} color="#795548" />,
  },
  {
    id: '3',
    title: 'Un outil éducatif puissant',
    description: `En l’associant à des friandises, le Kong permet de renforcer les comportements positifs (ex : rester dans le panier). Il aide aussi à diminuer le stress lors de l’apprentissage.`,
    icon: <Entypo name="graduation-cap" size={26} color="#1976d2" />,
  },
  {
    id: '4',
    title: 'Contrôler son poids',
    description: `Pour les chiens gourmands ou en surpoids, le Kong est un distributeur qui allonge le temps de repas. Il ralentit la prise alimentaire, ce qui favorise la satiété.`,
    icon: (
      <MaterialCommunityIcons name="scale-bathroom" size={28} color="#009688" />
    ),
  },
  {
    id: '5',
    title: 'Gérer les absences et l’anxiété',
    description: `Lorsqu’il est seul, le chien peut se sentir stressé. Le Kong rempli de friandises détourne son attention et l’aide à mieux vivre vos absences, surtout s’il est jeune.`,
    icon: <FontAwesome5 name="door-open" size={24} color="#9e9e9e" />,
  },
  {
    id: '6',
    title: 'Stimuler par le jeu',
    description: `Au-delà de son aspect éducatif, le Kong est aussi un jouet. Grâce à sa forme irrégulière, il rebondit de manière imprévisible, rendant les parties de jeu plus amusantes.`,
    icon: <MaterialCommunityIcons name="dog" size={28} color="#4caf50" />,
  },
  {
    id: '7',
    title: 'Des doudous résistants et câlins',
    description: `Les Kong peluches comme les Wild Knots Bears sont doux mais solides, dotés de cordes internes et parfois de sifflets. Parfait pour le réconfort après une session de jeu.`,
    icon: <Entypo name="emoji-happy" size={26} color="#f06292" />,
  },
  {
    id: '8',
    title: 'Renforcer le lien maître-chien',
    description: `Jouer avec son chien est essentiel. Les jouets Kong (frisbees, cordes, Wubbas) favorisent la complicité tout en répondant à ses instincts de poursuite et de tiraillement.`,
    icon: <FontAwesome5 name="handshake" size={24} color="#3f51b5" />,
  },
  {
    id: '9',
    title: 'Un rafraîchissement ludique l’été',
    description: `Le Kong peut être congelé avec une recette à base de fromage frais, croquettes et bâton de viande. Cela le transforme en glace savoureuse et hydratante pour votre chien.`,
    icon: <MaterialCommunityIcons name="snowflake" size={28} color="#00bcd4" />,
  },
]

export default function KongDogToy_Component() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Pourquoi offrir un jouet Kong à votre chien ?
      </Text>

      <FlatList
        data={kongReasons}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.icon}>{item.icon}</View>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardText}>{item.description}</Text>
            </View>
          </View>
        )}
      />

      <Text style={styles.subtitle}>Recette de Kong glacé pour l’été</Text>

      <View style={styles.recipeBlock}>
        <Text style={styles.cardText}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            🍦 Ingrédients :
          </Text>
          {'\n'}- Fromage frais (chèvre de préférence)
          {'\n'}- Croquettes (à déduire de la ration)
          {'\n'}- Bâton de viande séchée
          {'\n'}- Jouet Kong adapté à la taille de votre chien
        </Text>

        <Text style={[styles.cardText, { paddingTop: 15 }]}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>🧊 Étapes :</Text>
          {'\n'}1. Garnir le fond du Kong avec du fromage frais.
          {'\n'}2. Ajouter quelques croquettes, puis compléter avec du fromage.
          {'\n'}3. Insérer le bâton de viande comme bâtonnet de glace.
          {'\n'}4. Placer au congélateur pendant 1h30.
          {'\n'}5. Nettoyer le jouet après utilisation.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#333',
  },
  recipeBlock: {
    backgroundColor: '#f0f4c3',
    padding: 14,
    borderRadius: 10,
    marginBottom: 32,
  },
})
