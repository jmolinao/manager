import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const size = this.props.size;

    return (
      <View style={ styles.spinnerStyle }>
        <ActivityIndicator size={ size || 'large' }/>
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export { Spinner };
