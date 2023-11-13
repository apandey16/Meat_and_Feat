import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase/config";
import {
  Timestamp,
  DocumentReference,
  collection,
  getDocs,
} from "firebase/firestore";

import ChatCard from "../../comps/ChatCard/ChatCard";
import { Toolbar } from "../../comps/Toolbar/toolbar";

import styles from "../../style";

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
    Title: "Loading Chats Now",
  },
];

const getChatsData = async (): Promise<ChatType[]> => {
  try {
    const docRef = await getDocs(collection(db, "Chats"));
    let fetchedChatData: ChatType[] = [];
    for (const doc of docRef.docs) {
      const chatData = { Id: doc.id, ...(doc.data() as ChatType) };

      const messagesCollection = await getDocs(collection(doc.ref, "Messages"));

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
    }

    fetchedChatData.forEach((chat) => {
      console.log("ID:", chat.Id);
      console.log("Title:", chat.Title);
      console.log("Members:");
      chat.Members.forEach((memberRef) => {
        console.log("  Member:", memberRef.id);
      });
      const firstMessage = chat.Messages[0];

      if (firstMessage) {
        console.log("First Message:");
        console.log("  Text:", firstMessage.Text);
        console.log("  Timestamp:", firstMessage.Time.toDate()); // Assuming you want to convert Timestamp to a JavaScript Date object
        console.log("  User:", firstMessage.User.id); // Assuming you want the ID of the user document in 'User'
        // You can access other properties of the first message document using firstMessage
      }

      console.log("--------");
    });

    return fetchedChatData;
  } catch (error) {
    console.error("Error Getting Data From DB: ", error);
    return [];
  }
};

function HomeScreen() {
  const [data, setData] = useState(LoadingChatData);

  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      const data = await getChatsData();
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
      <ScrollView>
        <View style={styles.OuterBox}>
          {data.map((chatObj) => {
            let displayTime = "";
            let displayMessage = "";
            let onPressFunc = () => null;
            const recentMessage = chatObj.Messages[chatObj.Messages.length - 1];
            if (chatObj.Id != '-1') {
              onPressFunc = () => navigation.navigate("Example Chat", { id : chatObj.Id})
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
                key={chatObj.Title}
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

/*
 const chatArray = [
    {
      senderName: "Basketball Chat",
      timestamp: "4:45 PM",
      isRead: false,
      nav: () => navigation.navigate("Example Chat"),
      message: "Steph said: Game@2:30 tmrw",
    },
    {
      senderName: "@logidoke",
      timestamp: "12:12 PM",
      isRead: false,
      nav: () => navigation.navigate("Example Chat"),
      message: "Sent a meme on Instagram, check it out",
    },
    {
      senderName: "@steelstine",
      timestamp: "10:31 AM",
      isRead: true,
      nav: () => navigation.navigate("Example Chat"),
      message: "Car go VROOOM, just like me on coffee",
    },
    {
      senderName: "@camalam2002",
      timestamp: "10:30 AM",
      isRead: false,
      nav: () => navigation.navigate("Example Chat"),
      message: "I am here to code bugs and chew gum, and I'm all out of gum",
    },
    {
      senderName: "@robertvermeulen_",
      timestamp: "6:15 AM",
      isRead: true,
      nav: () => navigation.navigate("Example Chat"),
      message: "Hello there! Wanna go on a run?",
    },
  ];

*/
