import FetchData from "../src/helpers/ChatsScreen/FetchData";

describe("Test Fetch Chat Data", () => {

  test("Successful Data Fetching", async () => {
    const setData = (data: string) => {
        return data;
    }
    const currentUserID = "WFr3hcpbBXgrkQN0grMCoCzZ6o23";

    const result = await FetchData(setData, currentUserID);
    expect(result).toBe(1);
  });
    
  test("Failed Data Fetching", async () => {
    const setData = (data: string) => {
        return data;
    }
    const currentUserID = "FakeUserID";

    const result = await FetchData(setData, currentUserID);
    expect(result).toBe(0);
  });
});
