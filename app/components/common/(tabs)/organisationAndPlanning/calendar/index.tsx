import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SlideModal from './modal/index' // ajuste le chemin si besoin
import DropDownPicker from 'react-native-dropdown-picker'
import { router } from 'expo-router'

export default function Calendar_Common() {
  const [modalVisible, setModalVisible] = useState(false)

  const [selectedWeek, setSelectedWeek] = useState('Semaine 1')
  const [openWeek, setOpenWeek] = useState(false)
  const [weekItems, setWeekItems] = useState([
    { label: 'Semaine 1', value: 'Semaine 1' },
    { label: 'Semaine 2', value: 'Semaine 2' },
    { label: 'Semaine 3', value: 'Semaine 3' },
    { label: 'Semaine 4', value: 'Semaine 4' },
  ])

  const [month, setMonth] = useState('')
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    const loadData = async () => {
      const m = await AsyncStorage.getItem('selectedMonth')
      const y = await AsyncStorage.getItem('selectedYear')
      if (m && y) {
        setMonth(m)
        setYear(parseInt(y))
      }
    }
    loadData()
  }, [])

  const handleValidate = (selectedMonth: string, selectedYear: number) => {
    setMonth(selectedMonth)
    setYear(selectedYear)
  }

  return (
    <View style={{}}>
      <Text style={{ fontSize: 16, marginVertical: 8 }}>
        {selectedWeek}{' '}
        {month &&
          `${['a', 'e', 'i', 'o', 'u', 'y'].includes(month[0]?.toLowerCase()) ? "d'" : 'de '}${month} ${year}`}
      </Text>

      <View style={styles.row}>
        {/* Picker semaine */}
        <View style={{ zIndex: 10 }}>
          <DropDownPicker
            open={openWeek}
            value={selectedWeek}
            items={weekItems}
            setOpen={setOpenWeek}
            setValue={setSelectedWeek}
            setItems={setWeekItems}
            dropDownDirection="BOTTOM"
            style={{ width: 120 }}
            dropDownContainerStyle={{
              position: 'absolute',
              width: 120,
              zIndex: 9999,
            }}
            containerStyle={{ height: 50 }}
            zIndex={3000}
            zIndexInverse={1000}
          />
        </View>

        {/* Icônes à droite */}
        <View style={styles.iconRow}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.iconButton}
          >
            <Image
              source={require('@/assets/imgs/others/icon_calendar.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('/(connected)/(screens)/shoppingLists')}
            style={styles.iconButton}
          >
            <Image
              source={require('@/assets/imgs/others/icon_listOfCourses.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <SlideModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onValidate={handleValidate}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: '100%',
  },
  iconRow: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 4,
  },
  iconImage: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
})
