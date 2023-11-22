import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { db } from "../../firebase/config";
import {collection, getDocs, query, where, setDoc, doc} from "firebase/firestore";

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
      if (ForumName.length > 14)
      {
        Alert.alert("Forum name is too long.");
      }
      else
      {
        try {
          const querySnapshot = await getDocs(
            query(
              collection(db, "Forums"),
              where("ForumName", "==", ForumName),
            )
          );
  
            if (!querySnapshot.empty) {
            Alert.alert("A Forum with this name already exists.");
          } else {
            await setDoc(doc(db, "Forums", ForumName), {
              ForumName: ForumName
            });
            Alert.alert("Forum Successfully Created!");
            navigation.goBack();
            navigation.navigate("Browse Forums");
          }
        } catch (error) {
          console.error("Error adding document: ", error);
        }
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
            onPress={() => navigation.navigate('Browse Event', { forumName : forumObj.ForumName })}>
            <Text style={browseStyle.PostText}> {forumObj.ForumName} </Text>
            </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
      <RoundedButton
        name="Create Forum"
        onPress={() => Alert.prompt('Enter Forum Name:', "Max 14 Characters", text => addForumToDB(text))}
        top={"-2%"}
      />
      <Toolbar/>
    </SafeAreaView>
  );
}
