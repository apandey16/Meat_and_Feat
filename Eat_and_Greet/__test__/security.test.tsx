import loginUser from "../src/logic/LoginLogic";
import { app } from "../src/firebase/config";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
const validEmail = "eatngreetrome@gmail.com";
const vEat = "password";
const invalidEmail = "eatngreetromegmail.com";
const iEat = "eat&greet";
const missingEat = "";

describe('Unsuccessful Login', () => {    
    test('Invalid email', async () => {
      const output = "auth/invalid-email";
      const result = await loginUser(invalidEmail, vEat, auth);
      expect(result).toBe(output);
      });

      test('Invalid password', async () => {
        const output = "auth/invalid-login-credentials";
        const result = await loginUser(validEmail, iEat, auth);
        expect(result).toBe(output);
        }); 
    
     test('Missing password', async () => {
        const output = "auth/missing-password";
        const result = await loginUser(validEmail, missingEat, auth);
        expect(result).toBe(output);
        });  
  });
