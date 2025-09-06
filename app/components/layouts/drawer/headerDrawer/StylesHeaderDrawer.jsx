import { StyleSheet } from 'react-native'

export const stylesHeaderDrawer = StyleSheet.create({
  root: {
    alignItems: 'center',
    gap: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    flexDirection: 'column',
    height: 250,
    justifyContent: 'space-between',
  },
  avatar: {
    borderRadius: 50,
    height: 80,
    width: 80,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
