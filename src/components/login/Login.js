import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Styles from '../../styles/styles.js';

export default class Login extends Component {
  render() {
    let logo = require('../../images/logo.png');
    return (
      <View style={Styles.container}>
        <View style={Styles.logo}>
            <Image  source={logo} />
            <Text style={Styles.title}> LogIn</Text>
        </View>
        <View style={Styles.login}>
          
        </View>

        
      </View>
    );
  }
}
