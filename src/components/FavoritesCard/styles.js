import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants';

export default StyleSheet.create({
  btnFavoritesCard: {
    width: 220,
  },
  itemCard: {
    marginTop: 10,
    width: 210,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 4,
  },
  itemCardCenter: {
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  imageCard: {
    width: 200,
    height: 90,
    // marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // overflow: 'hidden',
  },
  titleCard: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  timeCard: {
    fontSize: 12,
  },
  textLeft: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'left',
    fontSize: 12,
    color: '#01baa4',
  },
  textRight: {
    textAlign: 'right',
    fontSize: 12,
  },
  footerInfo: {
    marginBottom: 20,
    width: 200,
    height: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});
