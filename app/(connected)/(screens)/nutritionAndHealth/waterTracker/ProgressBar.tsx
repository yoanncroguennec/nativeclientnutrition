// components/ProgressBar.tsx
import React from 'react'
import { View, StyleSheet } from 'react-native'

type Props = {
  progress: number // de 0 à 1
}

const ProgressBar: React.FC<Props> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress * 100}%` }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 16,
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4FC3F7',
  },
})

export default ProgressBar
