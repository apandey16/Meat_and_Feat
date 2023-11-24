import GetChatData from "../src/helpers/ChatScreen/GetChatData";

describe("Get Chat Data Test", () => {
  
  test("Successful Data Retrieval", async () => {
    const uid = "Z7JDhH46MvAs79jlk1MB";
    const resultData = await GetChatData(uid);
    let result = ""
    if (typeof resultData !== 'string' && resultData[0]) {
      result = resultData[0].Title;
    }
    expect(result).toBe("Painting In The Dark");
  });

  test("Failed Data Retrieval", async () => {
    const uid = "fakeUID";
    const result = await GetChatData(uid);
    expect(result).toEqual([{"Messages": []}]);
  });
});
