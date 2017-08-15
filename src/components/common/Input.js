import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
  return (
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{props.label}</Text>
        <TextInput value={props.value}
                   autoCorrect={props.autoCorrect}
                   placeholder={props.placeholder}
                   autoFocus={props.autoFocus}
                   style={styles.inputStyle}
                   secureTextEntry={props.secureTextEntry}
                   onChangeText={props.onChangeText}/>
      </View>
  );
};

Input.defaultProps = {
  autoFocus: false,
  autoCorrect: true,
  placeholder: "",
  secureTextEntry: false,
  value: ""
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: Platform.OS == 'android' ? 40 : 20,
    width: 100
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export { Input };