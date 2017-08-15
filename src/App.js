import React, { Component } from 'react';
import { View, Text } from 'react-native';

import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDXbcDDM4SwIQrHwkAAxLIKpwponcwnels",
      authDomain: "react-native-authenticat-ccaa3.firebaseapp.com",
      databaseURL: "https://react-native-authenticat-ccaa3.firebaseio.com",
      projectId: "react-native-authenticat-ccaa3",
      storageBucket: "react-native-authenticat-ccaa3.appspot.com",
      messagingSenderId: "408650070023"
    });
  }

  render() {
    return (
        <View>
          <Header headerText="Authentication" />
          <LoginForm/>
        </View>
    )
  }
}

export default App;