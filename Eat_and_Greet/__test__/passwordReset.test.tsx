import resetUserPassword from "../src/logic/PasswordResetLogic";
import { app } from "../src/firebase/config";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
const email = "eatngreetrome@gmail.com";

describe('Successful Email Sent', () => {  
  test('Sending Email', async () => {
    const output = 1;
    const result = await resetUserPassword(email, auth);
    expect(result).toBe(output);
    });
});
describe('Fails Sending Email', () => {  
    test('Invalid Email', async () => {
      const output = "auth/invalid-email";
      const result = await resetUserPassword("earyahoo.com", auth);
      expect(result).toBe(output);
      });
  });