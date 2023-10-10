import React from 'react';
import {View, TouchableOpacity, Text, Alert, StyleSheet} from 'react-native';
import styles from '../../style';
import { useNavigation } from '@react-navigation/native';

const CornerButton = ({name = 'default name', top = 0, left = 0, bottom = 0, right = 0, width = "80%", height = "10%", navScreen}) => {

    const navigation = useNavigation();

    const localstyle = StyleSheet.create({
        placement: { 
            top: top,
            bottom: bottom,
            left: left,
            right: right
        },
        sizing: {
            width: width,
            height: height, 
        }
    })
    return (
        <View style={[styles.CornerButtonOutline, localstyle.placement, localstyle.sizing]}>
             <TouchableOpacity onPress={() => navigation.navigate(navScreen)}>
                 <Text style={styles.CornerButtonText}>{name}</Text>
             </TouchableOpacity>
         </View>
    );
}

export default CornerButton;
