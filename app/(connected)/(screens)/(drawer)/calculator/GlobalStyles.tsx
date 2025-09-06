import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
  // Button
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#4B5EFC',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#2E2F38',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#4E505F',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: '#FFF',
  },
  smallTextDark: {
    fontSize: 32,
    color: '#000',
  },
  // Keyboard
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
  },
  viewBottom: {
    position: 'absolute',
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: '#747477',
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
  screenSecondNumber: {
    fontSize: 40,
    color: '#747477',
    fontWeight: '200',
    alignSelf: 'flex-end',
  },
})
