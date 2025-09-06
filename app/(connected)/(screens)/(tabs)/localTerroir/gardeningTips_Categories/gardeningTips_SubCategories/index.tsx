// LIST SUB-CATEGORIES
import React, { useState, useEffect, useMemo, useRef } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ListRenderItem,
  Animated,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useLocalSearchParams } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient'
// ICONS
import FontAwesome from '@expo/vector-icons/FontAwesome'

import dataGardeningTips_SubCategories, {
  AdviceItem,
} from '@/app/utils/constants/data/(connected)/screens/(tabs)/localTerroir/gardeningTips_Categories/gardeningTips_SubCategories/dataGardeningTips_SubCategories'
import styles_GardeningTips_SubCategories from './Styles_GardeningTips_SubCategories'

const CATEGORY_FILTER_KEY = 'categoryFilterPreference'

const imageMap: Record<string, any> = {
  landscaping: require('@/assets/imgs/(connected)/screens/localTerroir/gardeningTips_Categories/imgBG_AdviceOnOutdoorLandscaping.jpg'),
  pets: require('@/assets/imgs/(connected)/screens/localTerroir/gardeningTips_Categories/img_AdviceOnDogsAndCats.jpg'),
  gardening: require('@/assets/imgs/(connected)/screens/localTerroir/gardeningTips_Categories/imgBG_AdviceOnHarvesting.jpg'),
  plants: require('@/assets/imgs/(connected)/screens/localTerroir/gardeningTips_Categories/imgBG_AdviceOnPlants.jpg'),
}

export default function styles_GardeningTips_SubCategories_Screen() {
  const { route_Key, titleBtn } = useLocalSearchParams<{
    route_Key?: string
    titleBtn?: string
  }>()

  const filteredData = useMemo(() => {
    if (!route_Key) return dataGardeningTips_SubCategories
    return dataGardeningTips_SubCategories.filter(item =>
      item.category.includes(route_Key as 'gardening' | 'landscaping' | 'pets'),
    )
  }, [route_Key])

  const scrollY = useRef(new Animated.Value(0)).current
  const [contentHeight, setContentHeight] = useState(1)
  const [visibleHeight, setVisibleHeight] = useState(1)

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

  const imgBG = route_Key ? imageMap[route_Key] : null

  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [categoryFilter, setCategoryFilter] = useState<
    | 'all'
    | 'toolsAndClothing' // Outils et vêtements
    | 'potsAndPlanters' // Pots et jardinières
    | 'eco_FriendlyGardening' // Jardinage écologique
    | 'pottingSoilAndMulche' // Terreau et paillis
    | 'poweredEquipment' // Matériel motorisé
    | 'watering'
    | 'cat'
    | 'dog'
  >('all')

  useEffect(() => {
    const loadFilter = async () => {
      try {
        const saved = await AsyncStorage.getItem(CATEGORY_FILTER_KEY)
        if (saved)
          setCategoryFilter(
            saved as
              | 'all'
              | 'toolsAndClothing' // Outils et vêtements
              | 'potsAndPlanters' // Pots et jardinières
              | 'eco_FriendlyGardening' // Jardinage écologique
              | 'pottingSoilAndMulche' // Terreau et paillis
              | 'poweredEquipment' // Matériel motorisé
              | 'watering'
              | 'cat'
              | 'dog',
          )
      } catch (error) {
        console.error('Erreur chargement filtre', error)
      }
    }
    loadFilter()
  }, [])

  const displayedData = useMemo(() => {
    const searchLower = searchQuery.toLowerCase()

    return filteredData
      .filter(item => {
        if (categoryFilter === 'all') return true
        return item.subCategory.includes(categoryFilter)
      })
      .filter(item => item.title.toLowerCase().includes(searchLower))
      .sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.title.localeCompare(b.title)
        } else {
          return b.title.localeCompare(a.title)
        }
      })
  }, [filteredData, categoryFilter, sortOrder, searchQuery])

  const {
    filterContainer,
    pickerWrapper,
    label,
    picker,
    card,
    imageBG: imageBGStyle,
    overlay,
    btnTitle,
  } = styles_GardeningTips_SubCategories

  const renderItem: ListRenderItem<AdviceItem> = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        if (item.route) {
          router.push({
            pathname: item.route,
            params: { route_key: item.route_key, title: item.title },
          })
        }
      }}
      style={card}
    >
      <ImageBackground
        source={item.imgBG}
        style={imageBGStyle}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={overlay}>
          <Text style={btnTitle}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )

  const handleContentSizeChange = (
    contentWidth: number,
    contentHeight: number,
  ) => {
    setContentHeight(contentHeight)
  }

  const handleLayout = event => {
    const { height } = event.nativeEvent.layout
    setVisibleHeight(height)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {imgBG && (
        <ImageBackground
          source={imgBG}
          style={{ height: 150, justifyContent: 'center' }}
        >
          <View
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              height: '100%',
              width: '100%',
              paddingHorizontal: 16,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
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
              }}
            >
              <FontAwesome color="#000" name="chevron-left" size={18} />
            </TouchableOpacity>
            <View style={{ alignSelf: 'center', alignItems: 'flex-end' }}>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 35,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              >
                {titleBtn}
              </Text>
            </View>
            <Text
              style={{
                color: '#FFF',
                fontSize: 20,
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              {filteredData.length} conseils
            </Text>
          </View>
        </ImageBackground>
      )}

      {/* Barre de progression */}
      <Animated.View
        style={{
          height: 6,
          backgroundColor: '#E0E0E0',
          borderRadius: 3,
          overflow: 'hidden',
          marginBottom: 10,
          opacity,
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

      <View style={{ padding: 16 }}>
        {/* Barre de recherche */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#F1F1F1',
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 8,
            marginBottom: 12,
          }}
        >
          <FontAwesome
            name="search"
            size={18}
            color="#999"
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="Rechercher un titre..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={{ flex: 1, fontSize: 16, color: '#000' }}
          />
        </View>

        {/* Filtres */}
        <View style={filterContainer}>
          <View style={pickerWrapper}>
            <Text style={label}>Trier</Text>
            <Picker
              selectedValue={sortOrder}
              style={picker}
              onValueChange={value => setSortOrder(value)}
            >
              <Picker.Item label="A → Z" value="asc" />
              <Picker.Item label="Z → A" value="desc" />
            </Picker>
          </View>

          <View style={pickerWrapper}>
            <Text style={label}>Type</Text>
            <Picker
              selectedValue={categoryFilter}
              style={picker}
              onValueChange={value => {
                setCategoryFilter(value)
                AsyncStorage.setItem(CATEGORY_FILTER_KEY, value)
              }}
            >
              <Picker.Item label="Tous" value="all" />
              {Array.from(
                new Set(filteredData.flatMap(item => item.subCategory)),
              ).map(sub => (
                <Picker.Item
                  key={sub}
                  label={
                    sub === 'toolsAndClothing'
                      ? 'Outils et vêtements'
                      : sub === 'potsAndPlanters'
                        ? 'Pots et jardinières'
                        : sub === 'eco_FriendlyGardening'
                          ? 'Jardinage écologique'
                          : sub === 'pottingSoilAndMulche'
                            ? 'Terreau et paillis'
                            : sub === 'poweredEquipment'
                              ? 'Matériel motorisé'
                              : sub === 'watering'
                                ? 'A Revoir'
                                : sub === 'cat'
                                  ? 'chat'
                                  : sub === 'dog'
                  }
                  //                   label={
                  //   sub === 'cat'
                  //     ? 'Chat'
                  //     : sub === 'dog'
                  //       ? 'Chien'
                  //       : 'Arrosage'
                  // }
                  value={sub}
                />
              ))}
            </Picker>
          </View>
        </View>

        <FlatList
          data={displayedData}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            item?.id?.toString() || index.toString()
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 250 }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false },
          )}
          scrollEventThrottle={16}
          onContentSizeChange={handleContentSizeChange}
          onLayout={handleLayout}
        />
      </View>
    </SafeAreaView>
  )
}
