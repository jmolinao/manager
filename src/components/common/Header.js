import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    borderWidth: 0.5,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#dfe3ee',
    shadowOffset: { width: 0, height: 3},
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',

  },
});

export { Header };
