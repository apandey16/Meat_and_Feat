import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import React from 'react';

function Confirmation() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.Background}>
        <ScrollView>
        <View style={styles.ScreenContainer}>
        <View style={styles.OuterBox}>
            <View style={styles.InnerBox}>  
                <Text style={styles.HeaderText}>ID Verification</Text>
                <Text style={styles.Subheading}></Text>                
                <Text style={styles.Text}>
                Your ID was successfully verified! Welcome to Eat&Greet!!
                    </Text>
                <RoundedButton name="Home Page" height="7%" onPress={() => navigation.navigate('Home')}/> 
            </View>
        </View>
      </View>
      </ScrollView>
      </View>
    );
}

export default Confirmation;