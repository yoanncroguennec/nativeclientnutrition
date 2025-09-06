import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { LineChart } from 'react-native-chart-kit'
import { IMCRecord } from '../../..'

interface Props {
  historique: IMCRecord[]
  formatDateForLabel: (date: string) => string
}

export default function Tab_1_Screen({
  historique,
  formatDateForLabel,
}: Props) {
  return (
    <View>
      <Text style={styles.title}>Évolution de votre IMC</Text>
      <ScrollView horizontal>
        <LineChart
          data={{
            labels: historique.map(h => formatDateForLabel(h.date)).reverse(),
            datasets: [{ data: historique.map(h => h.imc).reverse() }],
          }}
          width={Math.max(
            Dimensions.get('window').width,
            historique.length * 60,
          )}
          height={220}
          fromZero
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#f2f2f2',
            backgroundGradientTo: '#e0e0e0',
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          bezier
          withDots
          renderDotContent={({ x, y, indexData }) => {
            let color = '#4caf50'
            if (indexData > 30) color = '#f44336'
            else if (indexData < 18.5) color = '#2196f3'
            return (
              <View
                key={x + '-' + y}
                style={{
                  position: 'absolute',
                  top: y - 5,
                  left: x - 5,
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: color,
                }}
              />
            )
          }}
          style={{ marginVertical: 8, borderRadius: 16 }}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
})
