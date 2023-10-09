import {StyleSheet, View } from 'react-native';
import IconButton from './iconButton';

export function Toolbar() {
  return (
    <View style={styles.root}>
      <View style={styles.background}/>
      <IconButton icon={require('./icons/back.png')} onPress={() => console.log('Back button pressed')}/>
      <IconButton icon={require('./icons/home.png')} onPress={() => console.log('Home button pressed')}/>
      <IconButton icon={require('./icons/forum.png')} onPress={() => console.log('Forum button pressed')}/>
      <IconButton icon={require('./icons/search.png')} onPress={() => console.log('Search button pressed')}/>
      <IconButton icon={require('./icons/profile.png')} onPress={() => console.log('Profile button pressed')}/>
      <IconButton icon={require('./icons/settings.png')} onPress={() => console.log('Settings button pressed')}/>
    </View>
  );
}

const styles = StyleSheet.create({
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
