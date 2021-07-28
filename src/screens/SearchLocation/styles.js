import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width / 541;

export default StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: '#d4f9f5',
  },
  viewAddress: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textAddress: {
    textAlign: 'center',
    marginLeft: 10,
    color: '#2e9e8f',
    fontFamily: 'Poppins-Regular',
  },
  inputSearch: {
    width: '100%',
    color: '#008f7e',
    borderRadius: 50,
    fontSize: 12,
    fontFamily: 'Poppins-ExtraLight',
  },
  imageMaps: {
    marginTop: -22,
    width: win.width,
    height: 362 * ratio,
    zIndex: -1,
  },
  viewInfo: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 15,
  },
  textAddInfo: {
    fontWeight: '700',
  },
  textLive: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'grey',
    marginBottom: 10,
  },
  textAreaContainer: {
    borderColor: '#e7e7e8',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  textArea: {
    height: 100,
    justifyContent: 'flex-start',
  },
  buttonAdd: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#01baa4',
    borderRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  textBtnAdd: {
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
