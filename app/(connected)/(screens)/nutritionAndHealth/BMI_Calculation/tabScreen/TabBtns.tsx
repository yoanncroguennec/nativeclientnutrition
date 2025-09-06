import React, { useState } from 'react'
import { View, Text, Pressable, LayoutChangeEvent } from 'react-native'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export type TabBtnType = {
  title: string
}

type TabBtnsProps = {
  btns: TabBtnType[]
  selectedTab: number
  setSelectedTab: (index: number) => void
}

export default function TabBtns({
  btns,
  selectedTab,
  setSelectedTab,
}: TabBtnsProps) {
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 })

  const btnWidth = dimensions.width / btns.length

  const tabPositionX = useSharedValue(0)

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    })
  }

  function handlePress(index: number) {
    setSelectedTab(index)
  }

  function onTabPress(index: number) {
    tabPositionX.value = withTiming(btnWidth * index, {}, () => {
      runOnJS(handlePress)(index)
    })
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    }
  })

  return (
    <View
      //   accessibilityRole="tabbar"
      style={{
        backgroundColor: '#C333CC',
        borderRadius: 20,
        justifyContent: 'center',
      }}
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            backgroundColor: '#FFF',
            borderRadius: 15,
            height: dimensions.height - 10,
            marginHorizontal: 5,
            position: 'absolute',
            width: btnWidth - 10,
          },
        ]}
      />
      <View onLayout={onTabbarLayout} style={{ flexDirection: 'row' }}>
        {btns.map(({ title }, index) => {
          const color = selectedTab === index ? '#C333CC' : '#F0F'

          return (
            <Pressable
              key={index}
              onPress={() => onTabPress(index)}
              style={{ flex: 1, paddingVertical: 20 }}
            >
              <Text
                style={{
                  alignSelf: 'center',
                  color: color,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}
              >
                {title}
              </Text>
            </Pressable>
          )
        })}
      </View>
    </View>
  )
}
