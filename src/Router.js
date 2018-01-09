/* @flow */

import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="auth" initial>
          <Scene
            key="login"
            component={ LoginForm }
            title="INGRESAR"
          />
        </Scene>

        <Scene key="main">
          <Scene
            key="employeelist"
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
            back
          />
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
