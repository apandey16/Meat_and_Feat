import getChatsData from "./GetChatsData";

import ChatType from "../../types/ChatType";

const NoChatData: ChatType[] = [
  {
    Id: "-1",
    Members: [],
    Messages: [],
    Title: "You Are Not Part of Any Chats",
  },
];

const fetchData = async (setData: any, currentUser: any) => {
  try {
    const data = await getChatsData(currentUser);
    if (data.length > 0) {
      setData(data);
    } else {
      setData(NoChatData);
    }
  } catch (error) {
    console.error("Error in Fetching Data: ", error);
  }
};

export default fetchData;
