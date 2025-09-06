import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import RNPickerSelect from 'react-native-picker-select'

const SCREEN_WIDTH = Dimensions.get('window').width
const IMAGE_SIZE = (SCREEN_WIDTH - 60) / 2 // 20px padding + 20px margin entre 2 colonnes

export default function RecipeScreen() {
  const { item } = useLocalSearchParams()
  const recipe = JSON.parse(item as string) // Important : cast + parse

  const [addFavorite, setAddFavorite] = useState(false)
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1)

  const options = Array.from({ length: 10 }, (_, i) => ({
    label: `${i + 1} ${i + 1 === 1 ? 'personne' : 'personnes'}`,
    value: i + 1,
  }))

  return (
    <ScrollView nestedScrollEnabled>
      <ImageBackground
        source={{ uri: recipe.image_url }}
        style={{ height: 250, width: Dimensions.get('screen').width }}
      >
        <View
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            width: '100%',
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons color="#FFF" name="chevron-back-outline" size={35} />
          </TouchableOpacity>
          {addFavorite ? (
            <TouchableOpacity onPress={() => setAddFavorite(!addFavorite)}>
              <MaterialIcons color="#F00" name="favorite" size={35} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setAddFavorite(!addFavorite)}>
              <MaterialIcons color="#F00" name="favorite-border" size={35} />
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>

      <Text
        style={{
          color: '#000',
          fontSize: 20,
          fontWeight: 'bold',
          margin: 20,
          textAlign: 'center',
        }}
      >
        {recipe.title}
      </Text>
      <Text
        style={{
          borderColor: '#0F0',
          borderRadius: 25,
          borderWidth: 2,
          fontSize: 20,
          fontWeight: 'bold',
          padding: 10,
          textAlign: 'center',
          width: 100,
        }}
      >
        {recipe.category_recipe}
      </Text>

      {/* INFOS */}
      <View
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <View
          style={{
            alignItems: 'center',
            borderColor: '#000',
            borderRadius: 25,
            borderWidth: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <MaterialCommunityIcons
            color="#000"
            name="clock-time-nine-outline"
            size={23}
            style={{ marginRight: 5 }}
          />
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontWeight: 'bold',
            }}
          >
            {recipe.infos.temps_preparation}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            borderColor: '#000',
            borderRadius: 25,
            borderWidth: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <FontAwesome
            color="#000"
            name="euro"
            size={23}
            style={{ marginRight: 5 }}
          />
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontWeight: 'bold',
            }}
          >
            {recipe.infos.cout}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            borderColor: '#000',
            borderRadius: 25,
            borderWidth: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <FontAwesome6
            color="#000"
            name="ruler"
            size={23}
            style={{ marginRight: 5 }}
          />
          <Text
            style={{
              color: '#000',
              fontSize: 14,
              fontWeight: 'bold',
            }}
          >
            {recipe.infos.difficulte}
          </Text>
        </View>
      </View>

      {/* NUMBER OF PEOPLE */}
      <RNPickerSelect
        onValueChange={value => setNumberOfPeople(value)}
        items={options}
        value={numberOfPeople}
        placeholder={{
          label: 'Choisissez le nombre de personnes',
          value: null,
        }} // ✅ important !
        useNativeAndroidPickerStyle={false}
        style={{
          inputIOS: {
            backgroundColor: 'white',
            borderColor: '#000',
            borderRadius: 100,
            borderWidth: 1,
            color: '#000',
            fontSize: 14,
            fontWeight: 'bold',
            paddingHorizontal: 20,
            paddingVertical: 10,
            width: 150, // ✅ fonctionne maintenant
          },
          inputAndroid: {
            backgroundColor: 'white',
            borderColor: '#000',
            borderRadius: 100,
            borderWidth: 1,
            color: '#000',
            fontSize: 14,
            fontWeight: 'bold',
            paddingHorizontal: 20,
            paddingVertical: 10,
            width: 150,
          },
        }}
      />

      {/* INGREDIENTS */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginHorizontal: 15,
          marginVertical: 5,
        }}
      >
        Ingrédients
      </Text>
      <FlatList
        data={recipe.ingredients}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{ padding: 10 }}
        columnWrapperStyle={{
          justifyContent: 'space-around',
          marginBottom: 10,
        }}
        renderItem={({ item }) => (
          <View
            style={{
              alignItems: 'center',
              borderRadius: 25,
              borderWidth: 2,
              padding: 10,
              width: '45%',
            }}
          >
            <Image
              source={{ uri: item.image_url }}
              style={{ height: 50, width: 50, marginBottom: 5 }}
            />
            <View style={{ flexDirection: 'row' }}>
              {item.quantite && !isNaN(item.quantite) ? (
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {parseFloat(item.quantite) * numberOfPeople}{' '}
                  {item.unite ?? ''} {item.nom}
                </Text>
              ) : (
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {item.nom}
                </Text>
              )}
            </View>
          </View>
        )}
        scrollEnabled={false} // ⚠️ désactiver le scroll interne
      />

      {/* USTENSILES */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginHorizontal: 15,
          marginVertical: 5,
        }}
      >
        Ustensiles
      </Text>
      <FlatList
        data={recipe.utensils}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{ padding: 10 }}
        columnWrapperStyle={{
          justifyContent: 'space-around',
          marginBottom: 10,
        }}
        renderItem={({ item }) => (
          <View
            style={{
              alignItems: 'center',
              borderRadius: 25,
              borderWidth: 2,
              padding: 10,
              width: '45%',
            }}
          >
            <Image
              source={{ uri: item.image_url }}
              style={{ height: 50, width: 50, marginBottom: 5 }}
            />

            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
        scrollEnabled={false} // ⚠️ désactiver le scroll interne
      />

      {/* STEPS */}
      {recipe.etapes.map(({ numberEtape, text }) => (
        <View style={{ paddingHorizontal: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            {numberEtape}
          </Text>
          <Text style={{ fontSize: 16 }}>{text}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const pickerStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    color: 'black',
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
    borderRadius: 80,
    width: 200,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#ccc',
    color: 'black',
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
    borderRadius: 80,
    width: 200,
  },
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
  ingredientCard: {
    marginTop: 20,
    borderRadius: 25,
    borderWidth: 2,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
})
