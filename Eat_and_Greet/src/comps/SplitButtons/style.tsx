import { StyleSheet } from 'react-native';

const SplitButtonStyles = StyleSheet.create({
    button: {
      flex: 1, 
      backgroundColor: '#E5E0FF',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    view: {
      flex: 0.03, 
      backgroundColor:'black'
    },
    fullbar: {
      flexDirection: 'row', 
      backgroundColor: 'black', 
      height: 45, 
      padding: 2
    }
});

export default SplitButtonStyles;