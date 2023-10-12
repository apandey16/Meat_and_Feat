import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import localstyles from './style';

interface CircularButtonProps {
  onPress: () => void;
  title: string;
  buttonSize: number;
  borderRadius ?: number;
}

const CircularButton = ({ onPress, title, buttonSize, borderRadius } : CircularButtonProps) => {
    return (
        <TouchableOpacity style={[localstyles.button, { width: buttonSize, height: buttonSize, borderRadius: borderRadius}]} onPress={onPress}>
            <Text style={localstyles.ButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CircularButton;
