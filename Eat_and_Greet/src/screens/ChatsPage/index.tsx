import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DocumentReference } from "firebase/firestore";

import ChatCard from "../../comps/ChatCard/ChatCard";
import { Toolbar } from "../../comps/Toolbar/toolbar";

import fetchData from "../../helpers/ChatsScreen/FetchData";
import getUser from "../../helpers/ChatScreen/GetUser";

import ChatType from "../../types/ChatType";

import styles from "../../style";

const LoadingChatData: ChatType[] = [
  {
    Id: "-1",
    Members: [],
    Messages: [],
    Title: "Loading Chats...",
  },
];

const LoggedOutChatData: ChatType[] = [
  {
    Id: "-1",
    Members: [],
    Messages: [],
    Title: "You Need to Log In To View Chats",
  },
];

function HomeScreen() {
  const [data, setData] = useState(LoadingChatData);
  const [currentUser, setCurrentUser] = useState<
    DocumentReference | string | null
  >(null);

  const navigation = useNavigation();

  useEffect(() => {
    getUser(setCurrentUser);
  }, []);

  useEffect(() => {
    if (currentUser) {
      if (currentUser == "User Not Found") {
        setData(LoggedOutChatData);
      } else {
        if (typeof currentUser !== 'string') {
          fetchData(setData, currentUser.id.toString());
        }
      }
    }
  }, [currentUser]);

  return (
    <View style={styles.ScreenContainer}>
      <ScrollView>
        <View style={styles.OuterBox}>
          {data.map((chatObj) => {
            let displayTime = "";
            let displayMessage = "";
            let onPressFunc = () => null;
            const recentMessage = chatObj.Messages[0];
            if (chatObj.Id != "-1") {
              onPressFunc = () =>
                //console.log(chatObj.Id)
                navigation.navigate("Chat", { id: chatObj.Id });
            }
            if (recentMessage) {
              displayTime = recentMessage.Time.toDate()
                .toLocaleString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })
                .toString();
              displayMessage = recentMessage.Text;
            }
            return (
              <ChatCard
                senderName={chatObj.Title}
                message={displayMessage}
                timestamp={displayTime}
                onPress={onPressFunc}
                key={chatObj.Id}
              />
            );
          })}
        </View>
      </ScrollView>
      <Toolbar />
    </View>
  );
}

export default HomeScreen;
