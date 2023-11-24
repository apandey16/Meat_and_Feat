import UserManager from "../src/logic/UserManager";

describe("Test GetUserManager Functions Response", () => {
  const setUpTestAccount = async () => {
    const userController = new UserManager();
    const testEmail = "eatngreetrome@gmail.com";
    userController.addDescription(testEmail, "test description");
    const interests = await userController.getInterests(testEmail);
    for (const interest of interests) {
      if (interest != null) {
        await userController.removeInterest(testEmail, interest);
      }
    }
    await userController.addInterest(testEmail, "Foo");
    await userController.addInterest(testEmail, "Fighters");
    await userController.addInterest(testEmail, "Everlong");
  };

  beforeEach(async () => {
    await setUpTestAccount();
  });

  test("GetUser Test", async () => {
    const userController = new UserManager();
    const testEmail = "morrowcameron2002@gmail.com";
    const output = "Cameron Morrow";
    const name = await userController.getUser(testEmail);
    expect(name).toBe(output);
  });

  test("GetDescription Test", async () => {
    const userController = new UserManager();
    const testEmail = "eatngreetrome@gmail.com";
    const output = "test description";
    const description = await userController.getDescription(testEmail);
    expect(description).toBe(output);
  });

  test("GetInterests Test", async () => {
    const userController = new UserManager();
    const testEmail = "eatngreetrome@gmail.com";
    const output = ["Foo", "Fighters", "Everlong"];
    const input = await userController.getInterests(testEmail);
    for (let i = 0; i < input.length; i++) {
      expect(input[i]).toBe(output[i]);
    }
  });

  test("Change Profile Integration Test", async () => {
    const userController = new UserManager();
    const newDescription = "Testing Description Change";
    const testEmail = "eatngreetrome@gmail.com";
    let interests = await userController.getInterests(testEmail);
    const newInterest = "Integration Testing";
    interests.push(newInterest);
    await userController.addDescription(testEmail, newDescription);
    await userController.addInterest(testEmail, newInterest);
    expect(await userController.getDescription(testEmail)).toBe(newDescription);
    const pulledInterests = await userController.getInterests(testEmail);
    for (let i = 0; i < pulledInterests.length; i++) {
      expect(pulledInterests[i]).toBe(interests[i]);
    }
  });
});
