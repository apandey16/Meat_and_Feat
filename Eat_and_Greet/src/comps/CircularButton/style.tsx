import { StyleSheet } from 'react-native';

const CircularButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: '#8EA7E9', 
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
        alignSelf:'flex-start',
        marginLeft: 20,
        marginTop: 15,
        marginRight: 20,
        shadowOffset: { width: 2, height: 2 }, 
        shadowColor: '#000',
        shadowOpacity: 0.5, 
      },
      ButtonText:{
        fontFamily: 'Courier New',
        fontSize:20,
        fontWeight:'bold',
        color: '#000',
        alignContent: 'center',
        justifyContent: 'center',
      }
});

export default CircularButtonStyles;