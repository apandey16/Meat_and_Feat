import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { db } from "../../firebase/config";
import {
  collection,
  getDocs
} from "firebase/firestore";

import styles from "../../style";
import browseStyle from "./index.styles";

import { Toolbar } from "../../comps/Toolbar/toolbar";
import RoundedButton from "../../comps/RoundedButton/RoundedButton";
import { SafeAreaView } from "react-native-safe-area-context";

interface forumData {
  ForumName: string;
}

const postData = [
  {
    ForumName: ""
  },
];

const getForumsData = async (): Promise<forumData[]> => {
  try {
    const docRef = await getDocs(collection(db, "Forums"));
    let fetchedForumData: forumData[] = [];
    docRef.forEach((doc) => {
      fetchedForumData.push(doc.data() as forumData);
    });
    return fetchedForumData;
  } catch (error) {
    console.error("Error Getting Data From DB: ", error);
    return [];
  }
};

export default function BrowseForum() {
    const [data, setData] = useState(postData);

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
        onPress={() => Alert.prompt('Enter Forum Name:')}
      />
      <Toolbar/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
