import { Text, View, ScrollView, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';

function BasicInfo() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const createAccount = async () => {
      try {
        if (password === confirmPassword) {
          await createUserWithEmailAndPassword(auth, email, password);
        } else {
          setError("Passwords don't match");
        }
      } catch (e) {
        setError('There was a problem creating your account');
      }
    };
    
  
    
    return (
      <ScrollView>
        <View style={styles.ScreenContainer}>
          <View style={styles.OuterBox}>
              <View style={styles.InnerBox}>  
                  <Text style={styles.HeaderText}>Let's Get Started...</Text>
                  <Text style={styles.SubHeaderText}>Name:</Text>
                  <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="First Last"
                    autoCapitalize="none"
                    placeholderTextColor="#aaa"
                    style={[style.input, style.container]}
                  />
                  <Text style={styles.SubHeaderText}>Date of Birth:</Text>
                  <TextInput
                    value={dob}
                    onChangeText={setDob}
                    placeholder="mm/dd/yyyy"
                    autoCapitalize="none"
                    placeholderTextColor="#aaa"
                    style={[style.input, style.container]}
                  />
                  <Text style={styles.SubHeaderText}>Email Address:</Text>
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    placeholder="eat&greet@gmail.com"
                    autoCapitalize="none"
                    placeholderTextColor="#aaa"
                    style={[style.input, style.container]}
                  />
                  <Text style={styles.SubHeaderText}>Create Password:</Text>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    placeholder="Enter password"
                    autoCapitalize="none"
                    placeholderTextColor="#aaa"
                    style={[style.input, style.container]}
                  />
                  <TextInput
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    placeholder="Confirm password"
                    autoCapitalize="none"
                    placeholderTextColor="#aaa"
                    style={[style.input, style.container]}
                  />
                  <RoundedButton name="Profile Photo" height="7%" onPress={() => navigation.navigate('Photo Upload')}/>
              </View>
          </View>
          <Button
            title="Create Account"
            onPress={createAccount}
            disabled={!email || !password || !confirmPassword}
          />
        </View>
      </ScrollView>
    );
}

const style = StyleSheet.create({
  container: {
    margin: 10,
    width: '79%',
    backgroundColor: '#FFFFF2',
    borderRadius: 4,
    marginBottom: 0,
    borderColor: 'black',
    borderWidth: 0.25,
    alignContent: 'center',
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  error: {
    marginBottom: 20,
    color: 'red',
  },
});


export default BasicInfo;