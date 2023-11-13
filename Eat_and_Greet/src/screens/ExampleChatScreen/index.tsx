import React, { useEffect, useState } from "react";
import { View, Dimensions, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { db } from "../../firebase/config";
import { getAuth } from "firebase/auth";
import {
  Timestamp,
  DocumentReference,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where
} from "firebase/firestore";

const { height } = Dimensions.get("window");

import { Toolbar } from "../../comps/Toolbar/toolbar";
import SpecificChatHeader from "../../comps/SpecificChat/SpecificChatHeader";
import SpecificChatMessage from "../../comps/SpecificChat/SpecificChatMessage";
import TextBox from "../../comps/SpecificChat/SpecificChatTextbox";

import styles from "../../style";
import localstyles from "./style";

interface Message {
  Text: string;
  Time: Timestamp;
  User: DocumentReference;
}

interface ChatType {
  Id: string;
  Members: DocumentReference[];
  Messages: Message[];
  Title: string;
}

const LoadingChatData: ChatType[] = [
  {
    Id: "-1",
    Members: [],
    Messages: [],
    Title: "Loading Chat",
  },
];

const getChatData = async (uid: string): Promise<ChatType[]> => {
  try {
    const docRef = await getDoc(doc(db, "Chats", uid));
    let fetchedChatData: ChatType[] = [];

    const chatData = { Id: docRef.id, ...(docRef.data() as ChatType) };
    const messagesCollection = await getDocs(
      collection(docRef.ref, "Messages")
    );

    const messagesData: Message[] = messagesCollection.docs.map(
      (messageDoc) => {
        const messageData = messageDoc.data() as Message;
        return messageData;
      }
    );

    chatData.Messages = messagesData.sort(
      (a, b) => a.Time.toMillis() - b.Time.toMillis()
    );
    fetchedChatData.push(chatData);
    return fetchedChatData;
  } catch (error) {
    console.error("Error Getting Data From DB: ", error);
    return [];
  }
};

function ExampleChatScreen() {
  const route = useRoute();
  const id: number = route.params?.id;

  const [data, setData] = useState(LoadingChatData);
  const [messages, setMessages] = useState(LoadingChatData[0]?.Messages);
  const [currentUser, setCurrentUser] = useState("");
  const [typedMessage, setTypedMessage] = useState("");

  const getUser = async () : Promise<void> => {
    try{
      let user = getAuth().currentUser;
      if(user == null) {
        return;
      }
      const querySnapshot = await getDocs(
        query(
          collection(db, "Users"),
          where("email", "==", user?.email)
        )
      );
      if (querySnapshot.docs[0]?.id) {
        setCurrentUser(querySnapshot.docs[0]?.id.toString());
      }
    } catch (error) {
      console.error("Error Getting Data From DB: ", error);
    }
  }

  getUser();

  const sendMessage = () => {
    console.log(typedMessage + " doug")
  }

  const fetchData = async () => {
    try {
      const data = await getChatData(id.toString());
      setData(data);
      setMessages(data[0]?.Messages);
    } catch (error) {
      console.error("Error in Fetching Data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.ScreenContainer}>
      <View style={styles.OuterBox}>
        <SpecificChatHeader title={data[0]?.Title} />
        <View style={[styles.InnerBox, { height: height - 265 }]}>
          <View
            style={[
              styles.InnerBox,
              { height: height - 320, justifyContent: "flex-end" },
            ]}
          >
            <ScrollView style={localstyles.ScrollChats}>
              {messages?.map((messageObj) => {
                let displayTime = "";
                let fromMe = false;
                if(messageObj.User.id.toString() == currentUser) {
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
          </View>
          <TextBox onTextChange={setTypedMessage} onMessageSend={sendMessage}/>
        </View>
      </View>
      <Toolbar />
    </View>
  );
}

export default ExampleChatScreen;


/*

const messageArray = [
  {
    sentFromMe: true,
    timeStamp: "4:45 PM",
    message: "Hey Jimmy, how's it going",
  },
  {
    sentFromMe: false,
    timeStamp: "4:53 PM",
    message:
      "Brand new whip got no keys \nTailor my clothes, no starch please\nSoon as I nut, you can gon' leave\nGot M's in the bank, like \"yes, indeed\"",
  },
  {
    sentFromMe: false,
    timeStamp: "4:54 PM",
    message: "WAH WAH WAH (Bitch I'm Lil Baby)",
  },
  { sentFromMe: true, timeStamp: "9:30 PM", message: "Intruiging argument" },
  {
    sentFromMe: true,
    timeStamp: "9:30 PM",
    message:
      "However, I believe you failed to consider just one thing: \nI frequently engage in sexual intercouse with you mother",
  },
  {
    sentFromMe: false,
    timeStamp: "10:12 PM",
    message:
      "Forgive me lord, I have allowed this fallacy in my logic to slip my brain. I will be better next time",
  },
  { sentFromMe: true, timeStamp: "10:15 PM", message: "You are a fool" },
  {
    sentFromMe: false,
    timeStamp: "11:33 PM",
    message:
      "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.",
  },
];

*/
