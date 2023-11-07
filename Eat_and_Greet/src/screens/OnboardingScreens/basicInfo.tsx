import { Text, View, ScrollView, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import localStyles from './styles';
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import DateTimePicker from '@react-native-community/datetimepicker';

function BasicInfo() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [dob, setDob] = useState(new Date());
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const createAccount = async () => {
      try {
        if (password === confirmPassword) {
          await createUserWithEmailAndPassword(auth, email, password);
          navigation.navigate('Email Verification');
        } else {
          setError("Passwords don't match");
        }
      } catch (e) {
        console.log(e);
        if (e.code === 'auth/email-already-in-use') { 
          setError('That email address is already in use!');
        } else if (e.code === 'auth/invalid-email') {
          setError('That email address is invalid!');
        } else if (e.code === 'auth/weak-password') {
          setError('Password is too weak!');
        } else {
          setError('There was a problem creating your account');
        }
      }
    };    

    const birthday = (event: any, selectedDate: any) => {
      const currentDate = selectedDate;
      setDob(currentDate);
    };
    
    return (
      <View style={styles.Background}>
      <ScrollView>
        <View style={styles.ScreenContainer}>
          <View style={styles.OuterBox}>
              <View style={styles.InnerBox}>  
                  <Text style={styles.HeaderText}>Let's Get Started...</Text>
                  {error && <Text style={styles.error}>{error}</Text>}
                  <Text style={styles.SubHeaderText}>Name:</Text>
                  <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="First Last"
                    autoCapitalize="none"
                    placeholderTextColor="#aaa"
                    style={[localStyles.input, localStyles.container]}
                  />
                  <Text style={styles.SubHeaderText}>Date of Birth:</Text>
                  <DateTimePicker
                    value={dob}
                    mode='date'
                    onChange={birthday}
                  />

                  <Text style={styles.SubHeaderText}>Email Address:</Text>
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    placeholder="eat&greet@gmail.com"
                    autoCapitalize="none"
                    placeholderTextColor="#aaa"
                    style={[localStyles.input, localStyles.container]}
                  />
                  <Text style={styles.SubHeaderText}>Create Password:</Text>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder="Enter password"
                    autoCapitalize="none"
                    placeholderTextColor="#aaa"
                    style={[localStyles.input, localStyles.container]}
                  />
                  <TextInput
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    placeholder="Confirm password"
                    autoCapitalize="none"
                    placeholderTextColor="#aaa"
                    style={[localStyles.input, localStyles.container]}
                  />
              </View>
          </View>
          <RoundedButton name="Create Account" height="7%" onPress={() => {createAccount()}} disabled={!email || !password || !confirmPassword || !name || !dob}/>
        </View>
      </ScrollView>
      </View>
    );
}


export default BasicInfo;