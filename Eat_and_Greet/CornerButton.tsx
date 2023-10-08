import React from 'react';
import {View, TouchableOpacity, Text, Alert, StyleSheet} from 'react-native';
import styles from './style';

const CornerButton = ({name = 'default name', top = 0, left = 0, bottom = 0, right = 0, width = "80%", height = "10%"}) => {

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
             <TouchableOpacity onPress={onPress => Alert.alert('hello!')}>
                 <Text style={styles.CornerButtonText}>{name}</Text>
             </TouchableOpacity>
         </View>
    );
}

export default CornerButton;
