import React, { useRef, useEffect, useState } from 'react'
import {
  SafeAreaView,
  FlatList,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native'
import { sampleData } from './data'
import ListItem from './ListItem'
import { useSharedValue } from 'react-native-reanimated'
import RenderItem from './RenderItem'
import { data } from './data'

const { width } = Dimensions.get('window')
const ITEM_WIDTH = 250 + 8 // image width + marginRight

export default function ShopScreen() {
  const scrollX = useSharedValue(0)
  const flatListRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false)

  const duplicatedData = [...sampleData, ...sampleData]
  const pageLength = sampleData.length

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAutoScrollPaused) {
        const nextIndex = (currentIndex + 1) % duplicatedData.length
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        })
        setCurrentIndex(nextIndex)
      }
    }, 2500)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoScrollPaused])

  const onScroll = e => {
    const offsetX = e.nativeEvent.contentOffset.x
    scrollX.value = offsetX

    const index = Math.round(offsetX / ITEM_WIDTH) % pageLength
    setCurrentIndex(index)
  }

  const onTouchStart = () => setIsAutoScrollPaused(true)
  const onTouchEnd = () => setIsAutoScrollPaused(false)

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback
        onPressIn={onTouchStart}
        onPressOut={onTouchEnd}
      >
        <View>
          <FlatList
            ref={flatListRef}
            data={duplicatedData}
            horizontal
            snapToInterval={ITEM_WIDTH}
            decelerationRate="fast"
            onScroll={onScroll}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => i.toString()}
            contentContainerStyle={{
              paddingHorizontal: (width - ITEM_WIDTH) / 2,
            }}
            renderItem={({ item, index }) => (
              <ListItem
                uri={item.uri}
                scrollX={scrollX}
                index={index}
                dataLength={duplicatedData.length}
              />
            )}
          />

          {/* Dots Pagination */}
          <View style={styles.pagination}>
            {sampleData.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.dot,
                  i === currentIndex % pageLength
                    ? styles.dotActive
                    : styles.dotInactive,
                ]}
              />
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>

      <SafeAreaView style={styles.container}>
        <Text
          style={{
            color: '#323232',
            fontSize: 34,
            fontWeight: 'bold',
            paddingHorizontal: 20,
          }}
        >
          Produits par catégorie
        </Text>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return <RenderItem item={item} index={index} />
          }}
        />
      </SafeAreaView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#333',
    width: 12,
  },
  dotInactive: {
    backgroundColor: '#ccc',
  },
  container: {
    backgroundColor: '#F8F8F8',
    // flex: 1,
  },
})
