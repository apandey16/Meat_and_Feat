import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import styles from "../../style";
import browseStyle from "./index.styles";

import { Toolbar } from "../../comps/Toolbar/toolbar";
import RoundedButton from "../../comps/RoundedButton/RoundedButton";
import ScrollEvents from "../../comps/ScrollEvents";

import createDefaultPostData from "../../logic/Factory";
import EventManager from "../../logic/EventManager";

const postData = [createDefaultPostData()];

export default function BrowseEvent() {
  const [data, setData] = useState(postData);

  const navigation = useNavigation();
  const route = useRoute();
  const forumName : string = route.params?.forumName;

  const eventController = new EventManager(forumName);

  const dataSetter = async () => {
    setData(await eventController.fetchData("Browse Event"))
   }

  useEffect(() => {
    dataSetter();
  }, []);

  return (
    <View style={styles.ScreenContainer}>
      <View style={browseStyle.InfoContainer}>
        <View style={browseStyle.SortContainer}>
          <Text style={browseStyle.SortText}> Sort </Text>
        </View>
        <ScrollEvents inputData={data} canJoin={true} currentPage="Browse Event" refreshParameters={{forumName : forumName}}></ScrollEvents>
      </View>
      <RoundedButton
        name="Plan New Event"
        onPress={() => navigation.navigate("Post Event", {forumName : forumName})}
      />
      <Toolbar />
      <StatusBar style="auto" />
    </View>
  );
}
