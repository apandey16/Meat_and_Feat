import loginUser from "../src/logic/LoginLogic";
import { app } from "../src/firebase/config";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
const validEmail = "eatngreetrome@gmail.com";
const vEat = "password";

describe('Successful Login', () => {  
  test('Login', async () => {
    const output = 1;
    const result = await loginUser(validEmail, vEat, auth);
    expect(result).toBe(output);
    });
});