import { Text, View, StyleSheet, Alert, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../style';
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import CircularButton from '../../comps/CircularButton/CircularButton';
import React from 'react';

const { width } = Dimensions.get('window');

const interestArray = [ {title: "Park"},
                       {title: "Walk"},
                       {title: "Runs"},
                       {title: "TV"},
                       {title: "Games"},
                       {title: "Gym"},
                       {title: "Sport"},
                       {title: "Meals"},
                       {title: "Cars"},
                       {title: "Music"},
                       {title: "Study"},
                       {title: "Other"}
                    ];

function SelectInterests() {
    const navigation = useNavigation();
    const buttonSize = width/5.7;
    const borderRadius = 20;
    
    return (
    <ScrollView>
        <View style={styles.ScreenContainer}>
            <View style={styles.OuterBox}>
                <View style={styles.InnerBox}>  
                    <Text style={styles.HeaderText}>Some Basic Info:</Text>
                    <Text style={styles.Subheading}>Select all interests</Text>
                    <View style={localStyles.buttonRow}>
                        {interestArray.map((interestObj) => (
                            <CircularButton onPress={() => Alert.alert("Clicked Button", "Selected Interest")}
                                            title={interestObj.title} 
                                            buttonSize={buttonSize} 
                                            borderRadius={borderRadius}
                                            key={interestObj.title}/>
                        ))}
                    </View>
                </View>
            <RoundedButton name="Next" height="7%" onPress={() => navigation.navigate('Email Verification')}/> 
            </View>
        </View>
      </ScrollView>
    );
}

const localStyles = StyleSheet.create({
    buttonRow: {    
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop:20,
        justifyContent:"center"
    },
  });

export default SelectInterests;