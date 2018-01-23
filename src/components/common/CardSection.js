import React, { Component } from 'react';
import { View } from 'react-native';

class CardSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={ [styles.containerStyle, this.props.style] }>
        {this.props.children}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#f7f7f7',
    position: 'relative',
  },
};

export { CardSection };
