import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SharedValue } from 'react-native-reanimated'
// ICONS
import AntDesign from '@expo/vector-icons/AntDesign'
import { router } from 'expo-router'

type Props = {
  active: SharedValue<boolean>
}

const Drawer = ({ active }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          onPress={() => {
            active.value = false
          }}
        >
          <AntDesign color="#F00" name="close" size={35} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/(connected)/(auth)/profile')}
        >
          <View style={styles.containerProfile}>
            <Text style={styles.textName}>Yoann Croguennec</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(connected)/(tabs)')}>
          <Text style={styles.textName}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            router.push('/(connected)/(screens)/(drawer)/calculator')
          }
        >
          <Text style={styles.textName}>Calculatrice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            router.push('/(connected)/(screens)/(drawer)/calculator')
          }
        >
          <Text style={styles.textName}>Calculatrice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/(connected)/(screens)/(drawer)/alarms')}
        >
          <Text style={styles.textName}>Alarmes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/(connected)/(screens)/(drawer)/contact')}
        >
          <Text style={styles.textName}>Nous contactez</Text>
        </TouchableOpacity>
        <View style={styles.containerItem}></View>
      </View>
    </View>
  )
}

export default Drawer

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#353E54',
    zIndex: -99,
    elevation: -99,
  },
  contentContainer: {
    paddingTop: 120,
    marginHorizontal: 30,
    maxWidth: 180,
  },
  containerProfile: {
    gap: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  imageProfile: {
    width: 48,
    height: 48,
  },
  textName: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
  },
  containerItem: {
    marginTop: 10,
  },
})
