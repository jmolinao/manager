/* @flow */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChange, passwordChange, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChange(text);
  }

  onPasswordChange(text) {
    this.props.passwordChange(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={ styles.errorContainerStyle }>
          <Text style={ styles.errorTextStyle }>
            { this.props.error }
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={ this.onEmailChange.bind(this) }
            value={ this.props.email }
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
            onChangeText={ this.onPasswordChange.bind(this) }
            value={ this.props.password }
          />
        </CardSection>

        { this.renderError() }

        <CardSection>
          <Button onPress={ this.onButtonPress.bind(this) }>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorContainerStyle: {
    backgroundColor: '#ffffff',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
  };
};

export default connect(
  mapStateToProps,
  { emailChange, passwordChange, loginUser }
)(LoginForm);
