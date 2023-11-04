import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Toolbar } from "../../comps/Toolbar/toolbar";

import styles from "../../style";
import React from "react";
import RoundedButton from "../../comps/RoundedButton/RoundedButton";
import browseStyle from "./index.styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BrowseEvent() {
  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <SafeAreaView style={browseStyle.InfoContainer}>
        <ScrollView>
        <View style={browseStyle.SortContainer}>
          <Text style={browseStyle.SortText}> Sort </Text>
        </View>
        <View style={browseStyle.PostContainer}>
          <Text style={browseStyle.PostText}>
            {" "}
            Event Name... {"\n"} Date/Time... {"\n"} Spots Left... {"\n"}{" "}
            Description...
          </Text>
        </View>
        <View style={browseStyle.PostContainer}>
          <Text style={browseStyle.PostText}>
            {" "}
            Event Name... {"\n"} Date/Time... {"\n"} Spots Left... {"\n"}{" "}
            Description...
          </Text>
        </View>
        <View style={browseStyle.PostContainer}>
          <Text style={browseStyle.PostText}>
            {" "}
            Event Name... {"\n"} Date/Time... {"\n"} Spots Left... {"\n"}{" "}
            Description...
          </Text>
        </View>
        <View style={browseStyle.PostContainer}>
          <Text style={browseStyle.PostText}>
            {" "}
            Event Name... {"\n"} Date/Time... {"\n"} Spots Left... {"\n"}{" "}
            Description...
          </Text>
        </View>
        <View style={browseStyle.PostContainer}>
          <Text style={browseStyle.PostText}>
            {" "}
            Event Name... {"\n"} Date/Time... {"\n"} Spots Left... {"\n"}{" "}
            Description...
          </Text>
        </View>
        </ScrollView>
      </SafeAreaView>
      <RoundedButton name="Post Event" top="-2%" />
      <Toolbar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}