import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { Toolbar } from '../../comps/Toolbar/toolbar';
import HomePageButton from '../../comps/HomePageButton';

import styles from '../../style';
import localStyles from './index.styles';

function HomeScreen() {
  const navigation = useNavigation();
  
    return (
      <View style={styles.ScreenContainer}>
        <View style={styles.ContentContainer}>
          <StatusBar style="auto" />
          <View style={localStyles.ButtonLine}>
            <HomePageButton onPress={() => navigation.navigate('Forums')}
                          textLine1='Subscribed'
                          textLine2='Forums'
                          fontSize={24}
            />
            <HomePageButton onPress={() => navigation.navigate('Search')}
                          textLine1='Find'
                          textLine2='Forums'
                          fontSize={40}
            />
          </View>
          <View style={localStyles.ButtonLine}>
            <HomePageButton onPress={() => null}
                          textLine1='My'
                          textLine2='Events'
                          fontSize={40}
            />
            <HomePageButton onPress={() => navigation.navigate('Chats')}
                          textLine1='My'
                          textLine2='Chats'
                          fontSize={40}
            />
          </View>
          <View style={localStyles.ButtonLine}>
            <HomePageButton onPress={() => navigation.navigate('Profile')}
                          textLine1='Account'
                          fontSize={40}
            />
            <HomePageButton onPress={() => navigation.navigate('Settings')}
                          textLine1='Settings'
                          fontSize={35}
            />
          </View>
        </View>
        <Toolbar />
      </View>
    );
}

export default HomeScreen;