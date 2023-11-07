import { Image, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import RoundedButton from '../../comps/RoundedButton/RoundedButton';

import LoginStyles from './index.styles';
import styles from '../../style';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';

function LoginScreen() {
    const navigation = useNavigation();

    const [loggedIn, setLoggedIn] = useState(false);

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    const logInPress = () => {
      if (loggedIn) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Login');
      }
    }

    return (

      <ScrollView>
      <View style={styles.Background}>
      <View style={styles.ScreenContainer}>
          <View style={styles.ContentContainer}>
          <StatusBar style="auto" />
            <Image style={LoginStyles.logoStyles} source={require('../../../assets/images/logo.png')}/>
            <RoundedButton name="Log In" onPress={logInPress}/>
            <RoundedButton name="Make Account" onPress={() => navigation.navigate('Onboarding')}/>
            <RoundedButton name="Dev Page" onPress={() => navigation.navigate('Dev Page')}/>
          </View>
      </View>
      </View>

      </ScrollView>
    );
}

export default LoginScreen;