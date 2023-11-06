import { Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import React from 'react';
import { sendEmailVerification, getAuth } from 'firebase/auth';

function EmailVerify() {
    const navigation = useNavigation();
    
    const auth = getAuth();

    const emailVerify = async () => {
        console.log("in email verify");
        try {
            if (auth.currentUser && !auth.currentUser?.emailVerified) {
                await sendEmailVerification(auth.currentUser);         
                alert("Email Sent!");   
            } else {
                alert("Email already verified!");
            }
        } catch (e) {
            console.log(e);
        }
    }

    const cont = () => { 
        console.log("in cont");
        auth.currentUser?.reload();
        console.log(auth.currentUser?.emailVerified);
        if (auth.currentUser && auth.currentUser?.emailVerified) {
            navigation.navigate('Home');
        } else {
            alert("Please verify your email first!");
        }
    }
    
    return (
    <View style={styles.Background}>
    <ScrollView>
        <View style={styles.ScreenContainer}>
            <View style={styles.OuterBox}>
                <View style={styles.InnerBox}>  
                    <Text style={styles.HeaderText}>Email Verification</Text>
                    <Text style={styles.Subheading}>Please verify your email so we know you are real!</Text> 
                    <Text style={styles.Text}>
                        Didn’t get a code?
                        Check your spam!
                        </Text>
                    <RoundedButton name="Verify" height="7%" onPress={() => emailVerify()}/>
                    <RoundedButton name="Continue" height="7%" onPress={() => cont()}/>  
                </View>
            </View>
        </View>
      </ScrollView>
      </View>
    );
}

export default EmailVerify;