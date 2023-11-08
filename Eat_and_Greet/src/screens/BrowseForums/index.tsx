import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import styles from "../../style";
import browseStyle from "./index.styles";

import { Toolbar } from "../../comps/Toolbar/toolbar";
import RoundedButton from "../../comps/RoundedButton/RoundedButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert } from "react-native";

export default function BrowseForum() {

    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <View style={browseStyle.InfoContainer}>
        <View style={browseStyle.SortContainer}>
            <Text style={browseStyle.SortText}> Sort </Text>
        </View>
        <ScrollView>
            <TouchableOpacity style={browseStyle.PostContainer}onPress={() => navigation.navigate('Browse Event')}>
                <Text style={browseStyle.PostText}> Food </Text>
            </TouchableOpacity>
            <TouchableOpacity style={browseStyle.PostContainer}onPress={() => navigation.navigate('Browse Event')}>
                <Text style={browseStyle.PostText}> Live Events </Text>
            </TouchableOpacity>
            <TouchableOpacity style={browseStyle.PostContainer}onPress={() => navigation.navigate('Browse Event')}>
                <Text style={browseStyle.PostText}> Music </Text>
            </TouchableOpacity>
            <TouchableOpacity style={browseStyle.PostContainer}onPress={() => navigation.navigate('Browse Event')}>
                <Text style={browseStyle.PostText}> Gym </Text>
            </TouchableOpacity>
            <TouchableOpacity style={browseStyle.PostContainer}onPress={() => navigation.navigate('Browse Event')}>
                <Text style={browseStyle.PostText}> BasketBall </Text>
            </TouchableOpacity>
            <TouchableOpacity style={browseStyle.PostContainer}onPress={() => navigation.navigate('Browse Event')}>
                <Text style={browseStyle.PostText}> Arts & Crafts </Text>
            </TouchableOpacity>
        </ScrollView>
      </View>
      <RoundedButton
        name="Create Forum"
        onPress={() => Alert.prompt('Enter Forum Name:')}
      />
      <Toolbar/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
