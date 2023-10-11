import { StyleSheet, Button, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import CornerButton from '../../../comps/Toolbar/CornerButton';

import styles from '../../../style';
import LoginStyles from './index.styles';

function LoginScreen() {
    const navigation = useNavigation();

    return (
      <View style={styles.ScreenContainer}>
        <StatusBar style="auto" />
        <Image style={LoginStyles.logoStyles} source={require('../../../assets/images/logo.png')}/>
        <CornerButton name="Log In" top="5%" onPressFunc={() => navigation.navigate('Home')}/>
        <CornerButton name="Make Account" top="6%" onPressFunc={() => navigation.navigate('Onboarding')}/>
      </View>
    );
}

export default LoginScreen;