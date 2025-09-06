import React, { useState, useEffect } from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Calendar } from 'react-native-big-calendar'
import DropDownPicker from 'react-native-dropdown-picker'
import {
  setDefaultOptions,
  format,
  addMonths,
  subMonths,
  startOfMonth,
} from 'date-fns'
import { fr } from 'date-fns/locale'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { generateEventsFromVegetables } from '../../utils/generateEvents'
import dataFrenchWeekDays from '@/app/utils/constants/data/(tabs)/localTerroir/frenchWeekDays'
import dataCrops from '@/app/utils/constants/data/(tabs)/localTerroir/dataCrops'
import dropdownConfigsRaw from './dropdownConfigs'
import { router } from 'expo-router'

setDefaultOptions({ locale: fr })

function CustomWeekDaysHeader() {
  return (
    <View style={{ flexDirection: 'row' }}>
      {dataFrenchWeekDays.map(day => (
        <View key={day} style={{ flex: 1, alignItems: 'center' }}>
          <Text>{day}</Text>
        </View>
      ))}
    </View>
  )
}

type CropType = 'all' | 'vegetable' | 'fruit'
type PeriodType = 'all' | 'sowing' | 'harvest'
type MonthType = 'all' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export default function CalendarAgenda() {
  const [filterType, setFilterType] = useState<CropType>('all')
  const [periodFilter, setPeriodFilter] = useState<PeriodType>('all')
  const [monthFilter, setMonthFilter] = useState<MonthType>('all')
  const [date, setDate] = useState(() => startOfMonth(new Date()))

  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({
    filterType: false,
    periodFilter: false,
    monthFilter: false,
  })

  useEffect(() => {
    if (monthFilter !== 'all') {
      const year = new Date().getFullYear()
      setDate(new Date(year, monthFilter - 1, 1))
    }
  }, [monthFilter])

  const monthSelected = monthFilter === 'all' ? null : (monthFilter as number)

  const filteredCrops = dataCrops
    .filter(crop => filterType === 'all' || crop.type === filterType)
    .filter(crop => {
      if (periodFilter === 'all') return true
      if (!monthSelected) return true
      if (periodFilter === 'sowing') return crop.sowing.includes(monthSelected)
      if (periodFilter === 'harvest')
        return crop.harvest.includes(monthSelected)
      return true
    })

  const addIconsToOptions = (key: string, options: any[]) => {
    if (key === 'filterType') {
      return options.map(option => {
        let iconName = 'checkbox-blank-circle-outline'
        if (option.value === 'all') iconName = 'format-list-bulleted'
        else if (option.value === 'vegetable') iconName = 'carrot'
        else if (option.value === 'fruit') iconName = 'fruit-cherries'
        return {
          ...option,
          icon: () => <Icon name={iconName} size={18} color="#444" />,
        }
      })
    }
    return options
  }

  const events = generateEventsFromVegetables(filteredCrops)

  const monthYear = format(date, 'LLLL yyyy', { locale: fr })

  const goToPreviousMonth = () =>
    setDate(current => startOfMonth(subMonths(current, 1)))
  const goToNextMonth = () =>
    setDate(current => startOfMonth(addMonths(current, 1)))

  const dropdownConfigs = dropdownConfigsRaw.map(config => {
    let optionsWithIcons = addIconsToOptions(config.key, config.options)
    const common = {
      ...config,
      options: optionsWithIcons,
      dropDownContainerStyle:
        config.key === 'monthFilter'
          ? { backgroundColor: '#eee', borderRadius: 8, maxHeight: 250 }
          : { backgroundColor: '#eee', borderRadius: 8 },
    }

    switch (config.key) {
      case 'filterType':
        return { ...common, state: filterType, setState: setFilterType }
      case 'periodFilter':
        return { ...common, state: periodFilter, setState: setPeriodFilter }
      case 'monthFilter':
        return { ...common, state: monthFilter, setState: setMonthFilter }
      default:
        return { ...common, state: null, setState: () => {} }
    }
  })

  const onOpen = (key: string) => {
    setOpenStates(prev =>
      Object.fromEntries(Object.entries(prev).map(([k]) => [k, k === key])),
    )
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 10 }}>
        <View
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <TouchableOpacity
            onPress={() => router.push('/')}
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Image
              source={require('@/assets/icons/(connected)/screens/localTerroir/iconListMarket.png')}
              style={{ height: 70, width: 70 }}
            />
            <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>
              Marchés
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              router.push(
                '/(connected)/(screens)/(tabs)/localTerroir/listLocalProducers',
              )
            }
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Image
              source={require('@/assets/icons/(connected)/screens/localTerroir/icon_listLocalProducers.png')}
              style={{ height: 70, width: 70 }}
            />
            <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>
              Producteurs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              router.push(
                '/(connected)/(screens)/(tabs)/localTerroir/gardeningTips_Categories',
              )
            }
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Image
              source={require('@/assets/icons/(connected)/screens/localTerroir/icon_gardeningTips.png')}
              style={{ height: 60, width: 60 }}
            />
            <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>
              Conseils
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <TouchableOpacity onPress={goToPreviousMonth} style={styles.button}>
            <Text style={styles.buttonText}>Précédent</Text>
          </TouchableOpacity>

          <Text style={styles.monthText}>{monthYear}</Text>

          <TouchableOpacity onPress={goToNextMonth} style={styles.button}>
            <Text style={styles.buttonText}>Suivant</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 10, flexDirection: 'row' }}>
          {dropdownConfigs.map(
            ({ label, state, setState, options, key }, index) => (
              <View
                key={key}
                style={{
                  marginBottom: 10,
                  paddingHorizontal: 10,
                  flex: 1,
                  zIndex: dropdownConfigs.length - index,
                }}
              >
                <Text style={{ fontWeight: '600', marginBottom: 4 }}>
                  {label}
                </Text>
                <DropDownPicker
                  open={openStates[key]}
                  value={state}
                  items={options}
                  setOpen={() => onOpen(key)}
                  setValue={setState}
                  placeholder="Sélectionner..."
                  containerStyle={{ height: 40 }}
                  style={{
                    backgroundColor: '#eee',
                    borderRadius: 8,
                  }}
                  dropDownContainerStyle={
                    dropdownConfigs.find(cfg => cfg.key === key)
                      ?.dropDownContainerStyle
                  }
                  zIndex={1000}
                />
              </View>
            ),
          )}
        </View>

        <Calendar
          events={events}
          height={600}
          mode="month"
          date={date}
          onChangeDate={newDate => {
            if (newDate instanceof Date && !isNaN(newDate)) {
              setDate(startOfMonth(newDate))
            }
          }}
          weekStartsOn={1}
          showTime={false}
          headerComponent={<CustomWeekDaysHeader />}
          swipeEnabled={false}
          overlapOffset={4}
          eventCellStyle={event => ({
            backgroundColor: event.color,
            borderRadius: 8,
            padding: 2,
          })}
          onPressEvent={event => {
            alert(
              `${event.title}\n\nPériode : ${event.start.toLocaleDateString()} → ${event.end.toLocaleDateString()}`,
            )
          }}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  monthText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#4caf50',
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
})
