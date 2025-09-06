import React, { useRef, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native'
import webscraping_marmiton_allRecipes_starters_byPages from '@/app/utils/constants/data/jsons/data.json'
import { router } from 'expo-router'

import ListCategoriesByRecipeScreen from './listCategoriesByRecipes'

const SCREEN_WIDTH = Dimensions.get('window').width
const IMAGE_SIZE = (SCREEN_WIDTH - 60) / 2 // 20px padding + 20px margin entre 2 colonnes

interface Recipe_list_All_Recipes {
  title: string
  category_recipe: string
  image_url: string
}

interface Recipe {
  category_recipe: string
  list_All_Recipes: Recipe_list_All_Recipes[]
}

export default function ListAllRecipes() {
  function renderItem_list_All_Recipes({
    item,
  }: {
    item: Recipe_list_All_Recipes
  }) {
    return (
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: '/(connected)/(screens)/cooking/recipes/recipe',
            params: {
              item: JSON.stringify(item),
              title: item.title,
              // image_url: item.image_url,
            },
          })
        }
        style={styles.imageContainer}
      >
        <Image
          source={{ uri: item.image_url }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  function renderItem({ item }: { item: Recipe }) {
    return (
      <View style={{ marginBottom: 30 }}>
        <ListCategoriesByRecipeScreen />

        <FlatList
          data={item.list_All_Recipes}
          numColumns={2}
          renderItem={renderItem_list_All_Recipes}
          keyExtractor={item => item.title}
          scrollEnabled={false}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={webscraping_marmiton_allRecipes_starters_byPages}
        renderItem={renderItem}
        keyExtractor={item => item.category_recipe}
        onRefresh={() => console.log('refreshing')}
        refreshing={false}
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
  imageContainer: {
    width: IMAGE_SIZE,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 15,
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
