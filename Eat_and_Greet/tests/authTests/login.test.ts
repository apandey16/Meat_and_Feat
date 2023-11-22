import loginUser from "../../src/screens/LoginScreen/loginLogic";

describe('testing login for valid user', () => {
  test('should return successful login', () => {   
    expect(loginUser("@gmail.com", "password")).toBe(true);
  });
});
test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3);
  });