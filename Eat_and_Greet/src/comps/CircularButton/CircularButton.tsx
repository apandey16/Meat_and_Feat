import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from '../../style';

//<CircularButton onPress={Functionality} title="Text" buttonSize={int}/>
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

const localstyles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: '#E5E0FF', 
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    shadowOffset: { width: 2, height: 2 }, 
    shadowColor: '#000',
    shadowOpacity: 0.5, 
  }
});

export default CircularButton;
