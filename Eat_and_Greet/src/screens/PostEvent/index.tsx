import React, { useState } from "react";
import { Text, View, Image, Alert, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { db } from "../../firebase/config";
import { collection, setDoc, getDocs, updateDoc, query, where, doc, QuerySnapshot } from "firebase/firestore";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from "@react-navigation/native";


import styles from "../../style";
import postStyle from "./index.styles";

import { Toolbar } from "../../comps/Toolbar/toolbar";
import RoundedButton from "../../comps/RoundedButton/RoundedButton";
import GrowingTextbox from "../../comps/GrowingTextbox/textbox";
import TextBox from "../../comps/Textbox/textbox";

import DateTimePicker from '@react-native-community/datetimepicker';



export default function PostEvent() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [dateOfEvent, setDateOfEvent] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  let inputs = [title, category, dateOfEvent, startTime, endTime, description];
  const inputsAsString = ["Title", "Category", "Event Date", "Start Time", "End Time", "Description"];


  const getNumberOfEventsData = async (numberOfEventsSnapshot : QuerySnapshot): Promise<number[]> => {
    try {
      let fetchedEventData: number[] = [];
      numberOfEventsSnapshot.forEach((doc) => {
        fetchedEventData.push(doc.data().numberOfEvents as number);
      });
      return fetchedEventData;
    } catch (error) {
      console.error("Error Getting Data From DB: ", error);
      return [];
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
            where("Category", "==", category),
            where("Date", "==", dateOfEvent.toDateString())
          )
        );

        if (!querySnapshot.empty) {
          Alert.alert("This Event is Already Happening Today");
        } else {
          const numberOfEventsSnapshot = await getDocs(collection(db, "Number of Events"));
          let uidList : number[] = await getNumberOfEventsData(numberOfEventsSnapshot);
          let uid : number = uidList[0] + 1
          await setDoc(doc(db, "Events", uid.toString()), {
            Category: category,
            Date: dateOfEvent.toDateString(),
            EndTime: endTime.toTimeString().split(' ')[0],
            Host: "RobV",
            StartTime: startTime.toTimeString().split(' ')[0],
            Title: title,
            id: uid,
            description: description
          });
          await updateDoc(doc(db, "Number of Events", "Counter"),  { numberOfEvents: uid });
          Alert.alert("Post Successfully Added!");
          navigation.navigate('Browse Event');
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
        <View style={postStyle.TitleCategoryContainer}>
          <Text style={postStyle.LabelText}> Category {"\n"}</Text>
          <TextBox
            placeholder="Enter Category Here..."
            top={"-60%"}
            height={"50%"}
            width={"90%"}
            onTextChange={setCategory}
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
