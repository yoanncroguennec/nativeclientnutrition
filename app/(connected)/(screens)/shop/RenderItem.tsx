import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Data } from './data'
import Animated, { FadeInDown } from 'react-native-reanimated'

type Props = {
  item: Data
  index: number
}

export default function RenderItem({ item, index }: Props) {
  return (
    <Animated.View entering={FadeInDown.delay(200 * index)}>
      <Pressable style={styles.container}>
        <Image source={item.img} style={styles.imgStyles} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore
          recusandae deserunt repellendus voluptates, cum nihil, ratione,
          asperiores ad officiis maiores libero hic doloremque iste voluptatibus
          laboriosam sed aspernatur esse.
        </Text>
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20,
    padding: 10,
  },
  imgStyles: {
    borderRadius: 10,
    height: 140,
    width: 140,
  },
  textContainer: {
    flexShrink: 1,
    gap: 10,
    margin: 20,
  },
  textName: {
    color: '#323232',
    fontSize: 28,
    fontWeight: 'bold',
  },
})
