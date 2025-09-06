import React, { useRef, useState } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Animated, {
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

interface DataCategoriesRecipesProps {
  id: number
  title: string
}

const dataCategoriesRecipes: DataCategoriesRecipesProps[] = [
  {
    id: 1,
    title: 'Sauces',
  },
  {
    id: 2,
    title: 'Entrées',
  },
  {
    id: 3,
    title: 'Plats',
  },
  {
    id: 4,
    title: 'Desserts',
  },
  {
    id: 5,
    title: 'Boissons',
  },
]

export default function ListCategoriesByRecipeScreen() {
  const translateX = useSharedValue(0)
  const totalWidth = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const selectMenu = (event: any, index: number) => {
    setActiveIndex(index)
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    }
  })

  const AnimatedPress = Animated.createAnimatedComponent(TouchableOpacity)

  const renderItemCategoriesRecipes = (item: {
    item: DataCategoriesRecipesProps
    index: number
  }) => {
    const bg = activeIndex == item?.index ? '#FFD580' : '#fff'
    const br = activeIndex == item?.index ? '#FFA500' : '#fff'

    return (
      <AnimatedPress
        style={[
          styles.singleRender,
          { backgroundColor: bg, borderWidth: 0.5, borderColor: br },
        ]}
        onPress={e => selectMenu(e, item.index)}
        entering={FadeIn.duration(1000).delay(item?.index * 200)}
      >
        <Text style={styles.content}>{item.item.title}</Text>
      </AnimatedPress>
    )
  }

  return (
    <View
      onLayout={e => {
        totalWidth.current = e.nativeEvent.layout.width
      }}
      style={styles.container}
    >
      <FlatList
        data={dataCategoriesRecipes}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItemCategoriesRecipes}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
    flex: 1,
    padding: 10,
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 5,
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  singleRender: {
    height: '80%',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 18,
  },
  content: {
    fontSize: 16,
    color: '#000',
    fontWeight: '700',
  },
})
