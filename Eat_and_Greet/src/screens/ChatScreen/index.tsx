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
import UserStringType from "../../types/UserStringType";

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
  const [messages, setMessages] = useState(LoadingChatData[0]?.Messages);
  const [memberStrings, setMemberStrings] = useState<[UserStringType] | null>(
    null
  );
  const [currentUser, setCurrentUser] = useState<DocumentReference | null>(
    null
  );
  const [typedMessage, setTypedMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    getUser(setCurrentUser);
  }, []);

  useEffect(() => {
    if (currentUser) {
      fetchData(
        chatID,
        title,
        setTitle,
        setMessages,
        setMemberStrings,
        currentUser
      );
    }
  }, [currentUser]);

  return (
    <View style={styles.ScreenContainer}>
      <KeyboardAwareScrollView contentContainerStyle={styles.OuterBox}>
        <SpecificChatHeader title={title} />
        <View style={[styles.InnerBox, localstyles.InnerBox]}>
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() => scrollToBottom(scrollViewRef)}
            contentContainerStyle={[localstyles.ScrollChats]}
          >
            {messages?.map((messageObj) => {
              let displayTime = "";
              let fromMe = false;
              let sender: string | undefined = "User Unknown";
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
              if (memberStrings) {
                for (const memberString of memberStrings) {
                  if (memberString.Id == messageObj.User.id.toString()) {
                    sender = memberString.Name;
                  }
                }
                if (sender == "Unknown User") {
                  console.log(messageObj.User.id.toString());
                }
              }

              return (
                <SpecificChatMessage
                  message={messageObj.Text}
                  sentFromMe={fromMe}
                  timeStamp={displayTime}
                  sender={sender}
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
              sendMessage({
                chatIDProp: chatID,
                currentUserProp: currentUser,
                fetchDataProp: () =>
                  fetchData(
                    chatID,
                    title,
                    setTitle,
                    setMessages,
                    setMemberStrings,
                    currentUser
                  ),
                scrollViewRefProp: scrollViewRef,
                sendingProp: sending,
                setSendingProp: setSending,
                typedMessageProp: typedMessage,
                setTypedMessageProp: setTypedMessage,
              })
            }
            sending={sending}
          />
        </View>
      </KeyboardAwareScrollView>
      <Toolbar />
    </View>
  );
}

export default ExampleChatScreen;
