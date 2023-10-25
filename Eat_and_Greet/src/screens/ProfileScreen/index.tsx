import React, {useState} from 'react';
import { Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Toolbar } from '../../comps/Toolbar/toolbar';
import ChooseImageButton from "../../comps/ChooseImageButton/ChooseImageButton";
import styles from '../../style';
import localstyles from './style';
import SplitButton from '../../comps/SplitButtons/SplitButton';
import UserInformation from '../../comps/UserInformation/UserInformation';

function ProfileScreen() {
  const [visibleState, setVisibleState] = useState(0);

  const toggleUserInfoVisibility = () => {
    setVisibleState(0);
  }

  const toggleEventsAttendedVisibility = () => {
    setVisibleState(1);
  }

  const toggleEventsHostedVisibility = () => {
    setVisibleState(2);
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
                {visibleState == 0 ? <UserInformation></UserInformation> : <View/> }
                {visibleState == 1 ? <Text> woohoo </Text> : <View/>}
                {visibleState == 2 ? <Text> yeah boy </Text> : <View/>}
            </View> 
          </View> 
        </ScrollView>
        <Toolbar />
      </View>
    );
}

export default ProfileScreen;