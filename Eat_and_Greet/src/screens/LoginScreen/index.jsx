import { StyleSheet, Button, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import CornerButton from '../../../comps/Toolbar/CornerButton';

function LoginScreen() {
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image style={styles.temp} source={require('../../../assets/images/logo.png')}/>
        <CornerButton name="Log In" top="5%" onPressFunc={() => navigation.navigate('Home')}/>
        <CornerButton name="Make Account" top="6%" onPressFunc={() => navigation.navigate('Onboarding')}/>
      </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7286D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    right:5,
    height:400,
    width:400,
    justifyContent:'center'
  }
});