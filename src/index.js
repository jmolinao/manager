/* @flow */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class Index extends Component {

  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyAfq2QK5GLid3vdurbSSh_Bu4erZkhqWxU',
      authDomain: 'manager-c9ee6.firebaseapp.com',
      databaseURL: 'https://manager-c9ee6.firebaseio.com',
      projectId: 'manager-c9ee6',
      storageBucket: 'manager-c9ee6.appspot.com',
      messagingSenderId: '303800769752',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={ store }>
        <Router />
      </Provider>
    );
  }
}

export default Index;
