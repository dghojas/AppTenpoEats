import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

const RestaurantCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.itemCard}>
      <View style={styles.imageCard}>
        <ImageBackground
          source={{ uri: item.image }}
          resizeMode="cover"
          style={styles.imageCard}>
          <Text style={styles.titleCard}>{item.title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
