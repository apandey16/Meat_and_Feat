import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import RoundedHomeButton from '../../comps/RoundedHomeButton/RoundedHomeButton';

import styles from '../../style';

function LoginScreen() {
    const navigation = useNavigation();

    return (
      <View style={styles.ContentContainer}>
        <StatusBar style="auto" />
        <RoundedHomeButton name="Home" onPress={() => navigation.navigate('Home')}/>
        <RoundedHomeButton name="Login" onPress={() => navigation.navigate('Login')}/>
        <RoundedHomeButton name="Onboading" onPress={() => navigation.navigate('Onboarding')}/>
        <RoundedHomeButton name="Chats" onPress={() => navigation.navigate('Chats')}/>
        <RoundedHomeButton name="Post Event" onPress={() => navigation.navigate('Post Event')}/>
        <RoundedHomeButton name="Browse Event" onPress={() => navigation.navigate('Browse Event')}/> 
        <RoundedHomeButton name="View Event" onPress={() => navigation.navigate('View Event')}/>  
        <RoundedHomeButton name="Settings" onPress={() => navigation.navigate('Settings')}/>  
      </View>
    );
}

export default LoginScreen;