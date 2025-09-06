import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { displayTime } from './util'
import Constants from 'expo-constants'
import Control from './Control'
import Result from './Result'

export default function RenderScene_3() {
  const [time, setTime] = useState<number>(0)
  const [isRunning, setRunning] = useState<boolean>(false)
  const [results, setResults] = useState<number[]>([])

  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  const handleLeftBtnPress = useCallback(() => {
    if (isRunning) {
      setResults(previousResults => [time, ...previousResults])
    } else {
      setResults([])
      setTime(0)
    }
  }, [isRunning, time])

  const handleRightBtnPress = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000) // 1s interval
      timer.current = interval
    } else {
      if (timer.current) {
        clearInterval(timer.current)
        timer.current = null
      }
    }
    setRunning(prev => !prev)
  }, [isRunning])

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Chronomètre</Text>
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayTime(time)}</Text>
      </View>
      <View style={styles.control}>
        <Control
          isRunning={isRunning}
          handleLeftBtnPress={handleLeftBtnPress}
          handleRightBtnPress={handleRightBtnPress}
        />
      </View>

      <View style={styles.result}>
        <Result result={results} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  display: {
    alignItems: 'center',
    flex: 3 / 5,
    justifyContent: 'center',
  },
  displayText: {
    fontSize: 70,
    fontWeight: '700',
  },
  control: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  result: {
    flex: 2 / 5,
  },
})
