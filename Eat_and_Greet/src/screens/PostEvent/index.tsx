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
  const [Title, setTitle] = useState("");
  const [Category, setCategory] = useState("");
  const [Date, setDate] = useState("");
  const [StartTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");

  const addPostToDB = async () => {
    if (Title.length > 0) {
      if (Category.length > 0) {
        if (Date.length > 0) {
          if (StartTime.length > 0) {
            if (EndTime.length > 0) {
              try {
                console.log(Title, Date);
                const querySnapshot = await getDocs(
                  query(
                    collection(db, "Events"),
                    where("Title", "==", Title),
                    where("Category", "==", Category),
                    where("Date", "==", Date)
                  )
                );

                if (!querySnapshot.empty) {
                  Alert.alert("This Event is Already Happening Today");
                } else {
                  const docRef = await addDoc(collection(db, "Events"), {
                    Category: Category,
                    Date: Date,
                    EndTime: EndTime,
                    Host: "RobV",
                    StartTime: StartTime,
                    Title: Title,
                  });
                  console.log("Event Added with ID: ", docRef.id);
                }
              } catch (error) {
                console.error("Error adding document: ", error);
              }
            } else {
              Alert.alert("Please Enter an End Time");
            }
          } else {
            Alert.alert("Please Enter a Start Time");
          }
        } else {
          Alert.alert("Please Enter a Date");
        }
      } else {
        Alert.alert("Please Enter a Category");
      }
    } else {
      Alert.alert("Please Enter a Title");
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
            onTextChange={setDate}
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
