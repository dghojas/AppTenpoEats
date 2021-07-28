import React from 'react';
import { Text, View, Linking } from 'react-native';
import styles from './styles';

const Information = ({ navigation }) => {
  return (
    <View style={styles.viewInformation}>
      <Text style={styles.textProject}>Desafío</Text>
      <Text style={styles.textProject}>Proyecto de TenpoEats</Text>
      <Text
        style={styles.linkRepo}
        onPress={() =>
          Linking.openURL('https://github.com/dghojas/AppTenpoEats')
        }>
        Link de GitHub Repositorio
      </Text>

      <Text style={styles.autores}>Autores: Daniel Godoy Hojas 🍃</Text>
    </View>
  );
};

export default Information;
