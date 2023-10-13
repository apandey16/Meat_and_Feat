import { Dimensions, StyleSheet, PixelRatio } from 'react-native';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

const HomePageButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: '#E5E0FF',
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
        width: 150,
        height: 150,
        borderRadius: 75
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

export default HomePageButtonStyles;