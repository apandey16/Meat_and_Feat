import { View, Text, TextInput, Alert, ScrollView } from 'react-native';
import { useState, React } from 'react';

import { useNavigation } from '@react-navigation/native';

import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import { auth } from '../../firebase/config';


import localStyles from './index.styles';
import styles from '../../style';
import resetUserPassword from '../../logic/PasswordResetLogic';

function PasswordReset() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const resetPass = async () => {
      const resVal = await resetUserPassword(email, auth);
      if (resVal === 1){
        Alert.alert('Password reset email sent');
        navigation.navigate('Login');
      } else if (resVal === 'auth/invalid-email') {
          Alert.alert('Invalid email');
      } else {
          Alert.alert('There was a problem with your request. Please try again later.');
      }
    };


    return (
      <ScrollView>
      <View style={styles.Background}>
      <View style={ [styles.ScreenContainer, {justifyContent: 'flex-start'}] }>
        <View style={ [styles.OuterBox, localStyles.OuterBox] }>
            <View style={ [styles.InnerBox, localStyles.InnerBox] }>
            <Text style={ [styles.HeaderText, localStyles.SubHeaderText] }>Password Reset</Text>
                <View style={localStyles.SignInSectionContainer}>
                    <TextInput
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    placeholder="eat&greet@gmail.com"
                    autoCapitalize="none"
                    placeholderTextColor="#aaa"
                    style={[localStyles.input, localStyles.container]}
                  />
                </View>
                <RoundedButton name="Reset Password" top="-3%" width="90%" height="15%" onPress={ resetPass }/>
                <RoundedButton name="Back to Login" width="90%" height="15%" onPress={() => navigation.navigate('Login')}/>
            </View>
        </View>
      </View>
      </View>
      </ScrollView>

    );
}


export default PasswordReset;