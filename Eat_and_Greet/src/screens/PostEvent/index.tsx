import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import { StatusBar } from "expo-status-bar";

import { useRoute } from "@react-navigation/native";

import { Toolbar } from "../../comps/Toolbar/toolbar";
import RoundedButton from "../../comps/RoundedButton/RoundedButton";
import GrowingTextbox from "../../comps/GrowingTextbox/textbox";
import TextBox from "../../comps/Textbox/textbox";
import NumberInput from "../../comps/NumberInput";
import UserManager from "../../logic/UserManager";
import SpaceManager from "../../logic/SpaceManager";
import styles from "../../style";
import postStyle from "./index.styles";
import EventManager from "../../logic/EventManager";
import Event from "../../logic/event";


export default function PostEvent() {
  const userController = new UserManager();
  
  const spaceController = new SpaceManager();
  const route = useRoute();
  const forumName : string = route.params?.forumName;
  const eventController = new EventManager(forumName, userController.getEmail()!);
  const [title, setTitle] = useState("");
  const [dateOfEvent, setDateOfEvent] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [description, setDescription] = useState("");
  const [spots, setSpots] = useState("");
  let host = "";

  const getHost = async() => {
    host = await userController.getUser(userController.getEmail()!);
  }

  getHost();

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
      <RoundedButton name="Post Event" onPress={() => spaceController.implementAddPost(eventController, new Event({Category : forumName, Date : dateOfEvent, StartTime : startTime.toTimeString().split(' ')[0], EndTime : endTime.toTimeString().split(' ')[0], Host: host, Title : title, id :-1, description : description, spots : spots, participants : []}))} />
      <Toolbar />
    </View>
  );
}
