import React, { Component } from 'react';
import { View, Text } from 'react-native';

import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDXbcDDM4SwIQrHwkAAxLIKpwponcwnels",
      authDomain: "react-native-authenticat-ccaa3.firebaseapp.com",
      databaseURL: "https://react-native-authenticat-ccaa3.firebaseio.com",
      projectId: "react-native-authenticat-ccaa3",
      storageBucket: "react-native-authenticat-ccaa3.appspot.com",
      messagingSenderId: "408650070023"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user)
        this.setState({ loggedIn: true });
      else
        this.setState({ loggedIn: false });
    });
  }

  renderContent() {
    if (this.state.loggedIn === true)
      return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
      );
    else if (this.state.loggedIn === false)
      return <LoginForm/>
    else
      return <Spinner size="large" />
  }

  render() {
    return (
        <View>
          <Header headerText="Authentication" />
          {this.renderContent()}
        </View>
    )
  }
}

export default App;