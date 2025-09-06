import { View, Image } from 'react-native'
// ICONS
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'

interface Interface_TabsRoutes {
  name: string
  title: string
  icon: (size: number, color: string) => JSX.Element
}

export function getTabsRoutes(userId?: string): Interface_TabsRoutes[] {
  const tabs: Interface_TabsRoutes[] = [
    {
      name: 'index',
      title: 'Cuisine & Recettes',
      icon: (size, color) => (
        <View style={{ width: 30, height: 30, padding: 3 }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 5,
              resizeMode: 'cover',
              // borderWidth: 2,
              // borderColor: color === "#F00" ? "#F00" : "transparent",
            }}
            source={require('@/assets/imgs/(tabs)/icon_cuisine.png')}
          />
        </View>
      ),
    },
    {
      name: 'interactiveFeatures/index',
      title: 'Fonctionnalités interactives',
      icon: (size, color) => (
        <View style={{ width: 30, height: 30, padding: 3 }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 5,
              resizeMode: 'cover',
              // borderWidth: 2,
              // borderColor: color === "#F00" ? "#F00" : "transparent",
            }}
            source={require('@/assets/imgs/(tabs)/icon_interactiveFeatures.png')}
          />
        </View>
      ),
    },
    {
      name: 'localTerroir/index',
      title: 'Terroir Local',
      icon: (size, color) => (
        <View style={{ width: 30, height: 30, padding: 3 }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 5,
              resizeMode: 'cover',
              // borderWidth: 2,
              // borderColor: color === "#F00" ? "#F00" : "transparent",
            }}
            source={require('@/assets/imgs/(tabs)/icon_basket.png')}
          />
        </View>
      ),
    },
    {
      name: 'nutritionAndHealth/index',
      title: 'Nutrition & Santé',
      icon: (size, color) => (
        <View style={{ width: 30, height: 30, padding: 3 }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 5,
              resizeMode: 'cover',
              // borderWidth: 2,
              // borderColor: color === "#F00" ? "#F00" : "transparent",
            }}
            source={require('@/assets/imgs/(tabs)/icon_nutritionAndHealth.png')}
          />
        </View>
      ),
    },
    {
      name: 'organisationAndPlanning/index',
      title: 'Organisation & Planification',
      icon: (size, color) => (
        <View style={{ width: 30, height: 30, padding: 3 }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 5,
              resizeMode: 'cover',
              // borderWidth: 2,
              // borderColor: color === "#F00" ? "#F00" : "transparent",
            }}
            source={require('@/assets/imgs/(tabs)/icon_organisationAndPlanning.png')}
          />
        </View>
      ),
    },
  ]

  return tabs
}
