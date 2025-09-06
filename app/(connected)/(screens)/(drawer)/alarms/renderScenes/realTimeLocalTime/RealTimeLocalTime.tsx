import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function RealTimeLocalTime() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000) // mise à jour chaque seconde

    return () => clearInterval(interval) // nettoyage
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time.toLocaleTimeString()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
  },
})
