/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChange } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChange(text);
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
          />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
  };
};

export default connect(mapStateToProps, { emailChange })(LoginForm);
