import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import localstyles from './index.styles';

interface CircularButtonProps {
  onPress: () => void;
  textLine1: string;
  textLine2 ?: string;
  fontSize ?: number;
}

const CircularButton = ({ onPress, textLine1, textLine2, fontSize} : CircularButtonProps) => {
    return (
        <TouchableOpacity style={[localstyles.button]} onPress={onPress}>
            <Text style={[localstyles.ButtonText, {fontSize: fontSize}]}>{textLine1}</Text>
            {textLine2 && <Text style={[localstyles.ButtonText, {fontSize: fontSize}]}>{textLine2}</Text>}
        </TouchableOpacity>
    );
};

export default CircularButton;