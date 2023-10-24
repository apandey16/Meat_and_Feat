import { StyleSheet } from 'react-native';

const CircularButtonStyles = StyleSheet.create({
    button: {
        borderRadius: 50,
        backgroundColor: '#CEC8EC', 
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
        shadowOffset: { width: 2, height: 2 }, 
        shadowColor: '#000',
        shadowOpacity: 0.5, 
      }
});

export default CircularButtonStyles;