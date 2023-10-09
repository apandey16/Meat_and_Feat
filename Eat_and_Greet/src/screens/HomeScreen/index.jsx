import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Toolbar } from '../../../comps/Toolbar/toolbar';
import TextBox from '../../../comps/Toolbar/textbox';

function HomeScreen() {
    return (
      <View style={styles.container}>
        <Toolbar />
        <StatusBar style="auto" />
        <TextBox placeholder="Type ..." />
        <Text>Home Screennnn Bruh</Text>
        <Text>Welcome to our app!</Text>
      </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});