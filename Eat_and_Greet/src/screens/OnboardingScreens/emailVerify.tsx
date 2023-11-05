import { Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import TextBox from '../../comps/Textbox/textbox';
import React from 'react';

function EmailVerify() {
    const navigation = useNavigation();
    
    return (
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
                    <RoundedButton name="Verify" height="7%" onPress={() => navigation.navigate('ID Verification')}/> 
                </View>
            </View>
        </View>
      </ScrollView>
    );
}

export default EmailVerify;