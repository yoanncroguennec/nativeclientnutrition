import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { getWaterIntake, saveWaterIntake } from './utils/storage'
import ProgressBar from './ProgressBar' // ⬅️ ici
import HumanBodyWater from './WaterBody'

const GOAL = 2000 // ml

const WaterTracker: React.FC = () => {
  const [intake, setIntake] = useState(0)

  const addWater = async (ml: number) => {
    const newTotal = intake + ml
    setIntake(newTotal)
    await saveWaterIntake(newTotal)
  }

  useEffect(() => {
    const load = async () => {
      const stored = await getWaterIntake()
      setIntake(stored)
    }
    load()
  }, [])

  const progress = Math.min(intake / GOAL, 1)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hydratation journalière</Text>
      <Text style={styles.counter}>
        {intake} ml / {GOAL} ml
      </Text>

      <HumanBodyWater progress={progress} width={150} height={400} />

      <ProgressBar progress={progress} />

      <View style={styles.buttons}>
        {[200, 300, 500].map(ml => (
          <Button key={ml} title={`+${ml}ml`} onPress={() => addWater(ml)} />
        ))}
      </View>
    </View>
  )
}

export default WaterTracker

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  counter: { fontSize: 20, textAlign: 'center', marginVertical: 10 },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
})
