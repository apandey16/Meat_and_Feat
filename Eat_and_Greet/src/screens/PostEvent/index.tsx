import React, { useState } from "react";
import { Text, View, Image, Alert } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import { StatusBar } from "expo-status-bar";

import { db } from "../../firebase/config";
import { collection, setDoc, getDocs, updateDoc, query, where, doc, QuerySnapshot } from "firebase/firestore";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getAuth } from "firebase/auth";

import { Toolbar } from "../../comps/Toolbar/toolbar";
import RoundedButton from "../../comps/RoundedButton/RoundedButton";
import GrowingTextbox from "../../comps/GrowingTextbox/textbox";
import TextBox from "../../comps/Textbox/textbox";
import NumberInput from "../../comps/NumberInput";
import userManager from "../../logic/userManager";

import styles from "../../style";
import postStyle from "./index.styles";



export default function PostEvent() {
  const userController = new userManager();
  const route = useRoute();
  const forumName : number = route.params?.forumName;
  const [title, setTitle] = useState("");
  const [dateOfEvent, setDateOfEvent] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [spots, setSpots] = useState("");

  const navigation = useNavigation();

  
  let inputs = [title, dateOfEvent, startTime, endTime, description];
  const inputsAsString = ["Title", "Event Date", "Start Time", "End Time", "Description"];
  let host = "";

  const getHost = async() => {
    host = await userController.getUser();
  }

  getHost();
  const getNumberOfEventsData = async (numberOfEventsSnapshot : QuerySnapshot): Promise<number> => {
    try {
      let fetchedEventData: number = -1;
      numberOfEventsSnapshot.forEach((doc) => {
        fetchedEventData = (doc.data().numberOfEvents as number);
      });
      return fetchedEventData;
    } catch (error) {
      console.error("Error Getting Data From DB: ", error);
      return -1;
    }
  };

  const addPostToDB = async () => {
    let missing = new Array();
    for (let i = 0; i < inputs.length; i++){
      if(inputs[i].length <= 0){
        missing.push(inputsAsString[i])
      }
    }
    if (missing.length == 0) {
      try {
        const querySnapshot = await getDocs(
          query(
            collection(db, "Events"),
            where("Title", "==", title),
            where("Category", "==", forumName),
            where("Date", "==", dateOfEvent)
          )
        );

        if (!querySnapshot.empty) {
          Alert.alert("This Event is Already Happening Today");
        } else {
          const numberOfEventsSnapshot = await getDocs(collection(db, "Number of Events"));
          let uid : number = await getNumberOfEventsData(numberOfEventsSnapshot) + 1;
          await setDoc(doc(db, "Events", uid.toString()), {
            Category: forumName,
            Date: dateOfEvent,
            EndTime: endTime.toTimeString().split(' ')[0],
            Host: host,
            StartTime: startTime.toTimeString().split(' ')[0],
            Title: title,
            id: uid,
            description: description,
            spots: spots,
            participants: [getAuth().currentUser?.email]
          });
          await updateDoc(doc(db, "Number of Events", "Counter"),  { numberOfEvents: uid });
          Alert.alert("Post Successfully Added!");
          navigation.goBack();
        }
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      Alert.alert("Event Posting Is Missing The Following Data: " + missing.toString());
    }
  };

  const date = (event: any, selectedDate: Date) => {
    setDateOfEvent(selectedDate);
  };

  const startingTime = (event: any, selectedTime: any) => {
    setStartTime(selectedTime);
  } 

  const endingTime = (event: any, selectedTime: any) => {
    setEndTime(selectedTime);
  }

  return (
    <View style={[styles.ScreenContainer]}>
      <StatusBar style="auto" />
      <View style={[postStyle.InfoContainer, {height: "80%"}]}>
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center"}}>
        <View style={postStyle.TitleCategoryContainer}>
          <Text style={postStyle.LabelText}> Title {"\n"}</Text>
          <TextBox
            placeholder="Enter Title Here..."
            top={"-60%"}
            height={"50%"}
            width={"90%"}
            onTextChange={setTitle}
          />
        </View>
        <View style={postStyle.ImageContainer}>
          <Text style={postStyle.LabelText}> Image(optional) {"\n"}</Text>
          <View style={postStyle.ImageBox}>
            <Image
              source={require("../../../assets/images/uploadImage.png")}
              style={{ width: "90%", height: "90%", resizeMode: "contain" }}
            />
          </View>
        </View>
        <View style={postStyle.DateTimeContainer}>
          <Text style={[postStyle.LabelText, {alignSelf: "center", flex: 1}]}> Spots {"\n"}</Text>
            <NumberInput
              placeholder=""
              top={"-5%"}
              height={"90%"}
              width={"25%"}
              left={"25%"}
              onTextChange={setSpots}
              />
        </View>
        <View style={postStyle.DateTimeContainer}>
          
          <Text style={[postStyle.LabelText, {alignSelf: "center", flex: 1}]}> Date {"\n"}</Text>
          <DateTimePicker style={{alignSelf: "center", flex: 1}}
                    value={dateOfEvent}
                    mode='date'
                    onChange={date}
                  />
                  </View>
          <View style={postStyle.DateTimeContainer}>
          <Text style={[postStyle.LabelText, {alignSelf: "center", flex: 1}]}> Start Time {"\n"}</Text>
          <DateTimePicker style={{alignSelf: "center", flex: 1}}
                    value={startTime}
                    mode='time'
                    onChange={startingTime}
                  />
        </View>
        <View style={postStyle.DateTimeContainer}>
          <Text style={[postStyle.LabelText, {alignSelf: "center", flex: 1}]}> End Time {"\n"}</Text>
          <DateTimePicker style={{alignSelf: "center", flex: 1}}
                    value={endTime}
                    mode='time'
                    onChange={endingTime}
                  />
        </View>
        <View style={postStyle.DescriptionContainer}>
          <Text style={postStyle.LabelText}>Description</Text>
          <GrowingTextbox
            placeholder="Enter Description..."
            height={"80%"}
            width={"90%"}
            onTextChange={setDescription}
        />
        </View>
      </KeyboardAwareScrollView>
      </View>
      <RoundedButton name="Post Event" onPress={addPostToDB} />
      <Toolbar />
    </View>
  );
}
