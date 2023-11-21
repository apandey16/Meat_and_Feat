import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

import MessageType from "../../types/MessageType";
import ChatType from "../../types/ChatType";
import SetDMTitle from "../../helpers/ChatScreen/SetDMTitle";

const GetChatsData = async (currentUser: any): Promise<ChatType[]> => {
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

      messagesData.sort((a, b) => b.Time.toMillis() - a.Time.toMillis());
      chatData.Messages = messagesData;

      let UserIsAMember = false;
      for (let i = 0; i < chatData.Members.length; i++) {
        if (currentUser.id.toString() == chatData.Members[i]?.id.toString()) {
          UserIsAMember = true;
        }
      }
      if (UserIsAMember == true) {
        if (chatData.Title == "DM") {
          chatData.Title = await SetDMTitle(currentUser, chatData.Members);
        }
        fetchedChatData.push(chatData);
      }
    }
    return fetchedChatData;
  } catch (error) {
    console.error("Error Getting Data From DB: ", error);
    return [];
  }
};

export default GetChatsData;
