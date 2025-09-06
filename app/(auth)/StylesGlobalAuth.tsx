import { Dimensions, StyleSheet } from 'react-native'

const stylesAuth = StyleSheet.create({
  bgColor: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    backgroundColor: 'transparent',
    borderBottomColor: '#F0F',
    borderBottomWidth: 1,
    color: '#F0F',
    fontSize: 16,
    marginVertical: 10,
  },
  boxBtn: {
    alignItems: 'center',
    marginVertical: 20,
  },
  btn: {
    borderColor: '#F0F',
    borderRadius: 25,
    borderWidth: 3,
    color: '#F0F',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    width: 200,
  },
})

export default stylesAuth
