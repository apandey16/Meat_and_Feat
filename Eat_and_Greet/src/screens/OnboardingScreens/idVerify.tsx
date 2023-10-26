import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import React from 'react';

function IdVerify() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.ScreenContainer}>
        <View style={styles.OuterBox}>
            <View style={styles.InnerBox}>  
                <Text style={styles.HeaderText}>ID Verification</Text>
                <Text style={styles.Subheading}></Text>                
                <Text style={styles.Text}>
                Click the Button below to be redirected to ID.me
                    </Text>
                <RoundedButton name="ID.me" height="7%" top="10%" onPress={() => navigation.navigate('Confirmation')}/> 
            </View>
        </View>
      </View>
    );
}

export default IdVerify;