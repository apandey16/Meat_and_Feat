import { StyleSheet, Button, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

function LoginScreen() {
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image style={styles.temp} source={require('../../../assets/images/logo.png')}/>
        {/*<CornerButton name="Log In" top="5%" alertText="Temp Text, send to log in page"/>
        <CornerButton name="Make Account" top="6%" alertText="Temp Text, send to onboarding page"/>*/}
        
        <Text>This is the login page</Text>
        <Button
            title="Press To Login"
            onPress={() => navigation.navigate('Home')}
        />
        <Button
            title="Press To Create Account"
            onPress={() => navigation.navigate('Onboarding')}
        />
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