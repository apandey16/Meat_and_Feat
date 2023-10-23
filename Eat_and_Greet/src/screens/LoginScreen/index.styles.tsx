import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginScreenStyles = StyleSheet.create({
    OuterBox: {
        height: 0.35 * height,
        width: 0.75 * width,
        justifyContent: 'center',
        marginTop: 0.02 * height
    },
    InnerBox: {
        height: 0.30 * height,
        width: 0.65 * width,
        justifyContent: 'space-evenly'
    },
    SignInSectionContainer: {
        width: '100%',
        justifyContent: 'center',
    },
    SignInSectionContainer2: {
        width: '100%',
        justifyContent: 'center',
        top: '-10%'
    },
    SubHeaderText: {
        alignSelf: 'flex-start',
        marginLeft: 0,
        left: '10%'
    },
    SecondaryOptionsContainer: {
        width: '100%'
    },
});


export default LoginScreenStyles;