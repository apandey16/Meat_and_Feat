import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import ForumsScreen from "./src/screens/ForumsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SearchScreen from "./src/screens/SearchScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

import HeaderBackButton from "./src/comps/HeaderBackButton";

import { navHeaderStyles } from "./src/style";

const stackArray = [ { name: "Login", comp: LoginScreen},
                     { name: "Onboarding", comp: OnboardingScreen},
                     { name: "Home", comp: HomeScreen}, 
                     { name: "Forums", comp: ForumsScreen}, 
                     { name: "Profile", comp: ProfileScreen}, 
                     { name: "Search", comp: SearchScreen}, 
                     { name: "Settings", comp: SettingsScreen},  ];

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...navHeaderStyles,
          headerBackTitleVisible: true,
          headerLeft: () => <HeaderBackButton />,
        }}
      >
        {stackArray.map((stackObj) => (
          <Stack.Screen name={stackObj.name} component={stackObj.comp} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
