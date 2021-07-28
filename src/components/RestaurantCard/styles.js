import { StyleSheet } from 'react-native';
// import colors from '../../config/colors';
import { SIZES } from '../../constants';

export default StyleSheet.create({
  itemCard: {
    marginTop: 10,
    width: 120,
  },
  'itemCard:first-child': {
    paddingLeft: 30,
  },
  imageCard: {
    width: 110,
    height: 110,
    borderRadius: SIZES.radius,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    overflow: 'hidden',
  },
  titleCard: {
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  timeCard: {
    fontSize: 11,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
