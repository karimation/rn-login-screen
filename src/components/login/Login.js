import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginForm from './loginForm.js'
import Styles from '../../styles/styles.js';

export default class Login extends Component {
  render() {
    let logoImg = require('../../images/logo.png');
    return (
      <View style={Styles.container}>
        <View >
            <Image style={Styles.logo}source={logoImg} />
            <Text style={Styles.title}> LogIn</Text>
        </View>
        <LoginForm /> 
                
      </View>
    );
  }
}
