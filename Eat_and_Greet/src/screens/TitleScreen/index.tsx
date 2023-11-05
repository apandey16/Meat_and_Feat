import { Image, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import RoundedButton from '../../comps/RoundedButton/RoundedButton';

import LoginStyles from './index.styles';
import styles from '../../style';
import React from 'react';

function LoginScreen() {
    const navigation = useNavigation();

    return (

      <ScrollView>
      <View style={styles.Background}>
      <View style={styles.ScreenContainer}>
          <View style={styles.ContentContainer}>
          <StatusBar style="auto" />
            <Image style={LoginStyles.logoStyles} source={require('../../../assets/images/logo.png')}/>
            <RoundedButton name="Log In" onPress={() => navigation.navigate('Login')}/>
            <RoundedButton name="Make Account" onPress={() => navigation.navigate('Onboarding')}/>
            <RoundedButton name="Dev Page" onPress={() => navigation.navigate('Dev Page')}/>
          </View>
      </View>
      </View>

      </ScrollView>
    );
}

export default LoginScreen;