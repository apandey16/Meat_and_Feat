import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './src/screens/HomeScreen';
import TitleScreen from './src/screens/TitleScreen';
import LoginScreen from './src/screens/LoginScreen';
import BasicInfoScreen from './src/screens/OnboardingScreens/basicInfo';
import ConfirmationScreen from './src/screens/OnboardingScreens/confirmation';
import IdVerifyScreen from './src/screens/OnboardingScreens/idVerify';
import SelectInterestsScreen from './src/screens/OnboardingScreens/selectInterests';
import EmailVerifyScreen from './src/screens/OnboardingScreens/emailVerify';
import ForumsScreen from "./src/screens/ForumsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SearchScreen from "./src/screens/SearchScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import ViewEventScreen from "./src/screens/ViewEventScreen";
import ChatsScreen from "./src/screens/ChatsPage/index";
import ExampleChatScreen from "./src/screens/ExampleChatScreen";
import PostEventScreen from "./src/screens/PostEvent";
import BrowseEventScreen from "./src/screens/BrowseEvents";
import PasswordReset from "./src/screens/LoginScreen/passwordReset";
import BrowseForumScreen from "./src/screens/BrowseForums";
import Temp from "./src/screens/Temp/index";
import MyEvents from "./src/screens/MyEvents/index";

import HeaderBackButton from "./src/comps/HeaderBackButton";

import {navHeaderStyles} from "./src/style";
import React from "react";

const stackArray = [ { name: "Welcome", comp: TitleScreen},
                     { name: "Login", comp: LoginScreen},
                     { name: "Onboarding", comp: OnboardingPagesNavigation},
                     { name: "Home", comp: HomeScreen}, 
                     { name: "Forums", comp: ForumsScreen}, 
                     { name: "Profile", comp: ProfileScreen}, 
                     { name: "Search", comp: SearchScreen}, 
                     { name: "Settings", comp: SettingsScreen}, 
                     { name: "Chats", comp: ChatsScreen}, 
                     { name: "Example Chat", comp: ExampleChatScreen}, 
                     { name: "Post Event", comp: PostEventScreen},
                     { name: "Browse Event", comp: BrowseEventScreen},
                     { name: "Browse Forums", comp: BrowseForumScreen},
                     { name: "View Event", comp: ViewEventScreen},
                     { name: "Password Reset", comp: PasswordReset},
                     {name: "Dev Page", comp: Temp},
                     {name: "My Events", comp: MyEvents}];

const onboardingStackArray = [ { name:"Basic Info", comp: BasicInfoScreen },
                               { name: "Confirmation", comp: ConfirmationScreen },
                               { name: "ID Verification", comp: IdVerifyScreen },
                               { name:"Select Interests", comp: SelectInterestsScreen },
                               { name: "Email Verification", comp: EmailVerifyScreen } ];

const Stack = createNativeStackNavigator();
const OnboardingNavigation = createNativeStackNavigator();

const headerLeftFunction = () => <HeaderBackButton />;

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...navHeaderStyles,
          headerBackTitleVisible: true,
          headerLeft: headerLeftFunction,
        }}
      >
        {stackArray.map((stackObj) => (
          <Stack.Screen name={stackObj.name} component={stackObj.comp} key={stackObj.name}/>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function OnboardingPagesNavigation(){
  return (
    <OnboardingNavigation.Navigator>
      {onboardingStackArray.map((stackObj) => (
          <OnboardingNavigation.Screen name={stackObj.name} component={stackObj.comp} key={stackObj.name}/>
        ))}
    </OnboardingNavigation.Navigator>
  );
}
