import { StyleSheet } from 'react-native';

const ToolbarStyles = StyleSheet.create({
    iconSize: {
        width: 45,
        height: 45,
        flexShrink: 0,
        margin: 4,
      },
    root: {
      width: '100%',
      height: 78,
      flexShrink: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      },
    background: {
      width: '100%',
      height: 60,
      flexShrink: 0,
      borderWidth: 1,
      borderColor: '#000',
      borderStyle: 'solid',
      backgroundColor: '#8EA7E9',
      position: 'absolute',
      justifyContent: 'space-between',
      flexDirection: 'row',
      }
    });

export default ToolbarStyles;