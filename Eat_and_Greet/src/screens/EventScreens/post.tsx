import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Toolbar } from '../../comps/Toolbar/toolbar';

import styles from '../../style';
import React from 'react'
import RoundedButton from '../../comps/RoundedButton/RoundedButton';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import postStyle from './post.styles';

export default function PostEvent() {
  return (

    <SafeAreaView style={styles.ScreenContainer}>
      <SafeAreaView style={postStyle.InfoContainer}>
        <View style={postStyle.TitleCategoryContainer}>
          <Text style = {postStyle.LabelText}> Title {'\n'}</Text>
          <View style={postStyle.TitleCategoryBox}>
            <Text> Enter Title Here...</Text>
          </View>
        </View>
        <View style={postStyle.TitleCategoryContainer}>
          <Text style = {postStyle.LabelText}> Category {'\n'}</Text>
          <View style={postStyle.TitleCategoryBox}>
            <Text> Enter Category Here...</Text>
          </View>
        </View><View style={postStyle.ImageContainer}>
          <Text style = {postStyle.LabelText}> Image(optional) {'\n'}</Text>
          <View style={postStyle.ImageBox}/>
        </View><View style={postStyle.DateTimeContainer}>
          <Text style = {postStyle.LabelText}> Date & Time {'\n'}</Text>
          <View style={postStyle.DateTimeBox}>
            <Text> Pick Date</Text>
          </View>
          <View style={postStyle.DateTimeBox}>
            <Text> Enter Start Time...</Text>
          </View>
          <View style={postStyle.DateTimeBox}>
            <Text> Enter End Time...</Text>
          </View>
        </View>
      </SafeAreaView>
      <RoundedButton name="Post Event" top = "-2%"/>
      <Toolbar/>
      <StatusBar style = "auto"/>   
    </SafeAreaView>
  )
};