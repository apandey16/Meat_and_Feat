import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import TextBox from '../../comps/Textbox/textbox';
import ScreenSplitLine from '../../comps/ScreenSplitLine';
import { auth } from '../../firebase/config';


import localStyles from './index.styles';
import styles from '../../style';
import textboxStyles from '../../comps/Textbox/style'
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
            console.log('Your email or password was incorrect');
          } else if (error.code === 'auth/email-already-in-use') {
            console.log('An account with this email already exists');
          } else {
            console.log('There was a problem with your request');
          }
        }
      };

    return (
      <View style={ [styles.ScreenContainer, {justifyContent: 'flex-start'}] }>
        <StatusBar style="auto" />
        <View style={ [styles.OuterBox, localStyles.OuterBox] }>
            <View style={ [styles.InnerBox, localStyles.InnerBox] }>
                <View style={localStyles.SignInSectionContainer}>
                    <Text style={ [styles.SubHeaderText, localStyles.SubHeaderText] }>Username</Text>
                    <TextInput placeholder="Enter Username" style={[tbStyle.placement, tbStyle.sizing, textboxStyles.container]} onChangeText={setEmail} />
                    {/* <TextBox placeholder="Enter Username" top="-15%" left="-3%" height="25%" width="90%" onTextChange={setEmail}/> */}
                </View>
                <View style={localStyles.SignInSectionContainer2}>
                    <Text style={ [styles.SubHeaderText, localStyles.SubHeaderText] }>Password</Text>
                    <TextInput placeholder="Enter password" style={[tbStyle.placement, tbStyle.sizing, textboxStyles.container]} onChangeText={setPassword} secureTextEntry />
                    {/* <TextBox placeholder="Enter Password" top="-15%" left="-3%" height="25%" width="90%" onTextChange={setPassword}/> */}
                </View>
                <RoundedButton name="Sign In" top="-5%" width="65%" height="15%" onPress={loginUser}/>
            </View>
        </View>
        <View style={ [ {height: '5%'} ] }></View>
        <ScreenSplitLine
            displayText="Or"
            textSize={32} />
        <View style={ [ {height: '5%'} ] }></View>
        <RoundedButton name="Log In With Google" onPress={() => null}/>
        <View style={ [ {height: '5%'} ] }></View>
        <ScreenSplitLine 
            displayText="Dont Have an Account?"
            displayText2="Create One Now!"
            textSize={18} />
        <View style={ [ {height: '5%'} ] }></View>
        <RoundedButton name="Make Account" onPress={() => navigation.navigate('Onboarding')}/>
      </View>
    );
}

const tbStyle = StyleSheet.create({
    placement: { 
        left: "-3%",
        top: "-15%",
        position: 'relative'
    },
    sizing: {
        width: "90%",
        height: "25%", 
    }
  })

export default LoginScreen;