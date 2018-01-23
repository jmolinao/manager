/* @flow */

import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Lunes' });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Nombre"
            placeholder="Ricardo Canitrot"
            value={ this.props.name }
            onChangeText={
              value => this.props.employeeUpdate({ prop: 'name', value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Fono"
            placeholder="9 123 456 78"
            value={ this.props.phone }
            onChangeText={
              value => this.props.employeeUpdate({ prop: 'phone', value })
            }
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={ styles.pickerTextStyle }>Turno</Text>
          <Picker
            selectedValue={ this.props.shift }
            onValueChange={
              value => this.props.employeeUpdate({ prop: 'shift', value })
            }
          >
            <Picker.Item label="Lunes" value="Lunes"/>
            <Picker.Item label="Martes" value="Martes"/>
            <Picker.Item label="Miércoles" value="Miércoles"/>
            <Picker.Item label="Jueves" value="Jueves"/>
            <Picker.Item label="Viernes" value="Viernes"/>
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={ this.onButtonPress.bind(this) }>crear</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 10,
  },
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate,
})(EmployeeCreate);
