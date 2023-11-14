import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ChatCard from "../../comps/ChatCard/ChatCard";
import { Toolbar } from "../../comps/Toolbar/toolbar";

import fetchData from "../../helpers/ChatsScreen/FetchData";

import ChatType from "../../types/ChatType";

import styles from "../../style";

const LoadingChatData: ChatType[] = [
  {
    Id: "-1",
    Members: [],
    Messages: [],
    Title: "Loading Chats Now",
  },
];

function HomeScreen() {
  const [data, setData] = useState(LoadingChatData);

  const navigation = useNavigation();

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <View style={styles.ScreenContainer}>
      <ScrollView>
        <View style={styles.OuterBox}>
          {data.map((chatObj) => {
            let displayTime = "";
            let displayMessage = "";
            let onPressFunc = () => null;
            const recentMessage = chatObj.Messages[chatObj.Messages.length - 1];
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
                isRead={true}
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

