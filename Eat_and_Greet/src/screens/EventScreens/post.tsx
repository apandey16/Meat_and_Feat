import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Toolbar } from '../../comps/Toolbar/toolbar';

import styles from '../../style';
import React from 'react'
import RoundedHomeButton from '../../comps/RoundedHomeButton/RoundedHomeButton';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PostEvent() {
  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <SafeAreaView style={postStyle.InfoContainer}>
        <View style={postStyle.TitleCategoryContainer}>
          <Text style = {postStyle.LabelText}> Title {'\n'}</Text>
          <View style={postStyle.box}>
            <Text> Enter Title Here...</Text>
          </View>
        </View>
        <View style={postStyle.TitleCategoryContainer}>
          <Text style = {postStyle.LabelText}> Category {'\n'}</Text>
          <View style={postStyle.box}>
            <Text> Enter Category Here...</Text>
          </View>
        </View><View style={postStyle.ImageContainer}>
          <Text style = {postStyle.LabelText}> Image(optional) {'\n'}</Text>
          <View style={postStyle.ImageBox}/>
        </View><View style={postStyle.DateTimeContainer}>
          <Text style = {postStyle.LabelText}> Date & Time {'\n'}</Text>
          <View style={postStyle.box}>
            <Text> Pick Date</Text>
          </View>
          <View style={postStyle.box}>
            <Text> Enter Start Time...</Text>
          </View>
          <View style={postStyle.box}>
            <Text> Enter End Time...</Text>
          </View>
        </View>
      </SafeAreaView>
      <RoundedHomeButton name="Post Event" top = "-2%"/>
      <Toolbar/>
      <StatusBar style = "auto"/>   
    </SafeAreaView>
  )
}

const postStyle = StyleSheet.create({
  InfoContainer:
  {
    backgroundColor: "#8EA7E9",
    height: 550,
    width: 340,
    top: -35,
  },
  TitleCategoryContainer:
  {
    backgroundColor: "#E5E0FF",
    width: 340,
    height: 80,
    borderWidth: 10,
    borderColor: "#8EA7E9",
    bottom: 40,
  },
  ImageContainer:
  {
    backgroundColor: "#E5E0FF",
    width: 340,
    height: 240,
    borderWidth: 10,
    borderColor: "#8EA7E9",
    bottom: 50,
  },
  DateTimeContainer:
  {
    backgroundColor: "#E5E0FF",
    width: 340,
    height: 150,
    borderWidth: 10,
    borderColor: "#8EA7E9",
    bottom: 50,
    justifyContent: "space-between",
  },
  LabelText:
  {
    fontFamily: "Courier New",
    fontWeight: 'bold',
    fontSize: 20,
  },
  box:
  {
    backgroundColor: "#FFF",
    width: 300,
    height: 22,
    bottom: 20,
    alignContent: "center",
    justifyContent: "center",
    left: 10
  },
  ImageBox:
  {
    backgroundColor: "#FFF",
    width: 300,
    height: 180,
    bottom: 20,
    alignContent: "center",
    justifyContent: "center",
    left: 10
  },
})