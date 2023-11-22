import {  Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase/config';

import { signInWithEmailAndPassword } from 'firebase/auth';

function loginUser(email: string, password: string) {   
    const navigation = useNavigation();
    return async () => {   
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
    }

}

export default loginUser;