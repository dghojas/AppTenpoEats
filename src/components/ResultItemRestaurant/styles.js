import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  itemRestaurant: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
  },
  imageRestaurant: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 6,
  },
  textRestaurant: {
    color: '#333333',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  textAddress: {
    color: '#adadad',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});
