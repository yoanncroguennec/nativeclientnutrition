// LIST CATEGORIES
import React, { useRef, useState } from 'react'
import {
  Animated,
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
// DATAS
import data_gardeningTips_Categories from '@/app/utils/constants/data/(connected)/screens/(tabs)/localTerroir/gardeningTips_Categories/data_gardeningTips_Categories'
// STYLES
import stylesGardeningTipsCategories_Screen from './StylesGardeningTipsCategories_Screen'
// ICONS
import { FontAwesome } from '@expo/vector-icons'

export default function GardeningTipsCategories_Screen() {
  // Styles
  const {
    introContainer,
    titleStyles,
    descStyles,
    card,
    imgBG_styles,
    overlay,
    btnTitle,
  } = stylesGardeningTipsCategories_Screen

  // Variables pour la barre de progression
  const scrollY = useRef(new Animated.Value(0)).current
  const [contentHeight, setContentHeight] = useState(1)
  const [visibleHeight, setVisibleHeight] = useState(1)

  // Animation pour l'opacité de la barre
  const opacity = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })

  const progressWidth = scrollY.interpolate({
    inputRange: [0, Math.max(contentHeight - visibleHeight, 1)],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  })

  // Fonction pour afficher l'élément
  const renderItem = ({
    item,
    index,
  }: {
    item: (typeof data_gardeningTips_Categories)[0]
    index: number
  }) => {
    if (index === 0) {
      return (
        <View style={introContainer}>
          <View
            style={{
              width: '100%',
              paddingVertical: 40,
              justifyContent: 'center',
              position: 'relative',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            {/* Chevron gauche */}
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                position: 'absolute',
                left: 16,
                backgroundColor: '#CECECE',
                borderRadius: 100,
                width: 30,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FontAwesome color="#000" name="chevron-left" size={18} />
            </TouchableOpacity>

            {/* Titre centré */}
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {item.title}
            </Text>

            {/* Icône + texte à droite */}
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                position: 'absolute',
                right: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('@/assets/icons/(connected)/screens/(tabs)/localTerroir/gardeningTips/gardeningTips_Categories/icon_AI_scanForPlantRecognition_1.png')}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'contain',
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    position: 'absolute',
                    textAlign: 'center',
                    bottom: -30,
                  }}
                >
                  Scanner{'\n'}Plante (IA)
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={descStyles}>{item.desc}</Text>
        </View>
      )
    }

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          item.route &&
            router.push({
              pathname: item.route,
              params: {
                imgBGTest: item.imgBGTest,
                route_Key: item.route_Key,
                titleBtn: item.titleBtn,
              },
            })
        }}
        style={card}
      >
        <ImageBackground
          source={item.imgBGTest}
          style={imgBG_styles}
          imageStyle={{ borderRadius: 12 }}
        >
          <View style={overlay}>
            <Text style={btnTitle}>{item.titleBtn}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      {/* Barre de progression dégradée */}
      <Animated.View
        style={{
          height: 6,
          backgroundColor: '#E0E0E0',
          borderRadius: 3,
          overflow: 'hidden',
          marginBottom: 10,
          opacity, // Animation d'opacité
        }}
      >
        <Animated.View style={{ width: progressWidth, height: '100%' }}>
          <LinearGradient
            colors={['#4CAF50', '#00BCD4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: '100%', width: '100%' }}
          />
        </Animated.View>
      </Animated.View>

      {/* Liste des éléments avec FlatList */}
      <FlatList
        data={data_gardeningTips_Categories}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        onContentSizeChange={(_, height) => setContentHeight(height)}
        onLayout={e => setVisibleHeight(e.nativeEvent.layout.height)}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  )
}
