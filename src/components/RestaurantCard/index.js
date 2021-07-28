import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import styles from './styles';

const RestaurantCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.itemCard}>
      <Image
        source={{ uri: item.image }}
        resizeMode="cover"
        style={styles.imageCard}
      />
      <View>
        <Text style={styles.titleCard}>{item.title}</Text>
        <Text style={styles.timeCard}>
          {item.start}{' '}{item.time} min.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
