import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { memo } from 'react'

type Props = {
  isRunning: boolean
  handleLeftBtnPress: () => void
  handleRightBtnPress: () => void
}

function Control({
  isRunning,
  handleLeftBtnPress,
  handleRightBtnPress,
}: Props) {
  return (
    <View>
      <TouchableOpacity
        onPress={handleLeftBtnPress}
        style={[
          styles.controlBtnBorder,
          { backgroundColor: isRunning ? '#333' : '#1C1C1E' },
        ]}
      >
        <View style={styles.controlBtn}>
          <Text
            style={[
              styles.controlText,
              { color: isRunning ? '#333' : '#1C1C1E' },
            ]}
          >
            {isRunning ? 'Tap' : 'Reset'}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleRightBtnPress}
        style={[
          styles.controlBtnBorder,
          { backgroundColor: isRunning ? '#340E0D' : '#0A2A12' },
        ]}
      >
        <View style={styles.controlBtn}>
          <Text
            style={[
              styles.controlText,
              { color: isRunning ? '#EA4C49' : '#37D05C' },
            ]}
          >
            {isRunning ? 'Stop' : 'Start'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const CENTER = {
  alignItems: 'center',
  justifyContent: 'center',
}

const styles = StyleSheet.create({
  controlBtnBorder: {
    ...CENTER,
    width: 70,
    height: 70,
    borderRadius: 35, // ✅ moitié de width/height
  },
  controlBtn: {
    ...CENTER,
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 1,
    borderColor: '#000',
  },
  controlText: {
    fontSize: 14,
    fontWeight: '600',
  },
})

export default memo(Control)
