import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Toolbar } from "../../comps/Toolbar/toolbar";

import styles from "../../style";
import React from "react";
import RoundedButton from "../../comps/RoundedButton/RoundedButton";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import postStyle from "./index.styles";
import TextBox from "../../comps/Textbox/textbox";

export default function PostEvent() {
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
          />
        </View>
        <View style={postStyle.TitleCategoryContainer}>
          <Text style={postStyle.LabelText}> Category {"\n"}</Text>
          <TextBox
            placeholder="Enter Category Here..."
            top={"-80%"}
            height={"50%"}
            width={"90%"}
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
          />
          <TextBox
            placeholder="Enter Start Time..."
            top={"-38%"}
            height={"20%"}
            width={"90%"}
          />
          <TextBox
            placeholder="Enter End Time..."
            top={"-46%"}
            height={"20%"}
            width={"90%"}
          />
        </View>
      </SafeAreaView>
      <RoundedButton name="Post Event" top="-2%" />
      <Toolbar />
    </SafeAreaView>
  );
}
