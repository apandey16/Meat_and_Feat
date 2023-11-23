import FetchData from "../src/helpers/ChatsScreen/FetchData";
import GetChatsData from "../src/helpers/ChatsScreen/GetChatsData";

describe("Test Fetch Chat Data", () => {
    
  test("Failed Data Fetching", async () => {
    const setData = (data: string) => {
        return data;
    }
    const currentUserID = "FakeUserID";

    const result = await FetchData(setData, currentUserID);
    expect(result).toBe(0);
  });
});

describe("Test Get Chats Data", () => {
    
  test("Failed Data Retrieval", async () => {
    const currentUserID = "FakeUserID";

    const result = await GetChatsData(currentUserID)
    expect(result).toBe("failed");
  });
});
