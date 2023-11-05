import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { db } from "../../firebase/config";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

import styles from "../../style";
import postStyle from "./index.styles";

import { Toolbar } from "../../comps/Toolbar/toolbar";
import RoundedButton from "../../comps/RoundedButton/RoundedButton";
import TextBox from "../../comps/Textbox/textbox";

export default function PostEvent() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  let inputs = [title, category, eventDate, startTime, endTime];
  var missing = new Array();

  const addPostToDB = async () => {
    inputs.forEach( function (input) {
      if(input.length <= 0){
        missing.push(input.toString);
      }
    }
    ) 
    if (missing.length == 0) {
      try {
        const querySnapshot = await getDocs(
          query(
            collection(db, "Events"),
            where("Title", "==", title),
            where("Category", "==", category),
            where("Date", "==", eventDate)
          )
        );

        if (!querySnapshot.empty) {
          Alert.alert("This Event is Already Happening Today");
        } else {
          await addDoc(collection(db, "Events"), {
            Category: category,
            Date: eventDate,
            EndTime: endTime,
            Host: "RobV",
            StartTime: startTime,
            Title: title,
          });
        }
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      Alert.alert("Event Posting Is Missing The Following Data: " + missing.toString);
    }
  };

  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <StatusBar style="auto" />
      <SafeAreaView style={postStyle.InfoContainer}>
        <View style={postStyle.TitleCategoryContainer}>
          <Text style={postStyle.LabelText}> Title {"\n"}</Text>
          <TextBox
            placeholder="Enter Title Here..."
            top={"-80%"}
            height={"50%"}
            width={"90%"}
            onTextChange={setTitle}
          />
        </View>
        <View style={postStyle.TitleCategoryContainer}>
          <Text style={postStyle.LabelText}> Category {"\n"}</Text>
          <TextBox
            placeholder="Enter Category Here..."
            top={"-80%"}
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
          <Text style={postStyle.LabelText}> Date & Time {"\n"}</Text>
          <TextBox
            placeholder="Enter Date..."
            top={"-30%"}
            height={"20%"}
            width={"90%"}
            onTextChange={setEventDate}
          />
          <TextBox
            placeholder="Enter Start Time..."
            top={"-38%"}
            height={"20%"}
            width={"90%"}
            onTextChange={setStartTime}
          />
          <TextBox
            placeholder="Enter End Time..."
            top={"-46%"}
            height={"20%"}
            width={"90%"}
            onTextChange={setEndTime}
          />
        </View>
      </SafeAreaView>
      <RoundedButton name="Post Event" top="-2%" onPress={addPostToDB} />
      <Toolbar />
    </SafeAreaView>
  );
}
