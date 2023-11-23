import React, {useEffect, useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from "@react-navigation/native";

import { Toolbar } from '../../comps/Toolbar/toolbar';
import ChooseImageButton from "../../comps/ChooseImageButton/ChooseImageButton";
import styles from '../../style';
import localstyles from './style';
import SplitButton from '../../comps/SplitButtons/SplitButton';
import UserInformation from '../../comps/UserInformation/UserInformation';
import ScrollEvents from '../../comps/ScrollEvents';
import EventManager from '../../logic/EventManager';
import createDefaultPostData from '../../logic/Factory';
import UserManager from '../../logic/UserManager';
import GrowingTextbox from '../../comps/GrowingTextbox/textbox';

function ProfileScreen() {
  const route = useRoute();
  const visibleScreen : number = route.params?.visibleScreen;
  const isEditing : number = route.params?.editing;
  const userController = new UserManager();
  const email : string = userController.getEmail() ?? "";
  const [visibleState, setVisibleState] = useState(visibleScreen);
  const [editing, setEditing] = useState(isEditing);
  const [attendedData, setAttendedData] = useState([createDefaultPostData()]);
  const [hostedData, setHostedData] = useState([createDefaultPostData()]);
  const [userName, setUserName] = useState("Name Loading");
  const [description, setDescription] = useState("Description Loading");
  const eventController = new EventManager("All", email);
  const navigation = useNavigation();
  const toggleEditingOn = () => {
    setEditing(1);
  }
  const toggleEditingOff = () => {
    setEditing(0);
    userController.addDescription(email, description);
  }

  const toggleUserInfoVisibility = () => {
    setVisibleState(0);
  }

  const toggleEventsAttendedVisibility = () => {
    setVisibleState(1);
  }

  const toggleEventsHostedVisibility = () => {
    setVisibleState(2);
  }

  const dataSetter = async () => {
    setAttendedData(await eventController.fetchData("Attended Events"));
    setHostedData(await eventController.fetchData("Hosted Events"));
    setUserName(await userController.getUser(email));
    setDescription(await userController.getDescription(email));
   }
   
   useEffect(() => {
    dataSetter();
  }, []);

    return (
      <View style={styles.ScreenContainer}>
          <StatusBar style="auto" />
          <View id="General Border" style={localstyles.InnerContainer}>

            <View id="Top Level" style={localstyles.TopContainer}>
              <View id="Profile Pic" style={styles.FlexOne}>
                <ChooseImageButton color="#E5E0FF" buttonSize={80}/>
              </View>
              <View id="Right Side Divider" style={localstyles.TopRightDivider}>
                <View id="Right Side Top" style={localstyles.TopRightSideTop}>
                  {editing == 0 ? 
                  <View id="Edit Profile Button" style={[styles.FlexOne, localstyles.SmallMargin]}>
                    <TouchableOpacity style={localstyles.EditButtonsContainer} onPress={toggleEditingOn}>
                      <Text style={localstyles.EditButtonText}>Edit Profile</Text>
                    </TouchableOpacity>
                  </View>
                  :
                  <View id="Edit Profile Button" style={[styles.FlexOne, localstyles.SmallMargin]}>
                    <TouchableOpacity style={localstyles.EditButtonsContainer} onPress={toggleEditingOff}>
                      <Text style={localstyles.EditButtonText}>Save Profile</Text>
                    </TouchableOpacity>
                  </View>}
                  <View id="Settings Button" style={styles.FlexOne}>
                    <TouchableOpacity style={localstyles.EditButtonsContainer} onPress={() => navigation.navigate("Settings")}>
                      <Text style={localstyles.EditButtonText}>Settings</Text>
                    </TouchableOpacity>                  
                  </View>
                </View>
                <View id="RightSideBottom" style={styles.FlexOne}>
                  <Text style={localstyles.FriendText}>33 Friends</Text>
                </View>
              </View>
            </View>
            
            <View id="Description Level" style={localstyles.DescriptionContainer}>
              <View id="Outer Container" style={localstyles.DescriptionContainerOuter}>
                <View id="Inner Container" style={localstyles.DescriptionContainerInner}>
                  <Text style={styles.CenterText}> {userName} </Text>
                  {editing == 0 ? <Text style={localstyles.SmallPadding}>{description}</Text> : <GrowingTextbox
            placeholder={description}
            height={"80%"}
            width={"90%"}
            onTextChange={setDescription}
            onProfile={true}
        />}
                </View>
              </View>
            </View>
            

            <View id="Interest Level" style={localstyles.InterestContainer}>
              <SplitButton onPress1={toggleUserInfoVisibility} onPress2={toggleEventsHostedVisibility} onPress3={toggleEventsAttendedVisibility}></SplitButton>
                {visibleState == 0 ? <UserInformation editing={editing == 1}/> : <View/> }
                {visibleState == 1 ? <View style={{paddingLeft:7}}><ScrollEvents inputData={attendedData} canJoin={true} currentPage="Profile" refreshParameters={{visibleScreen : 1}}></ScrollEvents></View>
 : <View/>}
                {visibleState == 2 ? <View style={{paddingLeft:7}}><ScrollEvents inputData={hostedData} canJoin={true} currentPage="Profile" refreshParameters={{visibleScreen : 2}}></ScrollEvents></View>
 : <View/>}
            </View> 
          </View> 
        <Toolbar />
      </View>
    );
}

export default ProfileScreen;