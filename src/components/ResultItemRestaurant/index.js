import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles';

const ResultItemRestaurant = ({ image, title, address }) => {
  return (
    <View style={styles.itemRestaurant}>
      <Image
        source={{ uri: image }}
        resizeMode="cover"
        style={styles.imageRestaurant}
      />
      <View>
        <Text style={styles.textRestaurant}>{title}</Text>
        <Text style={styles.textAddress}>{address}</Text>
      </View>
    </View>
  );
};

export default ResultItemRestaurant;
