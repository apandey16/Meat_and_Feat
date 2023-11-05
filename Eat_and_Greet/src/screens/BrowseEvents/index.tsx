import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Toolbar } from "../../comps/Toolbar/toolbar";

import styles from "../../style";
import React from "react";
import RoundedButton from "../../comps/RoundedButton/RoundedButton";
import browseStyle from "./index.styles";

export default function BrowseEvent() {
  return (
    <View style={styles.ScreenContainer}>
      <View style={browseStyle.InfoContainer}>
        
        <View style={browseStyle.SortContainer}>
          <Text style={browseStyle.SortText}> Sort </Text>
        </View>
        <ScrollView>
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
      </View>
      <RoundedButton name="Post Event" />
      <Toolbar />
      <StatusBar style="auto" />
    </View>
  );
}