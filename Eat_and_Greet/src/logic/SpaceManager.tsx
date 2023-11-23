import EventManager from "./EventManager";
import UserManager from "./UserManager";
import Event from "./event";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList} from 'App';

export default class SpaceManager{
    navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    implementInterest(userController : UserManager, testEmail : string, text : string){
        userController.addInterest(testEmail, text);
        this.navigation.goBack();
        this.navigation.navigate("Profile", {visibleScreen : 0, editing : 1});
    }

    implementAddPost(eventController : EventManager, eventDetails : Event){
        eventController.addPostToDB(eventDetails);
        this.navigation.goBack();

    }
}