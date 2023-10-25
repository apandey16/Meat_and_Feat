import { StyleSheet } from 'react-native';

const CircularButtonStyles = StyleSheet.create({
    button: {
        borderRadius: 20,
        backgroundColor: '#FFF2F2', 
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
        shadowOffset: { width: 2, height: 2 }, 
        shadowColor: '#000',
        shadowOpacity: 0.5, 
        marginHorizontal: 5
      }
});

export default CircularButtonStyles;