import { useState } from 'react'
import {
  useWindowDimensions,
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native'
import { TabView, TabBar, TabBarProps } from 'react-native-tab-view'
import { MaterialIcons } from '@expo/vector-icons'
import RenderScene_1 from './renderScenes/renderScene_1/RenderScene_1'
import RenderScene_2 from './renderScenes/renderScene_2/RenderScene_2'
import RenderScene_3 from './renderScenes/renderScene_3/RenderScene_3'
import RenderScene_4 from './renderScenes/renderScene_4/RenderScene_4'
import Container_App from '@/app/components/layouts/containers/containerApp/Container_App'

type MyRoute = {
  key: 'first' | 'second' | 'third' | 'fourth'
  title: string
  icon: keyof typeof MaterialIcons.glyphMap
}

export default function MyTabs() {
  const layout = useWindowDimensions()
  const [index, setIndex] = useState(0)

  const [routes] = useState<MyRoute[]>([
    { key: 'first', title: 'Alarmes', icon: 'alarm' },
    { key: 'second', title: 'Horloge', icon: 'public' },
    { key: 'third', title: 'Chrono', icon: 'timer' },
    { key: 'fourth', title: 'Minuteur', icon: 'hourglass-bottom' },
  ])

  const renderScene = ({ route }: { route: MyRoute }) => {
    switch (route.key) {
      case 'first':
        return <RenderScene_1 />
      case 'second':
        return <RenderScene_2 />
      case 'third':
        return <RenderScene_3 />
      case 'fourth':
        return <RenderScene_4 />
      default:
        return null
    }
  }

  const renderTabBar = (props: TabBarProps) => (
    <View style={styles.tabBarContainer}>
      <TabBar
        {...props}
        style={styles.tabBar}
        indicatorStyle={styles.indicator}
        renderLabel={({ route, focused }) => {
          const { icon, title } = route as MyRoute
          return (
            <View style={{ alignItems: 'center' }}>
              <MaterialIcons
                name={icon}
                size={20}
                color={focused ? '#F00' : '#AAA'}
              />
              <Text style={{ color: focused ? '#F00' : '#AAA', fontSize: 12 }}>
                {title}
              </Text>
            </View>
          )
        }}
      />
    </View>
  )

  return (
    <Container_App>
      <TabView
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        initialLayout={{ width: layout.width }}
        tabBarPosition="bottom" // Ensure tab bar is at the bottom
      />
    </Container_App>
  )
}

const styles = StyleSheet.create({
  scene: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingBottom: 90, // laisser de la place pour la tabbar flottante
  },
  tabBarContainer: {
    position: 'absolute',
    bottom: 20, // flottante (pas collée en bas)
    left: 20,
    right: 20,
    borderRadius: 30,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  tabBar: {
    backgroundColor: '#16213E',
    borderRadius: 30,
    paddingVertical: 8,
  },
  indicator: {
    backgroundColor: '#F00',
    height: 3,
    borderRadius: 2,
    marginHorizontal: 16,
  },
})
