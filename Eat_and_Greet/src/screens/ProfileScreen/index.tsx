import React, {useState} from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Toolbar } from '../../comps/Toolbar/toolbar';
import ChooseImageButton from "../../comps/ChooseImageButton/ChooseImageButton";
import styles from '../../style';
import SplitButton from '../../comps/SplitButtons/SplitButton';
import UserInformation from '../../comps/UserInformation/UserInformation';

function ProfileScreen() {
  const [UserInfoVisible, setUserInfoVisible] = useState(true);
  const [EventsHostedVisible, setEventsHostedVisible] = useState(false);
  const [EventsAttendedVisible, setEventsAttendedVisible] = useState(false);

  const toggleUserInfoVisibility = () => {
    setUserInfoVisible(true);
    setEventsAttendedVisible(false);
    setEventsHostedVisible(false);
  }

  const toggleEventsAttendedVisibility = () => {
    setUserInfoVisible(false);
    setEventsAttendedVisible(true);
    setEventsHostedVisible(false);
  }

  const toggleEventsHostedVisibility = () => {
    setUserInfoVisible(false);
    setEventsAttendedVisible(false);
    setEventsHostedVisible(true);
  }

    return (
      <View style={styles.ScreenContainer}>
        <ScrollView>
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
                    <TouchableOpacity style={localstyles.EditButtonsContainer}>
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
                  <Text style={styles.CenterText}> John Doe </Text>
                  <Text style={[styles.CenterText, localstyles.BottomMargin]}> @JohnDoe </Text>
                  <Text style={localstyles.SmallPadding}>This is my profile description, I love doing things and meeting people! </Text>
                </View>
              </View>
            </View>
            

            <View id="Interest Level" style={localstyles.InterestContainer}>
              <SplitButton onPress1={toggleUserInfoVisibility} onPress2={toggleEventsHostedVisibility} onPress3={toggleEventsAttendedVisibility}></SplitButton>
                {UserInfoVisible ? <UserInformation></UserInformation> : <View/> }
                {EventsHostedVisible ? <Text> woohoo </Text> : <View/>}
                {EventsAttendedVisible ? <Text> yeah boy </Text> : <View/>}
            </View> 
          </View> 
        </ScrollView>
        <Toolbar />
      </View>
    );
}

const localstyles = StyleSheet.create({
  InnerContainer: {
    flex: 1, 
    flexDirection: 'column',
    backgroundColor:'#8EA7E9', 
    margin: 10, 
    minWidth: "93.5%",
  },
  TopContainer: {
    flex: 1, 
    flexDirection: 'row', 
    margin: 5, 
    padding: 5
  },
  EditButtonsContainer: {
    height: 30, 
    minWidth: 'auto',
    width:80, 
    backgroundColor: '#E5E0FF', 
    borderRadius: 10, 
    alignSelf: 'flex-start', 
    shadowOffset: { width: 2, height: 2 }, 
    shadowColor: '#000',
    shadowOpacity: 0.5,
  },
  EditButtonText: {
    textAlign: 'center',
    lineHeight: 30
  },
  TopRightDivider: {
    flexDirection: 'column', 
    minWidth: '70%'
  },
  SmallMargin: {
    marginLeft: 10
  },
  TopRightSideTop: {
    flex: 1, 
    flexDirection: 'row', 
    minWidth: "70%"
  },
  FriendText: {
    textAlign: 'center', 
    color: 'white', 
    shadowOffset: { width: 2, height: 2 }, 
    shadowColor: '#000',
    shadowOpacity: 0.5
  },
  DescriptionContainer: {
    flex: 2.5, 
    margin : 5
  },
  DescriptionContainerOuter: {
    flex: 1, 
    backgroundColor:'#E5E0FF', 
    margin: 10, 
    width: "80%", 
    alignSelf: 'center', 
    borderRadius: 10
  },
  DescriptionContainerInner: {
    flex: 1, 
    flexDirection: 'column', 
    backgroundColor:'#FFF2F2', 
    margin: 10, 
    width: "90%", 
    alignSelf: 'center', 
    borderRadius: 10
  },
  InterestContainer: {
    flex: 4, 
    flexDirection: 'column', 
    margin: 5, 
    backgroundColor: '#E5E0FF'
  },
  BottomMargin: {
    marginBottom: 10
  },
  SmallPadding: {
    padding: 5
  }
});


export default ProfileScreen;