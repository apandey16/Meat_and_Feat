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
        <View id="full bar" style={{flexDirection: 'row', backgroundColor: 'black', height: 45, padding: 2,}}>
            <TouchableOpacity style={{flex: 1, backgroundColor: '#E5E0FF'}} onPress={props.onPress1}>
                <Text style={{textAlign: 'center'}}>User {'\n'}Information</Text>
            </TouchableOpacity>
            <View style={{flex: 0.03, backgroundColor:'black'}}></View>
            <TouchableOpacity style={{flex: 1, backgroundColor: '#E5E0FF'}} onPress={props.onPress2}>
                <Text style={{textAlign: 'center'}}> Events {'\n'}Hosted</Text>
            </TouchableOpacity>
            <View style={{flex: 0.03, backgroundColor:'black'}}></View>
            <TouchableOpacity style={{flex: 1, backgroundColor: '#E5E0FF'}} onPress={props.onPress3}>
                <Text style={{textAlign: 'center'}}>Events {'\n'}Attended</Text>
            </TouchableOpacity>
        </View>
        
    );
};

export default SplitButton;
