import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import freedomIcon from '@/assets/icons/(connected)/screens/(tabs)/localTerroir/gardeningTips/adviceOnDogsAndCats/mainScreen/components/catFlap/icon_cat_1.png'
import classicIcon from '@/assets/icons/(connected)/screens/(tabs)/localTerroir/gardeningTips/adviceOnDogsAndCats/mainScreen/components/catFlap/icon_cat_1.png'
import autoIcon from '@/assets/icons/(connected)/screens/(tabs)/localTerroir/gardeningTips/adviceOnDogsAndCats/mainScreen/components/catFlap/icon_cat_1.png'
import optionsIcon from '@/assets/icons/(connected)/screens/(tabs)/localTerroir/gardeningTips/adviceOnDogsAndCats/mainScreen/components/catFlap/icon_cat_1.png'
import installIcon from '@/assets/icons/(connected)/screens/(tabs)/localTerroir/gardeningTips/adviceOnDogsAndCats/mainScreen/components/catFlap/icon_cat_1.png'

interface SectionProps {
  title: string
  icon: any
  children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
    <Text style={styles.content}>{children}</Text>
  </View>
)

export default function CatFlap_Component() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Section title="Pourquoi une chatière ?" icon={freedomIcon}>
        Offrez à votre chat la liberté d’aller et venir comme il le souhaite,
        même en votre absence. Une chatière bien choisie facilite son autonomie
        tout en vous simplifiant la vie.
      </Section>

      <Section title="Chatières classiques" icon={classicIcon}>
        Simples à utiliser, ces modèles à porte battante laissent le chat entrer
        et sortir à sa guise. Le verrouillage manuel à 4 positions permet de
        contrôler les allées et venues.
      </Section>

      <Section title="Chatières automatiques" icon={autoIcon}>
        Elles utilisent un collier magnétique, infrarouge ou reconnaissent la
        puce électronique du chat. Certaines sont connectées à une application
        mobile pour un contrôle à distance.
      </Section>

      <Section title="Dimensions et options" icon={optionsIcon}>
        Adaptez la taille à votre chat. Choisissez une chatière silencieuse ou
        isolante pour plus de confort. Plusieurs coloris sont disponibles selon
        vos goûts.
      </Section>

      <Section title="Installation" icon={installIcon}>
        Installez la chatière à 15 cm du sol sur une surface plane. Suivez les
        instructions avec le gabarit fourni, fixez les deux parties et aidez
        votre chat à s’y habituer avec des friandises.
      </Section>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
  },
})
