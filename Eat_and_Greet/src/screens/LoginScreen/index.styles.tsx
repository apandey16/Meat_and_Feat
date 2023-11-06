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
        top: '-5%'
    },
    SignInSectionContainer2: {
        width: '100%',
        justifyContent: 'center',
        top: '5%'
    },
    SubHeaderText: {
        alignSelf: 'flex-start',
        marginLeft: 0,
        left: '10%'
    },
    SecondaryOptionsContainer: {
        width: '100%'
    },
    link: {
        color: 'blue',
        marginBottom: 20,
        alignSelf: 'center',
        textAlign:'center', 
        position: 'relative',
      },
      container: {
        margin: "10%",
        bottom: '10%',
        width: '90%',
        backgroundColor: '#FFFFF2',
        borderRadius: 4,
        marginBottom: 0,
        borderColor: 'black',
        borderWidth: 0.25,
        alignContent: 'center',
        justifyContent: "center",
        alignSelf: 'center',
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
      },
});


export default LoginScreenStyles;