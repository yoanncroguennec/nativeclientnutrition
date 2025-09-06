// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const RepasItem = ({ type }) => (
//   <View style={styles.repasRow}>
//     <View style={styles.repasType}>
//       <Text style={styles.repasTypeText}>{type}</Text>
//     </View>
//     <Text style={styles.ajouterText}>Ajouter un repas</Text>
//   </View>
// );

// export default function SamediScreen() {
//   return (
//     <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
//   <View style={styles.container}>
//   <View style={styles.header}>
//     <Text style={styles.headerText}>SAMEDI</Text>
//   </View>

//     <TouchableOpacity style={styles.ticket}>
//       <Text style={styles.plus}>+</Text>
//     </TouchableOpacity>
//   <RepasItem type="PETIT\nDÉJEUNER" />
//   <RepasItem type="DÉJEUNER" />
//   <RepasItem type="COLLATION" />
//   <RepasItem type="DÎNER" />
// </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
// container: {
//   margin: 20,
//   padding: 20,
//   position: "relative",
//   backgroundColor: '#fff5f5',
//   borderRadius: 10,
//   borderColor: '#000',
//   borderWidth: 1,
// },
// header: {
//   alignSelf: "center",
//   backgroundColor: '#ffcbd1',
//   borderRadius: 12,
//   paddingHorizontal: 20,
//   paddingVertical: 8,
//   position: "absolute",
//   top: -25,
//   zIndex: 1,
// },
// headerText: {
//   fontWeight: 'bold',
//   fontSize: 18,
// },
// ticket: {
//   backgroundColor: '#d3f2f2',
//   borderRadius: 5,
//   padding: 5,
// },
// plus: {
//   fontSize: 18,
//   fontWeight: 'bold',
// },
// repasRow: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   marginBottom: 15,
// },
// repasType: {
//   backgroundColor: '#cbe8e8',
//   padding: 10,
//   marginRight: 10,
//   minWidth: 100,
//   alignItems: 'center',
//   borderWidth: 1,
//   borderColor: '#000',
// },
// repasTypeText: {
//   fontSize: 14,
//   textAlign: 'center',
// },
// ajouterText: {
//   fontSize: 16,
//   color: '#888',
// },
// });

import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Calendar_Common from '@/app/components/common/(tabs)/organisationAndPlanning/calendar'

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
const years = Array.from({ length: 11 }, (_, i) => currentYear - 5 + i) // 5 années avant et après

type RepasItemProps = {
  type: string
}

export default function App() {
  function RepasItem({ type }: RepasItemProps) {
    return (
      <View style={styles.repasRow}>
        <View style={styles.repasType}>
          <Text style={styles.repasTypeText}>{type}</Text>
        </View>
        <TextInput
          placeholder="Ajouter"
          style={{ borderBottomColor: '#F0F', borderBottomWidth: 2 }}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Calendar_Common />

      <View style={styles.boxContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>SAMEDI</Text>
        </View>

        <TouchableOpacity style={styles.ticket}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
        <RepasItem type="Petit-déjeuner" />
        <RepasItem type="Déjeuner" />
        <RepasItem type="Collation" />
        <RepasItem type="Dîner" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  result: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: '500',
  },
  boxContainer: {
    margin: 20,
    padding: 20,
    position: 'relative',
    backgroundColor: '#fff5f5',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
  header: {
    alignSelf: 'center',
    backgroundColor: '#ffcbd1',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 8,
    position: 'absolute',
    top: -25,
    zIndex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  ticket: {
    backgroundColor: '#d3f2f2',
    borderRadius: 5,
    padding: 5,
  },
  plus: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  repasRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  repasType: {
    backgroundColor: '#cbe8e8',
    padding: 10,
    marginRight: 10,
    minWidth: 120,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  repasTypeText: {
    fontSize: 14,
    textAlign: 'center',
  },
  ajouterText: {
    fontSize: 16,
    color: '#888',
  },
})
