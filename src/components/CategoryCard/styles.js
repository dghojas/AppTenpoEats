import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants';

export default StyleSheet.create({
  itemCard: {
    marginTop: 10,
    width: 170,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 4,
  },
  imageCard: {
    width: 160,
    height: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    overflow: 'hidden',
  },
  titleCard: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  timeCard: {
    fontSize: 12,
  },
});
