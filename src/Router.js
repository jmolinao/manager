/* @flow */

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={ LoginForm }
            title="INGRESAR"
          />
        </Scene>

        <Scene key="main">
          <Scene
            key="employeeList"
            onRight={ () => Actions.employeeCreate() }
            rightTitle="Agregar"
            component={ EmployeeList }
            title="EMPLEADOS"
            initial
          />
          <Scene
            key="employeeCreate"
            component={ EmployeeCreate }
            title="CREAR EMPLEADO"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
