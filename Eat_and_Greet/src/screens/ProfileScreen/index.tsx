import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Toolbar } from '../../comps/Toolbar/toolbar';

import styles from '../../style';

function ProfileScreen() {
    return (
      <View style={styles.ScreenContainer}>
        <View style={styles.ContentContainer}>
          <StatusBar style="auto" />
          <Text>PROFILE SCREEN</Text>
        </View>
        <Toolbar />
      </View>
    );
}

export default ProfileScreen;