import { View, Text, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState} from 'react';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import ScreenSplitLine from '../../comps/ScreenSplitLine';
import { auth } from '../../firebase/config';


import localStyles from './index.styles';
import styles from '../../style';
import textboxStyles from '../../comps/Textbox/style';
import { signInWithEmailAndPassword } from 'firebase/auth';


function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async () => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log('User logged in successfully');
          navigation.navigate('Home');
        } catch (error) {
          if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
            Alert.alert('Your email or password was incorrect');
          } else if (error.code === 'auth/email-already-in-use') {
            Alert.alert('An account with this email already exists');
          } else {
            Alert.alert('There was a problem with your request. Please try again later.');
          }
        }
      };

    return (
      <ScrollView>
        <View style={styles.Background}>
      <View style={ [styles.ScreenContainer, {justifyContent: 'flex-start'}] }>
        <StatusBar style="auto" />
        <View style={ [styles.OuterBox, localStyles.OuterBox] }>
            <View style={ [styles.InnerBox, localStyles.InnerBox] }>
                <View style={localStyles.SignInSectionContainer2}>
                    <Text style={ [styles.SubHeaderText, localStyles.SubHeaderText] }>Username</Text>
                    <TextInput placeholder="Enter Username" style={[textboxStyles.placement, textboxStyles.sizing, textboxStyles.container]} onChangeText={setEmail} />
                </View>
                <View style={localStyles.SignInSectionContainer}>
                    <Text style={ [styles.SubHeaderText, localStyles.SubHeaderText] }>Password</Text>
                    <TextInput placeholder="Enter password" style={[textboxStyles.placement, textboxStyles.sizing, textboxStyles.container]} onChangeText={setPassword} secureTextEntry />
                </View>
                <View style={localStyles.SignInSectionContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('Password Reset')}>
                        <Text style={[localStyles.link]}>Reset Password</Text>
                    </TouchableOpacity>
                    <RoundedButton name="Sign In" top="-5%" width="65%" height="15%" onPress={loginUser}/>
                </View>                 
                
            </View>
        </View>
        <View style={ [ {height: '5%'} ] }></View>
        <ScreenSplitLine 
            displayText="Dont Have an Account?"
            displayText2="Create One Now!"
            textSize={18} />
        <View style={ [ {height: '5%'} ] }></View>
        <RoundedButton name="Make Account" onPress={() => navigation.navigate('Onboarding')}/>
      </View>
      </View>
      </ScrollView>

    );
}


export default LoginScreen;