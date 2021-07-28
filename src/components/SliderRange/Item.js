import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  active: {
    textAlign: 'center',
    fontSize: 12,
    bottom: 10,
    color: '#008f7e',
    fontWeight: 'bold',
  },
  inactive: {
    fontSize: 20,
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#008f7e',
  },
  line: {
    fontSize: 10,
    textAlign: 'center',
  },
});

export class Item extends Component {
  render() {
    return (
      <View>
        <Text style={styles.active}>{this.props.value} KM</Text>
        {/* <Text style={[this.checkActive() ? styles.line : {}]}>
          {this.checkActive() ? '|' : ''}
        </Text> */}
        <View style={[this.checkActive() ? styles.line : {}]} />
      </View>
    );
  }

  checkActive = () => {
    if (
      this.props.value >= this.props.first &&
      this.props.value <= this.props.second
    ) {
      return true;
    } else {
      return false;
    }
  };
}
