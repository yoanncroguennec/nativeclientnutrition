import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Image } from 'expo-image'; // <-- use expo-image for animated GIF support on Android & iOS
import { DATA } from './data';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import { Fontisto } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');
const IMG_WIDTH = width * 0.8;
const IMG_HEIGHT = IMG_WIDTH * 1.54;

export default function Index() {
  const [showGif, setShowGif] = useState(true); // conserve l'état pour retirer le composant après le fade
  const scrollX = useSharedValue(width * 1); // démarre sur le 2ᵉ élément

  // shared value d'opacité pour le GIF overlay
  const gifOpacity = useSharedValue(1);

  // Au montage : après 20s, lance le fade-out (600ms), puis supprime l'overlay via runOnJS
  useEffect(() => {
    const timer = setTimeout(() => {
      // lance le fade
      gifOpacity.value = withTiming(
        0,
        { duration: 600 },
        finished => {
          if (finished) {
            // retire l'overlay du DOM sur le thread JS
            runOnJS(setShowGif)(false);
          }
        }
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, [gifOpacity]);

  // style animé pour l'overlay GIF
  const gifAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: gifOpacity.value,
    };
  });

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollX.value = withSpring(e.contentOffset.x, {
        damping: 20,
        stiffness: 90,
      });
    },
  });

  return (
    <View style={styles.rootContainer}>
    {showGif && (
  <TouchableWithoutFeedback
    onPress={() => {
      // Si on tap, lance le fade-out immédiatement
      gifOpacity.value = withTiming(
        0,
        { duration: 600 },
        finished => {
          if (finished) {
            runOnJS(setShowGif)(false);
          }
        }
      );
    }}
  >
    <Animated.View style={[styles.gifOverlay, gifAnimatedStyle]}>
      <Image
        source={require('@/assets/gifs/animation_scroll_1.gif')}
        style={styles.gif}
        contentFit="contain"
        priority="high"
        autoPlay
      />
    </Animated.View>
  </TouchableWithoutFeedback>
)}

      <View style={styles.container}>
        {/* Background animé */}
        <View style={StyleSheet.absoluteFill}>
          {DATA.map((image, index) => {
            const animatedStyle = useAnimatedStyle(() => {
              const opacity = interpolate(
                scrollX.value,
                [(index - 1) * width, index * width, (index + 1) * width],
                [0, 1, 0],
                Extrapolation.CLAMP
              );

              const scale = interpolate(
                scrollX.value,
                [(index - 1) * width, index * width, (index + 1) * width],
                [1.2, 1, 1.2],
                Extrapolation.CLAMP
              );

              return { opacity, transform: [{ scale }] };
            });

            return (
              <Animated.Image
                blurRadius={18}
                key={`background_image_${index}`}
                source={{ uri: image.bgImg }}
                style={[StyleSheet.absoluteFill, animatedStyle]}
              />
            );
          })}
        </View>

        {/* Scroll horizontal */}
        <Animated.ScrollView
          horizontal
          onScroll={onScrollHandler}
          pagingEnabled
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          contentOffset={{ x: width * 1, y: 0 }} // démarre sur le 2e
        >
          {DATA.map((image, index) => {
            const animatedStyle = useAnimatedStyle(() => {
              const scale = interpolate(
                scrollX.value,
                [(index - 1) * width, index * width, (index + 1) * width],
                [0.9, 1, 0.9],
                Extrapolation.CLAMP
              );

              return { transform: [{ scale }] };
            });

            return (
              <Animated.View
                key={`image_${index}`}
                style={[styles.imageContainer, animatedStyle]}
              >
                <ImageBackground
                  source={{ uri: image.bgImg }}
                  imageStyle={{ borderRadius: 25 }}
                  style={{ height: IMG_HEIGHT, width: IMG_WIDTH }}
                >
                  <View style={styles.overlay}>
                    {/* Titre centré + bouton close */}
                    <View style={{ position: 'relative', alignItems: 'center' }}>
                      <Text style={styles.title}>PRIX</Text>
                      <TouchableOpacity
                        onPress={() => router.back()}
                        style={styles.closeButton}
                      >
                        <Fontisto color="#F00" name="close-a" size={30} />
                      </TouchableOpacity>
                    </View>

                    {/* Prix */}
                    <Text style={styles.priceText}>
                      {image.prices && image.currency && image.pricesBy
                        ? `${image.prices}${image.currency} / ${image.pricesBy}`
                        : `${image.prices}`}
                    </Text>

                    {/* Infos prix */}
                    {image.infosPrice ? (
                      <Text style={styles.infoText}>{image.infosPrice}</Text>
                    ) : null}

                    {/* Liste triée A → Z */}
                    {[...image.packageOptionLists]
                      .filter(item => item)
                      .sort((a, b) =>
                        a.localeCompare(b, 'fr', { sensitivity: 'base' })
                      )
                      .map((item, idx) => (
                        <View key={idx} style={{ marginTop: 5 }}>
                          <Text style={styles.optionText}>{item}</Text>
                        </View>
                      ))}
                  </View>
                </ImageBackground>
              </Animated.View>
            );
          })}
        </Animated.ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  gifOverlay: {
    ...StyleSheet.absoluteFillObject, // occupe tout l'écran
    backgroundColor: 'transparent', // fond semi-transparent
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20, // au-dessus du contenu
  },
  gif: {
    width: 220,
    height: 220,
  },
  imageContainer: {
    alignItems: 'center',
    elevation: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 25,
    width: width,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 25,
    height: IMG_HEIGHT,
    width: IMG_WIDTH,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 35,
    fontWeight: 'bold',
    paddingVertical: 15,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 15,
  },
  priceText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  optionText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },
});
