import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const styles_GardeningTips_SubCategories = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  pickerWrapper: {
    flex: 1,
    marginHorizontal: 8,
  },
  label: {
    fontWeight: '600',
    marginBottom: 4,
    color: '#000',
  },
  picker: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    height: 40,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageBG: {
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

export default styles_GardeningTips_SubCategories
