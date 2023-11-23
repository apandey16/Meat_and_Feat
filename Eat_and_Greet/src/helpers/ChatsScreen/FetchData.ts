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

const fetchData = async (setData: any, currentUserID: any): Promise<number> => {
  try {
    const data = await getChatsData(currentUserID);
    if (typeof data !== 'string' && data.length > 0) {
      setData(data);
      return 1;
    } else {
      setData(NoChatData);
      return 0;
    }
  } catch (error) {
    console.error("Error in Fetching Data: ", error);
    return 0;
  }
};

export default fetchData;
