import React, { useEffect, useRef, useState } from 'react'
import {
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { markers } from './data'
import Header_LocalProducers from './header/Header_LocalProducers'
import styles_ListLocalProducers from './Styles_ListLocalProducers'

const { width } = Dimensions.get('window')
const CARD_WIDTH = width * 0.8
const SPACING_FOR_CARD_INSET = width * 0.1 - 10

export default function ListLocalProducers() {
  const mapRef = useRef<MapView>(null)
  const scrollViewRef = useRef<ScrollView>(null)
  const mapAnimation = useRef(new Animated.Value(0)).current
  const [mapIndex, setMapIndex] = useState(0)

  const {
    container,
    chipsIcon,
    scrollView,
    card,
    cardImage,
    textContent,
    cardtitle,
    cardDescription,
    markerWrap,
    button,
    signIn,
    textSign,
  } = styles_ListLocalProducers

  const initialMapState = {
    markers,
    categories: [
      {
        nameOfTheRegion: 'Auvergne-Rhône-Alpes',
        nameOfTheRegion_Key: 'auvergne_Rhone_Alpes',
        iconImg: require('@/assets/icons/flags/iconFlag_auvergne_Rhone_Alpes.png'),
      },
      {
        nameOfTheRegion: 'Bourgogne / France-Comté',
        nameOfTheRegion_Key: 'bourgogne_France_Comte',
        iconImg: require('@/assets/icons/flags/iconFlag_bourgogne_France_Comte.png'),
      },
      {
        nameOfTheRegion: 'Bretagne',
        nameOfTheRegion_Key: 'bretagne',
        iconImg: require('@/assets/icons/flags/iconFlag_bretagne.png'),
      },
      {
        nameOfTheRegion: 'Centre-Val de Loire',
        nameOfTheRegion_Key: 'centre_Val_De_Loire',
        iconImg: require('@/assets/icons/flags/iconFlag_centre_Val_De_Loire.png'),
      },
      {
        nameOfTheRegion: 'Corse',
        nameOfTheRegion_Key: 'corse',
        iconImg: require('@/assets/icons/flags/iconFlag_corse.webp'),
      },
      {
        nameOfTheRegion: 'DOM-TOM',
        nameOfTheRegion_Key: 'dom_Tom',
        iconImg: require('@/assets/icons/flags/imgFlag_dom_Tom.png'),
      },
      {
        nameOfTheRegion: 'Grand Est',
        nameOfTheRegion_Key: 'grand_Est',
        iconImg: require('@/assets/icons/flags/imgFlag_grand_Est.png'),
      },
      {
        nameOfTheRegion: 'Hauts-de-France',
        nameOfTheRegion_Key: 'hauts_De_France',
        iconImg: require('@/assets/icons/flags/imgFlag_hauts_De_France.png'),
      },
      {
        nameOfTheRegion: 'Île-de-France',
        nameOfTheRegion_Key: 'ile_De_France',
        iconImg: require('@/assets/icons/flags/imgFlag_ile_De_France.png'),
      },
      {
        nameOfTheRegion: 'Normandie',
        nameOfTheRegion_Key: 'normandie',
        iconImg: require('@/assets/icons/flags/iconFlag_normandie.png'),
      },
      {
        nameOfTheRegion: 'Nouvelle-Aquitaine',
        nameOfTheRegion_Key: 'nouvelle_Aquitaine',
        iconImg: require('@/assets/icons/flags/iconFlag_nouvelle_Aquitaine.png'),
      },
      {
        nameOfTheRegion: 'Occitanie',
        nameOfTheRegion_Key: 'occitanie',
        iconImg: require('@/assets/icons/flags/iconFlag_occitanie.png'),
      },
      {
        nameOfTheRegion: 'Pays de la Loire',
        nameOfTheRegion_Key: 'pays_De_La_Loire',
        iconImg: require('@/assets/icons/flags/iconFlag_pays_De_La_Loire.png'),
      },
      {
        nameOfTheRegion: "Provence-Alpes-Côtes d'Azur",
        nameOfTheRegion_Key: 'provence_Alpes_Cotes_D_Azur',
        iconImg: require('@/assets/icons/flags/iconFlag_provence_Alpes_Cotes_D_Azur.png'),
      },
    ],
    // categories: [
    //   {
    //     name: 'Fastfood Center',
    //     icon: (
    //       <MaterialCommunityIcons
    //         style={chipsIcon}
    //         name="food-fork-drink"
    //         size={18}
    //       />
    //     ),
    //   },
    //   {
    //     name: 'Restaurant',
    //     icon: <Ionicons name="ios-restaurant" style={chipsIcon} size={18} />,
    //   },
    //   {
    //     name: 'Dineouts',
    //     icon: <Ionicons name="md-restaurant" style={chipsIcon} size={18} />,
    //   },
    //   {
    //     name: 'Snacks Corner',
    //     icon: (
    //       <MaterialCommunityIcons name="food" style={chipsIcon} size={18} />
    //     ),
    //   },
    //   {
    //     name: 'Hotel',
    //     icon: <Fontisto name="hotel" style={chipsIcon} size={15} />,
    //   },
    // ],
    region: {
      latitude: 22.62938671242907,
      longitude: 88.4354486029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  }

  const [state, setState] = useState(initialMapState)

  useEffect(() => {
    const listener = mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3)
      index = Math.max(0, Math.min(index, state.markers.length - 1))

      if (index !== mapIndex) {
        setMapIndex(index)
        const { coordinate } = state.markers[index]
        mapRef.current?.animateToRegion(
          {
            ...coordinate,
            latitudeDelta: state.region.latitudeDelta,
            longitudeDelta: state.region.longitudeDelta,
          },
          350,
        )
      }
    })

    return () => {
      mapAnimation.removeListener(listener)
    }
  }, [mapIndex, state.markers, state.region, mapAnimation])

  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ]

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    })

    return { scale }
  })

  const onMarkerPress = event => {
    const markerID = event._targetInst?.return?.key
    if (!markerID) return

    const x =
      parseInt(markerID) * (CARD_WIDTH + 20) -
      (Platform.OS === 'ios' ? SPACING_FOR_CARD_INSET : 0)
    scrollViewRef.current?.scrollTo({ x, y: 0, animated: true })
  }

  return (
    <View style={container}>
      <MapView ref={mapRef} initialRegion={state.region} style={container}>
        {state.markers.map((marker, index) => {
          const scaleStyle = {
            transform: [{ scale: interpolations[index].scale }],
          }

          return (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              onPress={onMarkerPress}
            >
              <Animated.View style={markerWrap}>
                <Animated.Image
                  source={require('@/assets/map_marker.png')}
                  style={[marker, scaleStyle]}
                  resizeMode="cover"
                />
              </Animated.View>
            </Marker>
          )
        })}
      </MapView>

      {/* HEADER */}
      <Header_LocalProducers state={state} />

      {/* Card list */}
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: mapAnimation } } }],
          { useNativeDriver: true },
        )}
      >
        {state.markers.map((marker, index) => (
          <View style={card} key={index}>
            <Image source={marker.image} style={cardImage} resizeMode="cover" />
            <View style={textContent}>
              <Text numberOfLines={1} style={cardtitle}>
                {marker.title}
              </Text>
              <Text numberOfLines={1} style={cardDescription}>
                {marker.description}
              </Text>
              <View style={button}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={[signIn, { borderColor: '#FF6347', borderWidth: 1 }]}
                >
                  <Text style={[textSign, { color: '#FF6347' }]}>
                    Order Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  )
}
