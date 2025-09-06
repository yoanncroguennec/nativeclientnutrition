import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const stylesGardeningTipsCategories_Screen = StyleSheet.create({
  introContainer: {
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  titleStyles: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  descStyles: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imgBG_styles: {
    width: width - 32,
    height: 160,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    padding: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  btnTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
})

export default stylesGardeningTipsCategories_Screen
