import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const input = this.props;
    const { label, value, onChangeText, placeholder, secureTextEntry } = input;
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
      <View style={ containerStyle }>
        <Text style={ labelStyle }>{ label }</Text>
        <TextInput
          secureTextEntry={ secureTextEntry }
          placeholder={ placeholder }
          style={ inputStyle }
          autoCorrect={ false }
          value={ value }
          onChangeText={ onChangeText }
        />
      </View>
    );
  }
}

const styles = {
  inputStyle: {
    color: '#3b5998',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export { Input };
