import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginScreenStyles = StyleSheet.create({
    LineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    DisplayText: {
        fontFamily: 'Courier New',
        marginLeft: width * 0.075,
        marginRight: width * 0.075,
        fontWeight:'bold',
        alignSelf: 'center',
        textAlign:'center', 
        position: 'relative',
    },
    Line: {
        flex: 1,
        height: height * 0.002,
        backgroundColor: 'black',
    },
    TwoDisplayTextContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default LoginScreenStyles;