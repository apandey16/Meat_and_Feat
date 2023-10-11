import { View } from 'react-native';
import IconButton from './iconButton';
import styles from './style';
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

