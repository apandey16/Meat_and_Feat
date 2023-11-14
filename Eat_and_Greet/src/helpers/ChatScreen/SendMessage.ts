import { Alert } from "react-native";

import { db } from "../../firebase/config";
import {
  collection,
  addDoc,
  getDoc,
  doc
} from "firebase/firestore";

import scrollToBottom from "./ScrollToBottom";

import MessageType from "../../types/MessageType";

const SendMessage = async (
  chatID: any,
  currentUser: any,
  fetchData: any,
  scrollViewRef: any,
  sending: any,
  setSending: any,
  typedMessage: any,
  setTypedMessage: any
) => {
  if (currentUser && !sending && typedMessage.length > 0) {
    try {
      setSending(true);
      const sendingMessageText = typedMessage;
      setTypedMessage("");
      const sendingMessage: MessageType = {
        Text: sendingMessageText,
        Time: new Date(),
        User: currentUser,
      };
      const docRef = await getDoc(doc(db, "Chats", chatID.toString()));
      addDoc(collection(docRef.ref, "Messages"), sendingMessage).then(() => {
        fetchData().then(() => {
          setSending(false);
          scrollToBottom(scrollViewRef);
        });
      });
    } catch (error) {
      console.error("Error Adding Message To DB: ", error);
      setTypedMessage("");
      setSending(false);
    }
  } else {
    if (sending) {
      Alert.alert("Wait To Send Another Message")
    } else if (typedMessage.length == 0) {
      Alert.alert("Please Type a Message");
    } else {
      Alert.alert("You Are Not Logged In. HOW DID YOU GET HERE");
    }
    setTypedMessage("");
  }
};

export default SendMessage;