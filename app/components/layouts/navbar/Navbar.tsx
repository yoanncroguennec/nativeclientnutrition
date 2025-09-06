import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SharedValue } from 'react-native-reanimated'
import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'
import { router } from 'expo-router'

type Props = {
  active: SharedValue<boolean>
}

export default function Navbar({ active }: Props) {
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TouchableOpacity
        style={styles.ham}
        onPress={() => {
          active.value = true
        }}
      >
        <Entypo color="#FFF" name="menu" size={24} />
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          style={styles.ham}
          onPress={() => {
            active.value = true
          }}
        >
          <Image
            source={require('@/assets/icons/layouts/navbar/icon_user_1.png')}
            style={{ height: 50, width: 50 }}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#F0F',
            borderRadius: 25,
            height: 25,
            marginHorizontal: 20,
            width: 8,
          }}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          onPress={() => router.push('/(connected)/(screens)/shop')}
        >
          <Image
            source={require('@/assets/icons/layouts/navbar/icon_basket_2.png')}
            style={{ height: 35, width: 45 }}
          />
          <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold' }}>
            Boutique
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#252d3a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  ham: {
    width: 34,
    height: 30,
  },
})
