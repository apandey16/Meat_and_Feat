import getChatData from "./GetChatData";

const FetchData = async (chatID: any, setTitle: any, setMessages: any) => {
  try {
    const data = await getChatData(chatID.toString());

    const dataTitle = data[0] ? data[0].Title : "Error Getting Chat";
    if (dataTitle == "DM") {
      setTitle("DM w/ ???");
    } else {
      setTitle(dataTitle);
    }
    setMessages(data[0]?.Messages);
  } catch (error) {
    console.error("Error in Fetching Data: ", error);
  }
};

export default FetchData;
