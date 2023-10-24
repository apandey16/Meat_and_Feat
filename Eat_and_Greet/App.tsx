import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import BasicInfo from './src/screens/OnboardingScreens/basicInfo';
import Confirmation from './src/screens/OnboardingScreens/confirmation';
import IdVerify from './src/screens/OnboardingScreens/idVerify';
import SelectInterests from './src/screens/OnboardingScreens/selectInterests';
import EmailVerify from './src/screens/OnboardingScreens/emailVerify';
import ForumsScreen from "./src/screens/ForumsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SearchScreen from "./src/screens/SearchScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import ViewEventScreen from "./src/screens/ViewEventScreen";
import ChatsPage from "./src/screens/ChatsPage/index";
import ExampleChatScreen from "./src/screens/ExampleChatScreen";
import PostEvent from "./src/screens/EventScreens/post";
import BrowseEvent from "./src/screens/EventScreens/browse";
import Temp from "./src/screens/Temp/index";

import HeaderBackButton from "./src/comps/HeaderBackButton";

import {navHeaderStyles} from "./src/style";

const stackArray = [ { name: "Login", comp: LoginScreen},
                     { name: "Onboarding", comp: OnboardingPagesNavigation},
                     { name: "Home", comp: HomeScreen}, 
                     { name: "Forums", comp: ForumsScreen}, 
                     { name: "Profile", comp: ProfileScreen}, 
                     { name: "Search", comp: SearchScreen}, 
                     { name: "Settings", comp: SettingsScreen}, 
                     { name: "Chats", comp: ChatsPage}, 
                     { name: "Example Chat", comp: ExampleChatScreen}, 
                     { name: "Post Event", comp: PostEvent},
                     { name: "Browse Event", comp: BrowseEvent},
                     { name: "View Event", comp: ViewEventScreen},
                     {name: "Dev Page", comp: Temp}];

const onboardingStackArray = [ { name:"Basic Info", comp: BasicInfo },
                               { name: "Confirmation", comp: Confirmation },
                               { name: "ID Verification", comp: IdVerify },
                               { name:"Select Interests", comp: SelectInterests },
                               { name: "Email Verification", comp: EmailVerify } ];

const Stack = createNativeStackNavigator();
const OnboardingNavigation = createNativeStackNavigator();

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
