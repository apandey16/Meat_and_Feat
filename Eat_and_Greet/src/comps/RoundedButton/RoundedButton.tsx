import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from '../../style';

interface RoundedButtonProps {
    name ?: string;
    top ?: any;
    left ?: any;
    bottom ?: any;
    right ?: any;
    width ?: any;
    height ?: any;
    onPress?: () => void;
    disabled?: boolean;
}

const RoundedButton = (props : RoundedButtonProps) => {

    const localstyle = StyleSheet.create({
        placement: { 
            top: props.top,
            bottom: props.bottom,
            left: props.left,
            right: props.right,
            margin: 5
        },
        sizing: {
            minWidth: props.width,
            minHeight: props.height, 
        }
    })

    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled} style={[styles.CornerButtonOutline, localstyle.placement, localstyle.sizing]}>
                 <Text style={styles.ButtonText}>{props.name}</Text>
        </TouchableOpacity>
    );
}

const defaultProps: RoundedButtonProps = {
    name : 'default name',
    top : 0,
    left : 0,
    bottom : 0,
    right : 0,
    width : "80%",
    height : "10%"
};

RoundedButton.defaultProps = defaultProps;

export default RoundedButton;
