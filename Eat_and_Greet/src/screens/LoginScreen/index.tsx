import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import RoundedButton from '../../comps/RoundedButton/RoundedButton';

import LoginStyles from './index.styles';
import styles from '../../style';

function LoginScreen() {
    const navigation = useNavigation();

    return (
      <View style={styles.ContentContainer}>
        <StatusBar style="auto" />
        <Image style={LoginStyles.logoStyles} source={require('../../../assets/images/logo.png')}/>
        <RoundedButton name="Log In" onPress={() => navigation.navigate('Home')}/>
        <RoundedButton name="Make Account" onPress={() => navigation.navigate('Onboarding')}/>
        <RoundedButton name="Dev Page" onPress={() => navigation.navigate('Dev Page')}/>
      </View>
    );
}

export default LoginScreen;