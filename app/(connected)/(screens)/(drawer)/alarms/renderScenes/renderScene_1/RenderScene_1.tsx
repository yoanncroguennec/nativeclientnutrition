import { View, Text } from 'react-native'
import React from 'react'
import RealTimeLocalTime from '../realTimeLocalTime/RealTimeLocalTime'

export default function RenderScene_1() {
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1 }}>
      <RealTimeLocalTime />
      <Text
        style={{
          color: '#000',
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Pas d'alarme activée
      </Text>

      <Text>RenderScene_Movies_Series_1</Text>
    </View>
  )
}
