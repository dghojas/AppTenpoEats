import React, { useState, useCallback, createRef } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StatusBar,
  Image,
} from 'react-native';
import style from './styles';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { connect } from 'react-redux';
import { Searchbar } from 'react-native-paper';

import ActionSheet from 'react-native-actions-sheet';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import dataRestaurant from '../../mock/restaurant.json';
import ResultItemRestaurant from '../../components/ResultItemRestaurant';
import { CustomSlider } from '../../components/SliderRange/CustomSlider';

const screenHeight = Math.round(Dimensions.get('window').height);

const SearchRestaurant = ({ address, navigation }) => {
  setTimeout(() => {
    const getAddress = address;
    if (getAddress === '') {
      navigation.goBack();
      navigation.navigate('SearchLocation');
    }
  }, 100);

  const [paddingTopInfo, setPaddingTopInfo] = useState(50);
  const [activeOption, setAtiveOption] = useState(false);

  const [restauranties, updateRestaurant] = useState([]);
  const [searchRestaurant, updateSearchRestaurant] = useState([]);

  const [singleSliderValue, setSingleSliderValues] = useState([]);

  const actionSheetRef = createRef();
  const actionSheetRefKM = createRef();

  const filterRestaurant = useCallback(
    searchText => {
      if (searchText) {
        setAtiveOption(true);
        setPaddingTopInfo(0);
        const result = dataRestaurant['data'].filter(restaurant =>
          restaurant.title.includes(searchText),
        );
        updateSearchRestaurant(result);
      } else {
        setAtiveOption(false);
        setPaddingTopInfo(50);
        updateSearchRestaurant(restauranties);
      }
    },
    [restauranties],
  );

  const [dataBottomSheet, setDataBottomSheet] = useState({
    image: null,
    title: null,
    address: null,
  });

  const btnBottomOpen = (image, title, address) => {
    actionSheetRef.current?.setModalVisible();
    setDataBottomSheet({
      image,
      title,
      address,
    });
  };

  const btnBottomOpenKM = () => {
    actionSheetRefKM.current?.setModalVisible(true);
  };
  const btnBottomCloseKM = () => {
    actionSheetRefKM.current?.setModalVisible(false);
  };

  const singleSliderValueCallback = values => setSingleSliderValues(values);

  return (
    <SafeAreaView style={style.areaView}>
      <View style={style.flexOne}>
        <View style={style.viewAddress}>
          <View style={style.viewFlexRow}>
            <TouchableOpacity onPress={navigation.goBack}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color="#2e9e8f"
              />
            </TouchableOpacity>
            <View style={style.viewRsAddress}>
              <Text style={style.textTitLocation}>Tu ubicación cercana</Text>
              <Text style={style.textAddress}>{address}</Text>
            </View>
          </View>

          <TouchableOpacity style={style.iconLocation}>
            <MaterialIcons name="my-location" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <Searchbar
          placeholder="Escribe nombre del restaurante que búscas"
          iconColor="#2e9e8f"
          inputStyle={style.inputSearch}
          style={style.inputSearch}
          placeholderTextColor="#2e9e8f"
          onChangeText={filterRestaurant}
        />

        {activeOption && (
          <View
            style={style.viewOptions}
            pointerEvents={activeOption ? 'auto' : 'none'}>
            <TouchableOpacity style={style.btnOption}>
              <Text style={style.textOption}>Solo locales abiertos</Text>
              <MaterialIcons name="check-circle" size={20} color="#008f7e" />
            </TouchableOpacity>
            <TouchableOpacity style={style.btnOption} onPress={btnBottomOpenKM}>
              <Text style={style.textOption}>Área de búsqueda: 1KM</Text>
            </TouchableOpacity>
          </View>
        )}

        <View
          style={[
            style.viewInfo,
            style.flexOne,
            {
              paddingTop: paddingTopInfo,
              marginTop: StatusBar.currentHeight || 0,
            },
          ]}>
          <FlatList
            contentContainerStyle={style.flexGrowOne}
            data={searchRestaurant}
            keyExtractor={item => item.id}
            renderItem={({ item: { image, title, address } }) => {
              return (
                <TouchableOpacity
                  onPress={() => btnBottomOpen(image, title, address)}>
                  <ResultItemRestaurant
                    image={image}
                    title={title}
                    address={address}
                  />
                </TouchableOpacity>
              );
            }}
            ListEmptyComponent={() => (
              <View style={style.viewEmpty}>
                <View>
                  <Text style={style.textEmptyOne}>Lo sentimos</Text>
                  <Text style={style.textEmptyTwo}>
                    En este momento no hay locales abiertos en el área {''}
                    de busqueda determinada.
                  </Text>
                </View>
              </View>
            )}
          />
        </View>

        <ActionSheet ref={actionSheetRef}>
          <View
            style={[
              style.bottomSheet,
              {
                height: screenHeight - 170,
              },
            ]}>
            <View style={style.lineTop} />
            <Image
              source={{ uri: dataBottomSheet.image }}
              resizeMode="cover"
              style={style.singleImage}
            />
            <Text style={style.singleTitle}>{dataBottomSheet.title}</Text>
            <Text style={style.singleAddress}>{dataBottomSheet.address}</Text>
          </View>
        </ActionSheet>

        <ActionSheet ref={actionSheetRefKM}>
          <View style={style.viewBottomSheetKM}>
            <View style={style.lineTop} />
            <View style={style.headerKM}>
              <Text style={style.textAreaSearch}>Área de búsqueda</Text>
              <Text style={style.textInfoArea}>
                Puedes modificar el radio de distancia para encontrar {''}
                tu restaurante
              </Text>
            </View>
            <View style={style.viewRangeSlider}>
              <CustomSlider
                min={1}
                max={5}
                LRpadding={40}
                callback={singleSliderValueCallback}
                single={true}
              />
            </View>
            <View style={style.heiMap}>
              <ImageBackground
                source={require('../../assets/img/maps-km.png')}
                resizeMode="cover"
                style={style.bgImageKM}>
                <TouchableOpacity
                  style={style.btnAplicar}
                  onPress={() => btnBottomCloseKM()}>
                  <Text style={style.textAplicar}>APLICAR</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </View>
        </ActionSheet>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return { address: state.address };
};

export default connect(mapStateToProps)(SearchRestaurant);
