import getChatData from "./GetChatData";
import SetMemberStrings from "./SetMemberStrings";
import SetDMTitle from "./SetDMTitle";

const FetchData = async (
  chatID: any,
  title: any,
  setTitle: any,
  setMessages: any,
  setMemberStrings: any,
  currentUser: any
) => {
  try {
    const data = await getChatData(chatID.toString());
    const dataTitle = data[0] ? data[0].Title : "Error Getting Chat";
    if (title == "Loading Chat" || title == "Log In PLZ") {
      if (dataTitle == "DM") {
        const newTitle = await SetDMTitle(currentUser, data[0]?.Members);
        setTitle(newTitle);
      } else {
        setTitle(dataTitle);
      }
    }
    SetMemberStrings(data[0]?.Members, setMemberStrings);
    setMessages(data[0]?.Messages);
  } catch (error) {
    console.error("Error in Fetching Data: ", error);
  }
};

export default FetchData;
