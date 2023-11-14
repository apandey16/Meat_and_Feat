import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

import MessageType from "../../types/MessageType";
import ChatType from "../../types/ChatType";

const GetChatsData = async (): Promise<ChatType[]> => {
  try {
    const docRef = await getDocs(collection(db, "Chats"));
    let fetchedChatData: ChatType[] = [];
    for (const doc of docRef.docs) {
      const chatData = { Id: doc.id, ...(doc.data() as ChatType) };

      const messagesCollection = await getDocs(collection(doc.ref, "Messages"));

      const messagesData: MessageType[] = messagesCollection.docs.map(
        (messageDoc) => {
          const messageData = messageDoc.data() as MessageType;
          return messageData;
        }
      );

      chatData.Messages = messagesData.sort(
        (a, b) => a.Time.toMillis() - b.Time.toMillis()
      );
      fetchedChatData.push(chatData);
    }
    return fetchedChatData;
  } catch (error) {
    console.error("Error Getting Data From DB: ", error);
    return [];
  }
};

export default GetChatsData;
