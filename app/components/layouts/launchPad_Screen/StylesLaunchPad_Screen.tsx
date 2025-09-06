import { Dimensions, StyleSheet } from 'react-native'

const NUM_COLUMNS = 3
const SCREEN_WIDTH = Dimensions.get('window').width
const ITEM_SIZE = SCREEN_WIDTH / NUM_COLUMNS - 10

const stylesLaunchPad_Screen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 200,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
  },
  launchPad: {
    backgroundColor: '#00F',
    borderRadius: 25,
    padding: 10,
    minWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  selectableImage: {
    width: 100,
    height: 100,
    marginHorizontal: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  iconRow: {
    flexDirection: 'row',
    gap: 2,
  },
  launchPadText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerIcon: {
    height: 45,
    width: 45,
  },
  grid: {
    paddingHorizontal: 5,
  },
  itemStyles: {
    height: ITEM_SIZE + 15,
    width: ITEM_SIZE,
    margin: 5,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: -100, height: 15 },
    shadowOpacity: 0.1, // minimum: 0 - maximum: 1
    shadowRadius: 2,
    elevation: 1, // Valeur plus haute = ombre plus grande et plus floue - Fonctionne uniquement sur Android, tandis que shadow* ne fonctionne que sur iOS.
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // elevation: 2,
  },
  icon: {
    height: 75,
    width: 55,
  },
  label: {
    color: '#FFF',
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default stylesLaunchPad_Screen
