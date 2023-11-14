import React, { useEffect, useState, useRef } from "react";
import { View, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRoute } from "@react-navigation/native";
import { DocumentReference } from "firebase/firestore";

import { Toolbar } from "../../comps/Toolbar/toolbar";
import SpecificChatHeader from "../../comps/SpecificChat/SpecificChatHeader";
import SpecificChatMessage from "../../comps/SpecificChat/SpecificChatMessage";
import TextBox from "../../comps/SpecificChat/SpecificChatTextbox";

import getUser from "../../helpers/ChatScreen/GetUser";
import scrollToBottom from "../../helpers/ChatScreen/ScrollToBottom";
import sendMessage from "../../helpers/ChatScreen/SendMessage";
import fetchData from "../../helpers/ChatScreen/FetchData";

import ChatType from "../../types/ChatType";

import styles from "../../style";
import localstyles from "./style";

const LoadingChatData: ChatType[] = [
  {
    Id: "-1",
    Members: [],
    Messages: [],
    Title: "Loading Chat",
  },
];

function ExampleChatScreen() {
  const route = useRoute();
  const chatID: number = route.params?.id;
  const scrollViewRef = useRef();

  const [title, setTitle] = useState("Loading Chat");
  const [userName, setUserName] = useState("")
  const [messages, setMessages] = useState(LoadingChatData[0]?.Messages);
  const [currentUser, setCurrentUser] = useState<DocumentReference | null>(
    null
  );
  const [typedMessage, setTypedMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    getUser(setCurrentUser);
    fetchData(chatID, setTitle, setMessages);
  }, []);

  return (
    <View style={styles.ScreenContainer}>
      <View style={styles.OuterBox}>
        <SpecificChatHeader title={title} />
        <KeyboardAwareScrollView
          contentContainerStyle={[styles.InnerBox, localstyles.InnerBox]}
        >
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() => scrollToBottom(scrollViewRef)}
            contentContainerStyle={[localstyles.ScrollChats]}
          >
            {messages?.map((messageObj) => {
              let displayTime = "";
              let fromMe = false;
              if (messageObj.User.id.toString() == currentUser?.id.toString()) {
                fromMe = true;
              }
              if (messageObj.Time) {
                displayTime = messageObj.Time.toDate()
                  .toLocaleString("en-US", {
                    month: "numeric",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })
                  .toString();
              }
              return (
                <SpecificChatMessage
                  message={messageObj.Text}
                  sentFromMe={fromMe}
                  timeStamp={displayTime}
                  key={
                    messageObj.User.id.toString() +
                    messageObj.Time.toDate().toString()
                  }
                />
              );
            })}
          </ScrollView>
          <TextBox
            onTextChange={setTypedMessage}
            onMessageSend={() =>
              sendMessage(
                chatID,
                currentUser,
                () => fetchData(chatID, setTitle, setMessages),
                scrollViewRef,
                sending,
                setSending,
                typedMessage,
                setTypedMessage
              )
            }
            sending={sending}
          />
        </KeyboardAwareScrollView>
      </View>
      <Toolbar />
    </View>
  );
}

export default ExampleChatScreen;
