import { Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import React from 'react';
import { onAuthStateChanged, sendEmailVerification, getAuth } from 'firebase/auth';

function EmailVerify() {
    const navigation = useNavigation();
    
    const auth = getAuth();

    const emailVerify = async () => {
        try {
            if (auth.currentUser && !auth.currentUser?.emailVerified) {
                alert("Email Sent!");
                await sendEmailVerification(auth.currentUser);            
                navigation.navigate('Home');
            }
        } catch (e) {
            console.log(e);
        }
    }


    // onAuthStateChanged(auth, async (user) => {
    //     if (user) {
    //         await sendEmailVerification(user);            
    //         navigation.navigate('Home');
    //     } 
    //   });
    
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
                </View>
            </View>
        </View>
      </ScrollView>
      </View>
    );
}

export default EmailVerify;