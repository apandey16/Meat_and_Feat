import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import RoundedButton from '../../comps/RoundedButton/RoundedButton';

import styles from '../../style';
import React from 'react';

function LoginScreen() {
    const navigation = useNavigation();

    return (
      <ScrollView contentContainerStyle={{ minHeight: "100%" }}>
        <View style={[styles.ScreenContainer, {paddingVertical: "20%"}]}>
          <View style={[styles.ContentContainer]}>
            <StatusBar style="auto" /> 
            <RoundedButton name="Home" onPress={() => navigation.navigate('Home')}/>
            <RoundedButton name="Title" onPress={() => navigation.navigate('Welcome')}/>
            <RoundedButton name="Login Page" onPress={() => navigation.navigate('Login')}/>
            <RoundedButton name="Onboading" onPress={() => navigation.navigate('Onboarding')}/>
            <RoundedButton name="Chats" onPress={() => navigation.navigate('Chats')}/>
            <RoundedButton name="Example Chat" onPress={() => navigation.navigate('Example Chat')}/>  
            <RoundedButton name="Post Event" onPress={() => navigation.navigate('Post Event')}/>
            <RoundedButton name="Browse Event" onPress={() => navigation.navigate('Browse Event')}/> 
            <RoundedButton name="View Event" onPress={() => navigation.navigate('View Event')}/>  
            <RoundedButton name="Settings" onPress={() => navigation.navigate('Settings')}/>  
          </View>
        </View>
      </ScrollView>

    );
}

export default LoginScreen;