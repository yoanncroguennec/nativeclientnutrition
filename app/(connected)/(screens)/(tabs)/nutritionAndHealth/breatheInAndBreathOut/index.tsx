// import { View, Text } from 'react-native'
// import React from 'react'

// export default function NutritionAndHealth_Screen() {
//   return (
//     <View>
//       <Text>NutritionAndHealth_Screen</Text>
//     </View>
//   )
// }

import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Animated, Easing } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function App() {
  const [phase, setPhase] = useState<'inspire' | 'expire'>('inspire')
  const scaleAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 4000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ]).start(() => {
        setPhase(prev => (prev === 'inspire' ? 'expire' : 'inspire'))
        animate()
      })
    }

    animate()
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, { transform: [{ scale: scaleAnim }] }]}
      >
        <MaterialIcons
          name={phase === 'inspire' ? 'north' : 'south'}
          size={64}
          color="white"
        />
      </Animated.View>
      <Text style={styles.text}>
        {phase === 'inspire' ? 'Inspire...' : 'Expire...'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#00ADB5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  text: {
    fontSize: 32,
    color: '#EEEEEE',
  },
})
