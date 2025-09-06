import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useThemeContext } from '@/app/utils/hooks/contexts/themes/ThemeContext'
import { getStyles } from './StylesHistoryScreen'
// import ToggleTheme from "@/app/components/layouts/customs/toggles/toggleTheme/ToggleTheme";

export default function HistoryScreen() {
  const [history, setHistory] = useState<any[]>([])
  const { theme } = useThemeContext()
  const styles = getStyles(theme)

  useEffect(() => {
    AsyncStorage.getItem('scanHistory').then(data => {
      if (data) setHistory(JSON.parse(data))
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historique</Text>

      {/* <ToggleTheme /> */}

      <FlatList
        data={history}
        keyExtractor={(item, index) => item.code + index}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.image_front_url }}
              style={styles.image}
            />
            <View>
              <Text style={styles.text}>{item.product_name}</Text>
              <Text style={styles.text}>Marque : {item.brands}</Text>
              <Text style={styles.text}>
                Nutri : {item.nutrition_grades_tags?.[0]}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}
