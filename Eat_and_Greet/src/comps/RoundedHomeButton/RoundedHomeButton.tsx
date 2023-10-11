import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import styles from '../../style';

interface RoundedHomeButtonProps {
    name ?: string;
    top ?: any;
    left ?: any;
    bottom ?: any;
    right ?: any;
    width ?: any;
    height ?: any;
    onPress?: () => void;
}

const RoundedHomeButton = (props : RoundedHomeButtonProps) => {

    const localstyle = StyleSheet.create({
        placement: { 
            top: props.top,
            bottom: props.bottom,
            left: props.left,
            right: props.right
        },
        sizing: {
            width: props.width,
            height: props.height, 
        }
    })

    return (
        <View style={[styles.CornerButtonOutline, localstyle.placement, localstyle.sizing]}>
             <TouchableOpacity onPress={props.onPress}>
                 <Text style={styles.ButtonText}>{props.name}</Text>
             </TouchableOpacity>
         </View>
    );

    
}

const defaultProps: RoundedHomeButtonProps = {
    name : 'default name',
    top : 0,
    left : 0,
    bottom : 0,
    right : 0,
    width : "80%",
    height : "10%"
};

RoundedHomeButton.defaultProps = defaultProps;

export default RoundedHomeButton;
