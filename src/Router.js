/* @flow */

import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={ LoginForm }
            title="INGRESAR"
          />
        </Scene>

        <Scene key="main">
          <Scene
            onRight={ () => console.log('Right!!!') }
            rightTitle="Agregar"
            key="employeelist"
            component={ EmployeeList }
            title="EMPLEADOS"
          />
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
