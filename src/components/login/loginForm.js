import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Styles from '../../styles/styles.js';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <TextInput style={Styles.input} />

        <TextInput style={Styles.input} />
      </View>
    );
  }
}
