import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { db } from "../../firebase/config";
import {
  collection,
  setDoc,
  doc,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import styles from "../../style";
import browseStyle from "./index.styles";

import { Toolbar } from "../../comps/Toolbar/toolbar";
import RoundedButton from "../../comps/RoundedButton/RoundedButton";

/*
NEXT STEPS:
PLAN NEW EVENT BUTTON FUNCTIONALITY
SORTED CONTAINER
MAKE VIEW EVENT PAGE
*/

interface EventData {
  Category: string;
  Date: string;
  EndTime: string;
  Host: string;
  StartTime: string;
  Title: string;
}

const postData = [
  {
    Category: "",
    Date: "",
    EndTime: "",
    Host: "",
    StartTime: "",
    Title: "Loading Events Now",
  },
];

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
