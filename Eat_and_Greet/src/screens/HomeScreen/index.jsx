import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Toolbar } from '../../../comps/Toolbar/toolbar';
import TextBox from '../../../comps/Toolbar/textbox';

import styles from '../../../style';

function HomeScreen() {
    return (
      <View style={styles.ScreenContainer}>
        <Toolbar />
        <StatusBar style="auto" />
        <TextBox placeholder="Type ..." />
        <Text>Home Screen Bruh</Text>
        <Text>Welcome to our app!</Text>
      </View>
    );
}

export default HomeScreen;