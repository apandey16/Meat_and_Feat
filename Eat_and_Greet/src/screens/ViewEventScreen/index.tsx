import React, { useEffect, useState } from "react";
import { Image, View, Text, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";

import { StatusBar } from 'expo-status-bar';

import { db } from "../../firebase/config";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { Toolbar } from '../../comps/Toolbar/toolbar';
import RoundedButton from '../../comps/RoundedButton/RoundedButton';

import styles from '../../style';
import localstyles from './style';


interface EventData {
  Category: string;
  Date: string;
  EndTime: string;
  Host: string;
  StartTime: string;
  Title: string;
  id: number;
  description: string;
  spots: number;
  participants: string[];
}

const postData = 
  {
    Category: "",
    Date: "",
    EndTime: "",
    Host: "",
    StartTime: "",
    Title: "Loading Events Now",
    id: -1,
    description: "",
    spots: -1,
    participants: [""]
  }
;

const getEventData = async (uid : string): Promise<EventData> => {
  try {
    const docSnapshot = await getDoc(doc(db, "Events", uid));
    let fetchedEventData: EventData = docSnapshot.data() as EventData;
    return fetchedEventData;
  } catch (error) {
    console.error("Error Getting Data From DB: ", error);
    return postData;
  }
};

function ViewEventScreen() {

  const route = useRoute();
  const id : number = route.params?.id;

  const navigation = useNavigation();

  const user = getAuth().currentUser?.email;

  const [data, setData] = useState(postData);

  const fetchData = async () => {
    try {
      const data = await getEventData(id.toString());
      setData(data);
    } catch (error) {
      console.error("Error in Fetching Data: ", error);
    }
  };

  const handleJoin = async () => {

    if(user != null && !data?.participants.includes(user)){

      if(data?.spots > data?.participants.length) {
        let participants = data?.participants;
        participants.push(user);

        try {   
          await updateDoc(doc(db, "Events", id.toString()),  { participants: participants });
          Alert.alert("Event Joined Successfully!");
          navigation.goBack();

      } catch (error) {
        console.error("Error adding document: ", error);
        Alert.alert("There Was An Issue Joining This Event, Please Try Again Later")
      }

      }else{
        Alert.alert("This Event Is Already Full!");
        navigation.goBack();
      }
    }else{
      Alert.alert("User Is Already Enrolled In This Event");
      navigation.goBack();
    }
 }

  useEffect(() => {
    fetchData();
  }, []);

    return (
      <View style={styles.ScreenContainer}>
        <View style={styles.ContentContainer}>
          <StatusBar style="auto" />
          <View style={localstyles.outerContainer}>
            <View style={localstyles.innerContainer}>
              <View style={localstyles.eventNameContainerStyling}>
                <Text style={localstyles.eventNameTextStyling}> {data?.Title} </Text>
              </View>
              <View style={localstyles.imageContainerStyling}>
                <View style={localstyles.imageStyling}>
                  {/* Eventually will want to switch this to a box that an image will fill, no clue how to do that */}
                  <Image style={localstyles.pngStyling}source={require('../../../assets/images/uploadImage.png')}/>
                </View>
              </View>
              <View style={localstyles.descriptionContainerStyling}>
                <Text style={localstyles.descriptionTextStyling}>Date: {data?.Date} </Text>
                <Text style={localstyles.descriptionTextStyling}>Time: {data?.StartTime} - {data?.EndTime} </Text>
                <Text style={localstyles.descriptionTextStyling}>Host Name: {data?.Host} </Text>
                <Text style={localstyles.descriptionTextStyling}>Spots Filled: {(data?.participants??[]).length}/{data?.spots} </Text>
                <Text style={localstyles.descriptionTextStyling}>Description: {data?.description} </Text>
              </View>
            </View>
          </View>
        <RoundedButton 
          name='Join Event' 
          width={'80%'}
          onPress={handleJoin}/>
        </View>
        <Toolbar />
      </View>
    );
}

export default ViewEventScreen;