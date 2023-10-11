import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../style';
import localstyles from './style';

interface CircularButtonProps {
  onPress: () => void;
  title: string;
  buttonSize: number;
}

const CircularButton = ({ onPress, title, buttonSize } : CircularButtonProps) => {
    return (
        <TouchableOpacity style={[localstyles.button, { width: buttonSize, height: buttonSize }]} onPress={onPress}>
            <Text style={styles.ButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CircularButton;
