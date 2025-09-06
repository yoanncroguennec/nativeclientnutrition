import React, { useRef } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
// DATA
import { contentMap } from '@/app/utils/constants/data/(connected)/screens/(tabs)/localTerroir/gardeningTips_Categories/gardeningTips_SubCategories/containers/contentMap_Containers'

export default function Container_AdviceOnDogsAndCats() {
  const { route_key, title } = useLocalSearchParams<{
    route_key: string
    title: string
  }>()

  const content = contentMap[route_key]
  const progress = useRef(new Animated.Value(0)).current
  const opacity = useRef(new Animated.Value(0)).current

  const isVisible = useRef(false)

  if (!content) return null

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
    const scrollY = contentOffset.y
    const visibleHeight = layoutMeasurement.height
    const totalHeight = contentSize.height

    const scrollProgress = Math.min(scrollY / (totalHeight - visibleHeight), 1)
    progress.setValue(scrollProgress)

    // Afficher ou cacher la barre selon la position
    if (scrollY > 0 && !isVisible.current) {
      isVisible.current = true
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start()
    } else if (scrollY <= 0 && isVisible.current) {
      isVisible.current = false
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start()
    }
  }

  const progressBarWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={content.image} style={styles.header}>
        <View style={styles.overlay}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <FontAwesome color="#000" name="chevron-left" size={18} />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>

      {/* Barre de progression animée */}
      <Animated.View style={[styles.progressContainer, { opacity }]}>
        <Animated.View
          style={[styles.progressBar, { width: progressBarWidth }]}
        >
          <LinearGradient
            colors={['#66bb6a', '#43a047']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
      </Animated.View>

      <ScrollView
        style={styles.container}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {content.component}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    height: 150,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '100%',
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: '5%',
    top: '40%',
    transform: [{ translateY: -15 }],
    backgroundColor: '#CECECE',
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  title: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 250,
  },
  progressContainer: {
    height: 4,
    width: '100%',
    backgroundColor: '#e0e0e0',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
})
