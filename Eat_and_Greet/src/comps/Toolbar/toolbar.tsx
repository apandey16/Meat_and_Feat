import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './style';
import IconButton from './iconButton';

export function Toolbar() {

  const navigation = useNavigation();

  const route = useRoute();

  const homeImg = route.name === 'Home'
    ? require('../../../assets/toolbar/white/home.png')
    : require('../../../assets/toolbar/black/home.png');

  const forumImg = route.name === 'Forums'
    ? require('../../../assets/toolbar/white/forum.png')
    : require('../../../assets/toolbar/black/forum.png');

  const profileImg = route.name === 'Profile'
    ? require('../../../assets/toolbar/white/profile.png')
    : require('../../../assets/toolbar/black/profile.png');

  const searchImg = route.name === 'Search'
    ? require('../../../assets/toolbar/white/search.png')
    : require('../../../assets/toolbar/black/search.png');

  const settingsImg = route.name === 'Settings'
    ? require('../../../assets/toolbar/white/settings.png')
    : require('../../../assets/toolbar/black/settings.png');


  return (
    <View style={styles.root}>
      <View style={styles.background}/>
      <IconButton icon={homeImg} onPress={() => navigation.navigate('Home')}/>
      <IconButton icon={forumImg} onPress={() => navigation.navigate('Forums')}/>
      <IconButton icon={searchImg} onPress={() => navigation.navigate('Search')}/>
      <IconButton icon={profileImg} onPress={() => navigation.navigate('Profile')}/>
      <IconButton icon={settingsImg} onPress={() => navigation.navigate('Settings')}/>
    </View>
  );
}

