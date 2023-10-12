import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import RoundedHomeButton from '../../comps/RoundedHomeButton/RoundedHomeButton';

import LoginStyles from './index.styles';
import styles from '../../style';

function LoginScreen() {
    const navigation = useNavigation();

    return (
      <View style={styles.ContentContainer}>
        <StatusBar style="auto" />
        <Image style={LoginStyles.logoStyles} source={require('../../../assets/images/logo.png')}/>
        <RoundedHomeButton name="Log In" top="5%" onPress={() => navigation.navigate('Home')}/>
        <RoundedHomeButton name="Make Account" top="6%" onPress={() => navigation.navigate('Onboarding')}/>
      </View>
    );
}

export default LoginScreen;