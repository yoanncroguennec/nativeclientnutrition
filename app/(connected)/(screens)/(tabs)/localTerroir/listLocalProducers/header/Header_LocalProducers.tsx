import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Platform,
  ImageSourcePropType,
  ScrollView,
} from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { router } from 'expo-router'

interface HeaderItem {
  title: string | null
  route: string | (() => void)
  icon: JSX.Element | null
  iconImg: ImageSourcePropType | null
}

const data_Header_LocalProducers: HeaderItem[] = [
  {
    title: null,
    route: () => router.back(),
    icon: <FontAwesome color="#000" name="chevron-left" size={24} />,
    iconImg: null,
  },
  {
    title: 'Tous les \nCharcuteries',
    route:
      '/(connected)/(screens)/(tabs)/localTerroir/listLocalProducers/coldCuts',
    icon: null,
    iconImg: require('@/assets/icons/(connected)/screens/(tabs)/localTerroir/listLocalProducers/icon_coldCuts_1.png'),
  },
  {
    title: 'Tous les\nFromages',
    route:
      '/(connected)/(screens)/(tabs)/localTerroir/listLocalProducers/cheeses',
    icon: null,
    iconImg: require('@/assets/icons/(connected)/screens/(tabs)/localTerroir/listLocalProducers/icon_cheeses_1.png'),
  },
  {
    title: 'Nouveau\nproducteur',
    route:
      '/(connected)/(screens)/(tabs)/localTerroir/listLocalProducers/newProducer',
    icon: null,
    iconImg: require('@/assets/icons/(connected)/screens/(tabs)/localTerroir/listLocalProducers/icon_newProducer_1.png'),
  },
]

export default function Header_LocalProducers({ state }) {
  const [showFilter, setShowFilter] = useState<boolean>(false)

  const handlePress = (route: string | (() => void)) => {
    if (typeof route === 'string') {
      router.push(route)
    } else {
      route()
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShowFilter(!showFilter)}
        style={{
          alignItems: 'center',
          alignSelf: 'flex-end',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingRight: 15,
          paddingVertical: 5,
        }}
      >
        <Ionicons color="#FFF" name="filter-sharp" size={30} />
        <Text
          style={{
            color: '#FFF',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            textShadowColor: 'black',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 1, // plus petit = ombre plus nette
          }}
        >
          FILTRER
        </Text>
      </TouchableOpacity>
      <View style={styles.navRow}>
        {data_Header_LocalProducers.map(
          ({ title, route, icon, iconImg }, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(route)}
              style={styles.iconButton}
            >
              {icon
                ? icon
                : iconImg && (
                    <Image source={iconImg} style={styles.iconImage} />
                  )}
              {title && <Text style={styles.iconLabel}>{title}</Text>}
            </TouchableOpacity>
          ),
        )}
      </View>
      {showFilter ? (
        <View>
          {/* Search Box */}
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Tapez un producteur..."
              placeholderTextColor="#000"
              autoCapitalize="none"
              style={styles.searchInput}
            />
            <Ionicons name="search" size={20} />
          </View>
          <ScrollView
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            style={styles.chipsScrollView}
            contentInset={{ top: 0, left: 0, bottom: 0, right: 20 }}
            contentContainerStyle={{
              paddingRight: Platform.OS === 'android' ? 20 : 0,
            }}
          >
            {state.categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.chipsItem}>
                <Image
                  source={category.iconImg}
                  style={{ height: 25, marginRight: 5, width: 30 }}
                />
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {category.nameOfTheRegion}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.17)',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 30,
    position: 'absolute',
    width: '100%',
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 55,
    height: 55,
  },
  iconLabel: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    padding: 0,
  },
  chipsScrollView: {
    top: 20,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
})
