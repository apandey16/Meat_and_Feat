import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import BasicInfo from './src/screens/OnboardingScreens/basicInfo';
import Confirmation from './src/screens/OnboardingScreens/confirmation';
import IdVerify from './src/screens/OnboardingScreens/idVerify';
import SelectInterests from './src/screens/OnboardingScreens/selectInterests';
import EmailVerify from './src/screens/OnboardingScreens/emailVerify';

const Stack = createNativeStackNavigator();
const OnboardingNavigation = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingPagesNavigation} options={{ headerShown: true }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function OnboardingPagesNavigation(){
  return (
    <OnboardingNavigation.Navigator>
      <OnboardingNavigation.Screen name="Basic Info" component={BasicInfo} />
      <OnboardingNavigation.Screen name="Confirmation" component={Confirmation} />
      <OnboardingNavigation.Screen name="ID Verification" component={IdVerify} />
      <OnboardingNavigation.Screen name="Select Interests" component={SelectInterests} />
      <OnboardingNavigation.Screen name="Email Verification" component={EmailVerify} />
    </OnboardingNavigation.Navigator>
  );
}
