import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Styles from '../../styles/styles.js';

export default class Login extends Component {
  render() {
    let logoImg = require('../../images/logo.png');
    return (
      <View style={Styles.container}>
        <View style={Styles.logo}>
            <Image source={logoImg} />
            <Text style={Styles.title}> LogIn</Text>
        </View>
                
      </View>
    );
  }
}
