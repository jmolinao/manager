/* @flow */

import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Nombre"
            placeholder="Ricardo Canitrot"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Fono"
            placeholder="9 123 456 78"
          />
        </CardSection>

        <CardSection>
          <Button>crear</Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
