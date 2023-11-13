import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

import styles from "../../style";
import browseStyle from "./index.styles";

import { Toolbar } from "../../comps/Toolbar/toolbar";
import RoundedButton from "../../comps/RoundedButton/RoundedButton";
import ScrollEvents from "../../comps/ScrollEvents";

import { EventData } from "../../logic/eventDataInterface";
import createDefaultPostData from "../../logic/Factory";

const postData = [createDefaultPostData()];

const getEventsData = async (): Promise<EventData[]> => {
  try {
    const docRef = await getDocs(collection(db, "Events"));
    let fetchedEventData: EventData[] = [];
    docRef.forEach((doc) => {
      fetchedEventData.push(doc.data() as EventData);
    });
    return fetchedEventData;
  } catch (error) {
    console.error("Error Getting Data From DB: ", error);
    return [];
  }
};

export default function BrowseEvent() {
  const [data, setData] = useState(postData);

  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      const data = await getEventsData();
      setData(data);
    } catch (error) {
      console.error("Error in Fetching Data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.ScreenContainer}>
      <View style={browseStyle.InfoContainer}>
        <View style={browseStyle.SortContainer}>
          <Text style={browseStyle.SortText}> Sort </Text>
        </View>
        <ScrollEvents data={data} canJoin={true}></ScrollEvents>
      </View>
      <RoundedButton
        name="Plan New Event"
        onPress={() => navigation.navigate("Post Event")}
      />
      <Toolbar />
      <StatusBar style="auto" />
    </View>
  );
}
