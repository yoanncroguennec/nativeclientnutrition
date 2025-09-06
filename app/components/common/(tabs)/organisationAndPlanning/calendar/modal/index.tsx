import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import Modal from 'react-native-modal'
import AsyncStorage from '@react-native-async-storage/async-storage'

const months = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
]

const currentYear = new Date().getFullYear()

export default function SlideModal({
  visible,
  onClose,
  onValidate,
}: {
  visible: boolean
  onClose: () => void
  onValidate: (month: string, year: number) => void
}) {
  const [openMonth, setOpenMonth] = useState(false)
  const [selectMonth, setSelectMonth] = useState(months[new Date().getMonth()])
  const [monthItems, setMonthItems] = useState(
    months.map(m => ({ label: m, value: m })),
  )

  const [openYear, setOpenYear] = useState(false)
  const [selectedYear, setSelectedYear] = useState(currentYear)
  const [yearItems, setYearItems] = useState(
    Array.from({ length: 11 }, (_, i) => {
      const y = currentYear - 5 + i
      return { label: `${y}`, value: y }
    }),
  )

  const handleValidate = async () => {
    try {
      await AsyncStorage.setItem('selectedMonth', selectMonth)
      await AsyncStorage.setItem('selectedYear', selectedYear.toString())
      onValidate(selectMonth, selectedYear)
      onClose()
    } catch (e) {
      console.error('Erreur AsyncStorage', e)
    }
  }
  // const [visible, setVisible] = useState(false)

  const onOpenMonth = () => {
    setOpenYear(false)
    setOpenMonth(true)
  }

  const onOpenYear = () => {
    setOpenMonth(false)
    setOpenYear(true)
  }

  return (
    <View style={{}}>
      {/* <Button title="Ouvrir le modal" onPress={() => setVisible(true)} /> */}
      <Modal
        isVisible={visible}
        onBackdropPress={onClose}
        style={{ justifyContent: 'flex-end', margin: 0 }}
        swipeDirection="down"
        onSwipeComplete={onClose}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Sélectionnez le mois et l'année</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 16,
              width: '100%',
              gap: 12,
            }}
          >
            {/* Picker Mois */}
            <View style={{ zIndex: 3000, position: 'relative' }}>
              <DropDownPicker
                open={openMonth}
                value={selectMonth}
                items={monthItems}
                setOpen={onOpenMonth}
                setValue={setSelectMonth}
                setItems={setMonthItems}
                onClose={() => setOpenMonth(false)} // Ferme la dropdown en cliquant en dehors
                dropDownDirection="BOTTOM"
                style={{ width: 100, zIndex: 3000 }}
                dropDownContainerStyle={{
                  position: 'absolute',
                  top: 50,
                  width: 100,
                  backgroundColor: '#fff',
                  zIndex: 3000,
                  elevation: 10,
                }}
                zIndex={3000}
              />
            </View>

            {/* Picker Année */}
            <View style={{ zIndex: 2000, position: 'relative' }}>
              <DropDownPicker
                open={openYear}
                value={selectedYear}
                items={yearItems}
                setOpen={onOpenYear}
                setValue={setSelectedYear}
                setItems={setYearItems}
                onClose={() => setOpenYear(false)} // Même chose ici
                dropDownDirection="BOTTOM"
                style={{ width: 100, zIndex: 2000 }}
                dropDownContainerStyle={{
                  position: 'absolute',
                  top: 50,
                  width: 100,
                  backgroundColor: '#fff',
                  zIndex: 2000,
                  elevation: 10,
                }}
                zIndex={2000}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={handleValidate}
            style={styles.validateButton}
          >
            <Text style={styles.validateButtonText}>Valider</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    // padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 300,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#F0F',
  },
  validateButton: {
    alignSelf: 'center',
    borderColor: '#F0F',
    borderRadius: 25,
    borderWidth: 2,
    marginTop: 30,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 120,
  },
  validateButtonText: {
    color: '#F0F',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
