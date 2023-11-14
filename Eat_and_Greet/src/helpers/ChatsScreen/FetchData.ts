import getChatsData from "./GetChatsData";

const fetchData = async (setData: any) => {
    try {
      const data = await getChatsData();
      setData(data);
    } catch (error) {
      console.error("Error in Fetching Data: ", error);
    }
  };

export default fetchData;