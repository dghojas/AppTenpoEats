import React from 'react';
import { SafeAreaView, View, FlatList, Image, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import dataRestaurant from '../../mock/restaurant.json';
import dataCategory from '../../mock/category.json';

// import { SIZES } from '../../constants';
// import colors from '../../config/colors';
import RestaurantCard from '../../components/RestaurantCard';
import CategoryCard from '../../components/CategoryCard';
import FavoritesCard from '../../components/FavoritesCard';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({ address, navigation }) => {
  const renderItemRestaurant = ({ item }) => <RestaurantCard item={item} />;
  const renderItemCategory = ({ item }) => <CategoryCard item={item} />;
  const renderItemFavorites = ({ item }) => <FavoritesCard item={item} />;

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.headerPanel}>
            <TouchableOpacity style={styles.btnPerfil}>
              <Image
                style={styles.imagePerfil}
                resizeMode="contain"
                source={require('../../assets/img/perfil.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchRestaurant')}>
              <Ionicons name="search" size={30} color="#2e9e8f" />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.imageSearch}
            resizeMode="cover"
            source={require('../../assets/img/header-home.jpg')}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SearchLocation')}>
          <View style={styles.infoAddress}>
            <MaterialCommunityIcons
              name="map-marker-radius-outline"
              size={30}
              color="#2e9e8f"
              style={styles.iconMap}
            />

            {address ? (
              <View>
                <Text style={styles.textAddress}>Enviaremos tus pedidos a</Text>
                <Text style={styles.textAddress}>{address}</Text>
              </View>
            ) : (
              <Text style={styles.textAddress}>
                Agregar dirección de entrega
              </Text>
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.viewData}>
          <Text style={styles.textRestaurant}>Restaurantes</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataRestaurant.data}
            keyExtractor={item => item.id}
            renderItem={renderItemRestaurant}
          />
          <Text style={styles.textCategory}>Categorías</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataCategory.data}
            keyExtractor={item => item.id}
            renderItem={renderItemCategory}
          />

          <Text style={styles.textRestaurant}>TUS FAVORITOS</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataRestaurant.data}
            keyExtractor={item => item.id}
            renderItem={renderItemFavorites}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return { address: state.address };
};

export default connect(mapStateToProps)(Home);
