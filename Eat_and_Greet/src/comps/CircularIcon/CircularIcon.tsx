import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../style';
import localstyles from './style';

interface CircularIconProps {
  title: string;
  buttonSize: number;
}

const CircularIcon = ({ title, buttonSize } : CircularIconProps) => {
    return (
        <View style={[localstyles.button, { width: buttonSize, height: buttonSize }]}>
            <Text>{title}</Text>
        </View>
    );
};

export default CircularIcon;
