import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Toolbar } from '../../comps/Toolbar/toolbar';

import styles from '../../style';
import React from 'react'
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BrowseEvent() {
  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <SafeAreaView style={browseStyle.InfoContainer}>
        <View style={browseStyle.SortContainer}>
          <Text style={browseStyle.SortText}> Sort </Text>
        </View>
        <View style={browseStyle.PostContainer}>
          <Text style = {browseStyle.PostText}> Event Name... {'\n'} Date/Time... {'\n'} Spots Left... {'\n'} Description...</Text>
        </View>
        <View style={browseStyle.PostContainer}>
          <Text style = {browseStyle.PostText}> Event Name... {'\n'} Date/Time... {'\n'} Spots Left... {'\n'} Description...</Text>
        </View><View style={browseStyle.PostContainer}>
          <Text style = {browseStyle.PostText}> Event Name... {'\n'} Date/Time... {'\n'} Spots Left... {'\n'} Description...</Text>
        </View><View style={browseStyle.PostContainer}>
          <Text style = {browseStyle.PostText}> Event Name... {'\n'} Date/Time... {'\n'} Spots Left... {'\n'} Description...</Text>
        </View><View style={browseStyle.PostContainer}>
          <Text style = {browseStyle.PostText}> Event Name... {'\n'} Date/Time... {'\n'} Spots Left... {'\n'} Description...</Text>
        </View>
      </SafeAreaView>
      <RoundedButton name="Post Event" top = "-2%"/>
      <Toolbar/>
      <StatusBar style = "auto"/>   
    </SafeAreaView>
  )
}

const browseStyle = StyleSheet.create({
  InfoContainer:
  {
    backgroundColor: "#8EA7E9",
    height: 550,
    width: 340,
    top: -35,
  },
  PostContainer:
  {
    backgroundColor: "#E5E0FF",
    width: 340,
    height: 95,
    borderWidth: 10,
    borderColor: "#8EA7E9",
    bottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  PostText:
  {
    fontFamily: "Courier New",
    fontWeight: 'bold'
  },
  SortContainer:
  {
    backgroundColor: "#FFF",
    width: 340,
    height: 70,
    borderWidth: 10,
    borderColor: "#8EA7E9",
    bottom: 50,
    justifyContent: "center",
  },
  SortText:
  {
    fontSize: 20,
    left: 40,
    fontFamily: "Courier New",
    fontWeight: 'bold'
  }
})