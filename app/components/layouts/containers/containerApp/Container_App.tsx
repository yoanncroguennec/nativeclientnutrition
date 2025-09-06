import { StyleSheet, View } from 'react-native'
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import Drawer from '../../drawer/Drawer_App'
import Navbar from '../../navbar/Navbar'
import { ReactNode } from 'react'

type Container_AppProps = {
  children: ReactNode
}

export default function Container_App({ children }: Container_AppProps) {
  const active = useSharedValue(false)

  const progress = useDerivedValue(() => {
    return withTiming(active.value ? 1 : 0)
  })

  const animatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(
      progress.value,
      [0, 1],
      [0, -15],
      Extrapolation.CLAMP,
    )
    return {
      transform: [
        { perspective: 1000 },
        { scale: active.value ? withTiming(0.8) : withTiming(1) },
        { translateX: active.value ? withSpring(240) : withTiming(0) },
        {
          rotateY: `${rotateY}deg`,
        },
      ],
      borderRadius: active.value ? withTiming(28) : withTiming(0),
    }
  })

  return (
    <>
      <Drawer active={active} />
      <Animated.View style={[styles.container, animatedStyle]}>
        <Navbar active={active} />
        <View style={{ flex: 1 }}>{children}</View>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d2733',
    overflow: 'hidden',
    zIndex: 1,
    position: 'relative',
  },
})
