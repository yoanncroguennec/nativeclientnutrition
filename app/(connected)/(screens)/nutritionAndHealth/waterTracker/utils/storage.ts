import AsyncStorage from '@react-native-async-storage/async-storage'

const WATER_KEY = 'daily_water'
const DATE_KEY = 'last_water_date'

export const saveWaterIntake = async (amount: number) => {
  const today = new Date().toDateString()
  await AsyncStorage.setItem(DATE_KEY, today)
  await AsyncStorage.setItem(WATER_KEY, amount.toString())
}

export const getWaterIntake = async () => {
  const storedDate = await AsyncStorage.getItem(DATE_KEY)
  const today = new Date().toDateString()

  if (storedDate !== today) {
    await AsyncStorage.setItem(DATE_KEY, today)
    await AsyncStorage.setItem(WATER_KEY, '0')
    return 0
  }

  const value = await AsyncStorage.getItem(WATER_KEY)
  return value ? parseInt(value, 10) : 0
}
