import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

import MessageType from "../../types/MessageType";
import ChatType from "../../types/ChatType";

import SetDMTitle from "../../helpers/ChatScreen/SetDMTitle";

const GetChatsData = async (currentUserID: any): Promise<ChatType[] | string> => {
  try {
    const docRef = await getDocs(collection(db, "Chats"));
    let fetchedChatData: ChatType[] = [];
    for (const doc of docRef.docs) {
      const chatData = { ...(doc.data() as ChatType) };
      chatData.Id = doc.id;

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
      for (const member of chatData.Members) {
        if (currentUserID == member.id.toString()) {
          UserIsAMember = true;
        }
      }
      if (UserIsAMember) {
        if (chatData.Title == "DM") {
          chatData.Title = await SetDMTitle(currentUserID, chatData.Members);
        }
        fetchedChatData.push(chatData);
      }
    }
    return fetchedChatData;
  } catch (error) {
    console.error("Error Getting Data From DB: ", error);
    return "failed";
  }
};

export default GetChatsData;
