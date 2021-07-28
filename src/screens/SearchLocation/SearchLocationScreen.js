import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { addAddress } from '../../redux/actions';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Searchbar } from 'react-native-paper';

const SearchLocation = props => {
  const [updateAddress, setUpdateAddress] = useState('');
  const { navigation } = props;

  const btnAddAddress = val => {
    if (val) {
      props.addAddress(val);
      navigation.navigate('Home');
    } else {
      Alert.alert('Alert Message', 'Obligatorio escribe tu dirección', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK' },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.areaView}>
      <View>
        <View style={styles.viewAddress}>
          <MaterialCommunityIcons
            name="map-marker-radius-outline"
            size={30}
            color="#2e9e8f"
          />
          <Text style={styles.textAddress}>Agregar dirección de entrega</Text>
        </View>

        <Searchbar
          placeholder="Escribe tu dirección"
          iconColor="#2e9e8f"
          inputStyle={styles.inputSearch}
          style={styles.inputSearch}
          placeholderTextColor="#2e9e8f"
          value={updateAddress}
          onChangeText={val => setUpdateAddress(val)}
        />

        <Image
          style={styles.imageMaps}
          resizeMode="cover"
          source={require('../../assets/img/maps.png')}
        />

        <View style={styles.viewInfo}>
          <Text style={styles.textAddInfo}>Agregar información de entrega</Text>
          <Text style={styles.textLive}>Depto, Oficina, Piso, Block,</Text>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              numberOfLines={10}
              multiline={true}
            />
          </View>
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => btnAddAddress(updateAddress)}>
            <Text style={styles.textBtnAdd}>Agregar dirección</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => ({
  addAddress: address => dispatch(addAddress(address)),
});

export default connect(null, mapDispatchToProps)(SearchLocation);
