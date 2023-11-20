import React, { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { db } from "../../firebase/config";
import { collection, where, query, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import styles from "../../style";
import localstyles from "./index.styles";

import { Toolbar } from "../../comps/Toolbar/toolbar";
import ScrollEvents from "../../comps/ScrollEvents/index"

import { EventData } from "../../logic/eventDataInterface";
import createDefaultPostData from "../../logic/Factory";
const postData = [ createDefaultPostData() ];

export default function MyEvents() {

  const [data, setData] = useState(postData);
  const navigation = useNavigation();

  const getEventsData = async (): Promise<EventData[]> => {
    try {
    const user = getAuth().currentUser;
      const ownedEvents  = query(collection(db, "Events"), where("participants","array-contains", user?.email), where("Date", ">=", new Date()));
      const docRef = await getDocs(ownedEvents);
      let fetchedEventData: EventData[] = [];
      docRef.forEach((doc) => {
        fetchedEventData.push(doc.data() as EventData);
      });
      if(fetchedEventData.length == 0){
        Alert.alert("You Have No Joined Events");
        navigation.goBack();
        // Trying to put nav back to previous page here
      }
      return fetchedEventData;
    } catch (error) {
      console.error("Error Getting Data From DB: ", error);
      return [];
    }
  };

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
      <View style={localstyles.InfoContainer}>
        <ScrollEvents inputData={data} canJoin={false} currentPage="My Events" refreshParameters={{}}></ScrollEvents>
      </View>
      <StatusBar style="auto" />
      <Toolbar />
    </View>
  );
}
