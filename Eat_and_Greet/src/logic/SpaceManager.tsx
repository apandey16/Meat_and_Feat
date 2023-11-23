import EventManager from "./EventManager";
import UserManager from "./UserManager";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList} from 'App';

export default class SpaceManager{
    navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    implementInterest(userController : UserManager, text : string){
        userController.addInterest(text);
        this.navigation.goBack();
        this.navigation.navigate("Profile", {visibleScreen : 0, editing : 1});
    }
}