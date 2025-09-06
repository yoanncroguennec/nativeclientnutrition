import React, { memo } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { displayTime } from './util'

type ResultProps = {
  result: number[]
}

function Result({ result }: ResultProps) {
  return (
    <ScrollView>
      <View style={styles.resultItem}>
        {result.map((item, index) => (
          <View key={index} style={styles.resultItem}>
            <Text style={styles.resultItemText}>
              Tour {result.length - index}
            </Text>

            <Text style={styles.resultItemText}>{displayTime(item)}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  resultItem: {
    alignContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#313131',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  resultItemText: {
    color: '#000',
  },
})

export default memo(Result)
