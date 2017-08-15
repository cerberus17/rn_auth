import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from "./common";

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
              .then(this.onLoginSuccess.bind(this))
              .catch(this.onLoginFailed.bind(this));
        });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    else {
      return (
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
      )
    }
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  onLoginFailed(e) {
    this.setState({
      error: "Authentication Failed: " + e.message,
      loading: false
    });
  }

  render() {
    return (
        <Card>
          <CardSection>
            <Input label="Email"
                   autoCorrect={false}
                   autoFocus
                   placeholder="email@domain.com"
                   onChangeText={ (text) => { this.setState({email: text}); } }
                   value={this.state.email}/>
          </CardSection>

          <CardSection>
            <Input label="Password"
                   autoCorrect={false}
                   placeholder="password"
                   secureTextEntry
                   onChangeText={ (text) => { this.setState({password: text}); } }
                   value={this.state.password}/>
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

export default LoginForm;