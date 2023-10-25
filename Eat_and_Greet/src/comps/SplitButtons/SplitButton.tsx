import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../../style';
import localstyles from './style';

interface SplitButtonProps {
    onPress1?: () => void;
    onPress2?: () => void;
    onPress3?: () => void;

}

const SplitButton = (props : SplitButtonProps) => {
    return (
        <View id="full bar" style={localstyles.fullbar}>
            <TouchableOpacity style={localstyles.button} onPress={props.onPress1}>
                <Text style={styles.CenterText}>User {'\n'}Information</Text>
            </TouchableOpacity>
            <View style={localstyles.view}></View>
            <TouchableOpacity style={localstyles.button} onPress={props.onPress2}>
                <Text style={styles.CenterText}> Events {'\n'}Hosted</Text>
            </TouchableOpacity>
            <View style={localstyles.view}></View>
            <TouchableOpacity style={localstyles.button} onPress={props.onPress3}>
                <Text style={styles.CenterText}>Events {'\n'}Attended</Text>
            </TouchableOpacity>
        </View>
        
    );
};

export default SplitButton;
