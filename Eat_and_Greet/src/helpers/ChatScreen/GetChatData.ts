import { db } from "../../firebase/config";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

import ChatType from "../../types/ChatType";
import MessageType from "../../types/MessageType";

const GetChatData = async (uid: string): Promise<ChatType[]> => {
  try {
    const docRef = await getDoc(doc(db, "Chats", uid));
    let fetchedChatData: ChatType[] = [];

    const chatData = { ...(docRef.data() as ChatType) };
    const messagesCollection = await getDocs(
      collection(docRef.ref, "Messages")
    );

    const messagesData: MessageType[] = messagesCollection.docs.map(
      (messageDoc) => {
        const messageData = messageDoc.data() as MessageType;
        return messageData;
      }
    );

    chatData.Messages = messagesData.sort(
      (a, b) => b.Time.toMillis() - a.Time.toMillis()
    );
    fetchedChatData.push(chatData);
    return fetchedChatData;
  } catch (error) {
    console.error("Error Getting Data From DB: ", error);
    return [];
  }
};

export default GetChatData;
