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

function ProfileScreen() {
  const route = useRoute();
  const visibleScreen : number = route.params?.visibleScreen;
  const [visibleState, setVisibleState] = useState(visibleScreen);
  const [attendedData, setAttendedData] = useState([createDefaultPostData()]);
  const [hostedData, setHostedData] = useState([createDefaultPostData()]);
  const [userName, setUserName] = useState("Name Loading");
  const userController = new UserManager();
  const eventController = new EventManager("All");
  const navigation = useNavigation();
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
    setUserName(await userController.getUser());
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
                  <View id="Edit Profile Button" style={[styles.FlexOne, localstyles.SmallMargin]}>
                    <TouchableOpacity style={localstyles.EditButtonsContainer}>
                      <Text style={localstyles.EditButtonText}>Edit Profile</Text>
                    </TouchableOpacity>
                  </View>
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
                  <Text style={localstyles.SmallPadding}>This is my profile description, I love doing things and meeting people! </Text>
                </View>
              </View>
            </View>
            

            <View id="Interest Level" style={localstyles.InterestContainer}>
              <SplitButton onPress1={toggleUserInfoVisibility} onPress2={toggleEventsHostedVisibility} onPress3={toggleEventsAttendedVisibility}></SplitButton>
                {visibleState == 0 ? <UserInformation></UserInformation> : <View/> }
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