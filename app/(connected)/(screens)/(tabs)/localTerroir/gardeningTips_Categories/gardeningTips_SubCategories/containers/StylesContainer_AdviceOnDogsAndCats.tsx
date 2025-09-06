import { StyleSheet } from 'react-native'

const stylesContainer_AdviceOnDogsAndCats = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    height: 150,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: '100%',
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backBtn: {
    position: 'absolute',
    left: '5%',
    top: '40%',
    transform: [{ translateY: -15 }],
    backgroundColor: '#CECECE',
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  titleStyles: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 250,
  },
})

export default stylesContainer_AdviceOnDogsAndCats
