import GetChatData from "../src/helpers/ChatScreen/GetChatData";
import SetDMTitle from "../src/helpers/ChatScreen/SetDMTitle";

describe("Get Chat Data Test", () => {

  test("Failed Data Retrieval", async () => {
    const uid = "fakeUID";
    const result = await GetChatData(uid);
    expect(result).toBe("failed");
  });
});

describe("Set DM Title Test", () => {
    
  test("Failed Data Fetching", async () => {
    const currentUserID = "FakeUserID";

    const result = await SetDMTitle(currentUserID, []);
    expect(result).toBe("Failed To Find Title");
  });
});
