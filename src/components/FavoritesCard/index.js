import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import styles from './styles';

const FavoritesCard = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.btnFavoritesCard}>
        <View style={styles.itemCard}>
          <View style={styles.itemCardCenter}>
            <Image
              source={{ uri: item.image }}
              resizeMode="cover"
              style={styles.imageCard} />
            <View style={styles.footerInfo}>
              <View>
                <Text style={styles.textLeft}>{item.title}</Text>
              </View>
              <View>
                <Text style={styles.textRight}>{item.start}</Text>
                <Text style={styles.textRight}>{item.time}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FavoritesCard;
