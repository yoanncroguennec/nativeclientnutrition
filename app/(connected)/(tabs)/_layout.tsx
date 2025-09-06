import { Tabs } from 'expo-router'
import { useContext, useMemo } from 'react'
// DATAS
import { getTabsRoutes } from '@/app/utils/constants/data/global/dataTabsRoutes'
// CONTEXTS
import { AuthContext } from '@/app/utils/hooks/contexts/AuthContext' // important pour récupérer userId
import { Text } from 'react-native'
import Container_App from '@/app/components/layouts/containers/containerApp/Container_App'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function TabsBottom_Layout() {
  const context = useContext(AuthContext)

  const screenOptions = {
    tabBarActiveTintColor: '#F00',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: { backgroundColor: '#000', paddingBottom: 5 },
    headerShown: false,
    tabBarInactiveBackgroundColor: '#000',
    tabBarActiveBackgroundColor: '#000',
  }

  const tabs = useMemo(() => getTabsRoutes(context?.userId), [context?.userId])

  if (!tabs.length) {
    return null // ou un petit spinner si tu veux
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Container_App>
        <Tabs screenOptions={screenOptions}>
          {tabs.map(tab => (
            <Tabs.Screen
              key={tab.name}
              name={tab.name}
              options={{
                title: '', // Ne pas utiliser `title` ici pour éviter le label par défaut
                tabBarIcon: ({ size, color }) => tab.icon(size, color),
                tabBarLabel: ({ color }) => (
                  <Text
                    numberOfLines={2}
                    style={{
                      color,
                      fontSize: 10,
                      textAlign: 'center',
                      lineHeight: 14, // Ajustable pour éviter le clipping
                      marginTop: 2,
                    }}
                  >
                    {tab.title}
                  </Text>
                ),
              }}
            />
          ))}
        </Tabs>
      </Container_App>
      4
    </GestureHandlerRootView>
  )
}
