import {StyleSheet, View } from 'react-native';
import IconButton from './iconButton';

export function Toolbar() {
  return (
    <View style={styles.root}>
      <View style={styles.background}/>
      <IconButton icon={require('./icons/back.png')}/>
      <IconButton icon={require('./icons/home.png')}/>
      <IconButton icon={require('./icons/forum.png')}/>
      <IconButton icon={require('./icons/search.png')}/>
      <IconButton icon={require('./icons/profile.png')}/>
      <IconButton icon={require('./icons/settings.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 425,
    height: 78,
    flexShrink: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  background: {
    width: 425,
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
