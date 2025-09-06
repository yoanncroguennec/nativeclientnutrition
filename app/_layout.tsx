import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Slot, router } from 'expo-router'
import { AuthContext } from './utils/hooks/contexts/AuthContext'

const RootLayout = () => {
  const [userToken, setUserToken] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = !!userToken && !!userId

  const setTokenAndId = async (token: string | null, id: string | null) => {
    try {
      if (token && id) {
        await AsyncStorage.setItem('userToken', token)
        await AsyncStorage.setItem('userId', id)
      } else {
        await AsyncStorage.removeItem('userToken')
        await AsyncStorage.removeItem('userId')
      }
      setUserToken(token)
      setUserId(id)
    } catch (error) {
      console.error('Erreur lors de la mise à jour du token/id :', error)
    }
  }

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken')
        const id = await AsyncStorage.getItem('userId')
        setUserToken(token)
        setUserId(id)
      } catch (error) {
        console.error('Erreur lors du chargement du token/id :', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadAuthData()
  }, [])

  useEffect(() => {
    if (isLoading) return

    if (!isAuthenticated) {
      router.replace('/(auth)/login')
    } else {
      router.replace('/(notConnected)/(screens)/intro')
      // router.replace("/(notConnected)/(tabs)");
    }
  }, [isAuthenticated, isLoading])

  if (isLoading) return null // Ou remplacer par un loader/splash screen

  return (
    <AuthContext.Provider
      value={{ userToken, userId, isAuthenticated, setTokenAndId }}
    >
      <Slot />
    </AuthContext.Provider>
  )
}

export default RootLayout

// // import { Tabs } from "expo-router";
// // import { useContext, useMemo } from "react";
// // // DATAS
// // import { getTabsRoutes } from "@/app/utils/constants/data/global/dataTabsRoutes";
// // // CONTEXTS
// // import { AuthContext } from "@/app/_layout"; // important pour récupérer userId
// // // import ThemeProvider from "@/app/utils/contexts/ThemeContext";
// // // import LanguageProvider from "@/app/utils/contexts/LanguageContext";

// // export default function Layout() {
// //   const context = useContext(AuthContext);

// //   const screenOptions = {
// //     tabBarActiveTintColor: "#F00",
// //     tabBarInactiveTintColor: "gray",
// //     tabBarStyle: { backgroundColor: "#000", paddingBottom: 5 },
// //     headerShown: false,
// //     tabBarInactiveBackgroundColor: "#000",
// //     tabBarActiveBackgroundColor: "#000",
// //   };

// //   const tabs = useMemo(() => getTabsRoutes(context?.userId), [context?.userId]);

// //   // if (!tabs.length) {
// //   //   return null; // ou un petit spinner si tu veux
// //   // }

// //   return (
// //     // <ThemeProvider>
// //     //   <LanguageProvider>
// //         <Tabs screenOptions={screenOptions}>
// //           {tabs.map((tab) => (
// //             <Tabs.Screen
// //               key={tab.name}
// //               name={tab.name}
// //               options={{
// //                 title: tab.title,
// //                 tabBarIcon: ({ size, color }) => tab.icon(size, color),
// //               }}
// //             />
// //           ))}
// //         </Tabs>
// //       {/* </LanguageProvider>
// //     </ThemeProvider> */}
// //   );
// // }

// import FontAwesome from '@expo/vector-icons/FontAwesome'
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from '@react-navigation/native'
// import { useFonts } from 'expo-font'
// import { Stack } from 'expo-router'
// import * as SplashScreen from 'expo-splash-screen'
// import { useEffect } from 'react'
// import 'react-native-reanimated'

// // import { useColorScheme } from '@/components/useColorScheme';

// export {
//   // Catch any errors thrown by the Layout component.
//   ErrorBoundary,
// } from 'expo-router'

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)',
// }

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync()

// export default function RootLayout() {
//   const [loaded, error] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//     ...FontAwesome.font,
//   })

//   // Expo Router uses Error Boundaries to catch errors in the navigation tree.
//   useEffect(() => {
//     if (error) throw error
//   }, [error])

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync()
//     }
//   }, [loaded])

//   if (!loaded) {
//     return null
//   }

//   return <RootLayoutNav />
// }

// function RootLayoutNav() {

//   return (
//     <Stack>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     </Stack>
//   )
// }
