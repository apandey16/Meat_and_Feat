import { Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import TextBox from '../../comps/Textbox/textbox';
import React from 'react';

function EmailVerify() {
    const navigation = useNavigation();
    
    return (
    <View style={styles.Background}>
    <ScrollView>
        <View style={styles.ScreenContainer}>
            <View style={styles.OuterBox}>
                <View style={styles.InnerBox}>  
                    <Text style={styles.HeaderText}>Email Verification</Text>
                    <Text style={styles.Subheading}>Please verify your email so you can login with email in the future!</Text>
                    
                    <TextBox placeholder="Enter Code Here" top="%" />
                    
                    <Text style={styles.Text}>
                        Didn’t get a code?
                        Check your spam!
                        Or click HERE for a new code.
                        </Text>
                    <RoundedButton name="Verify" height="7%" onPress={() => navigation.navigate('ID Verification')}/> 
                </View>
            </View>
        </View>
      </ScrollView>
      </View>
    );
}

export default EmailVerify;