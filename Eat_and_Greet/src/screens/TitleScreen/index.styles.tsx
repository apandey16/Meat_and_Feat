import { StyleSheet, Dimensions } from 'react-native';

const { width} = Dimensions.get('window');

const LoginStyles = StyleSheet.create({
    logoStyles: {
        right:5,
        height: width,
        width: width,
        justifyContent:'center'
    }
});

export default LoginStyles;