import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { buttonStyle, textStyle } = styles;
    return (
      <TouchableOpacity
        onPress={ this.props.onPress }
        style={ buttonStyle }>
        <Text style={ textStyle }>{this.props.children.toUpperCase()}</Text>
      </TouchableOpacity>

    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#3b5998',
    borderWidth: 1,
    borderColor: '#3b5998',
    marginLeft: 5,
    marginRight: 5,
  },
};

export { Button };
