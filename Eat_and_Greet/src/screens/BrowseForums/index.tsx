import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { db } from "../../firebase/config";
import {collection, getDocs, query, where, setDoc} from "firebase/firestore";

import styles from "../../style";
import browseStyle from "./index.styles";

import { Toolbar } from "../../comps/Toolbar/toolbar";
import RoundedButton from "../../comps/RoundedButton/RoundedButton";
import { SafeAreaView } from "react-native-safe-area-context";

interface ForumData {
  ForumName: string;
}

const loadingForumData = [
  {
    ForumName: "Loading Forums..."
  },
];

const getForumsData = async (): Promise<ForumData[]> => {
  try {
    const docRef = await getDocs(collection(db, "Forums"));
    let fetchedForumData: ForumData[] = [];
    docRef.forEach((doc) => {
      fetchedForumData.push(doc.data() as ForumData);
    });
    return fetchedForumData;
  } catch (error) {
    console.error("Error Getting Data From DB: ", error);
    return [];
  }
};

export default function BrowseForum() {
    const [data, setData] = useState(loadingForumData);

    const navigation = useNavigation();

    const fetchData = async () => {
      try {
        const data = await getForumsData();
        setData(data);
      } catch (error) {
        console.error("Error in Fetching Data: ", error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    const addForumToDB = async (ForumName: string) => {
      let missing = new Array();
      for (let i = 0; i < inputs.length; i++){
        if(inputs[i].length <= 0){
          missing.push(inputsAsString[i])
        }
      }
      if (missing.length == 0) {
        try {
          const querySnapshot = await getDocs(
            query(
              collection(db, "Forums"),
              where("Title", "==", title),
              where("Category", "==", category),
              where("Date", "==", dateOfEvent.toDateString())
            )
          );
  
            if (!querySnapshot.empty) {
            Alert.alert("This Event is Already Happening Today");
          } else {
            const numberOfEventsSnapshot = await getDocs(collection(db, "Number of Events"));
            let uid : number = await getNumberOfEventsData(numberOfEventsSnapshot) + 1;
            await setDoc(doc(db, "Forums", uid.toString()), {
              Category: category,
              Date: dateOfEvent.toDateString(),
              EndTime: endTime.toTimeString().split(' ')[0],
              Host: name,
              StartTime: startTime.toTimeString().split(' ')[0],
              Title: title,
              id: uid,
              description: description,
              spots: spots,
              participants: [getAuth().currentUser?.email]
            });
            await updateDoc(doc(db, "Number of Events", "Counter"),  { numberOfEvents: uid });
            Alert.alert("Forum Successfully Created!");
            navigation.goBack();
          }
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      } else {
        Alert.alert("A Forum with this name already exists.");
      }
    };

  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <View style={browseStyle.InfoContainer}>
        <View style={browseStyle.SortContainer}>
            <Text style={browseStyle.SortText}> Sort </Text>
        </View>
        <ScrollView>
          {data.map((forumObj) => (  
            <TouchableOpacity style={browseStyle.PostContainer}
            key={forumObj.ForumName}
            onPress={() => navigation.navigate('Browse Event')}>
            <Text style={browseStyle.PostText}> {forumObj.ForumName} </Text>
            </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
      <RoundedButton
        name="Create Forum"
        onPress={() => Alert.prompt('Enter Forum Name:', "", text => addForumToDB(text))}
        top={"-2%"}
      />
      <Toolbar/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
