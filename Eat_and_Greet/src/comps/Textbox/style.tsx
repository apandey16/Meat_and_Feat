import { StyleSheet } from 'react-native';

const TextboxStyles = StyleSheet.create({
    container: {
      margin: 20,
      width: '90%',
      height: '25%',
      backgroundColor: '#FFFFF2',
      borderRadius: 4,
      marginBottom: 0,
      borderColor: 'black',
      borderWidth: 0.25,
      alignContent: 'center',
      justifyContent: "center",
    },
    input: {
      height: 40,
      padding: 10,
      alignContent: 'center',
    },
    placement: { 
      left: "-3%",
      top: "-15%",
      position: 'relative'
  },
  sizing: {
      width: "90%",
      height: "25%", 
  }
  });

export default TextboxStyles;