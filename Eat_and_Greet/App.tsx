import { StatusBar } from 'expo-status-bar';
import { Toolbar } from './comps/Toolbar/toolbar'; 
import TextBox from './comps/Toolbar/textbox';
import { StyleSheet, Text, Image, View } from 'react-native';
import CornerButton from './comps/Toolbar/CornerButton';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.temp} source={require('./assets/images/logo.png')}/>
      <StatusBar style="auto" />
      <CornerButton name="Log In" top="5%" alertText="Temp Text, send to log in page"/>
      <CornerButton name="Make Account" top="6%" alertText="Temp Text, send to onboarding page"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7286D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    right:5,
    height:400,
    width:400,
    justifyContent:'center'
  }
});
