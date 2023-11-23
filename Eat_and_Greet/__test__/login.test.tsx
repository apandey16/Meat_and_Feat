import loginUser from "../src/logic/LoginLogic";
import { app } from "../src/firebase/config";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

describe('Successful Login', () => {    
  test('Login', async () => {
    const email = "eatngreetrome@gmail.com";
    const eat = "password";
    const output = 1;
    const result = await loginUser(email, eat, auth);
    expect(result).toBe(output);
    });
});

describe('Unsuccessful Login', () => {    
    test('Invalid email', async () => {
      const email = "eatngreetromegmail.com";
      const eat = "password";
      const output = "auth/invalid-email";
      const result = await loginUser(email, eat, auth);
      expect(result).toBe(output);
      });

      test('Invalid password', async () => {
        const email = "eatngreetrome@gmail.com";
        const eat = "eat&greet";
        const output = "auth/invalid-login-credentials";
        const result = await loginUser(email, eat, auth);
        expect(result).toBe(output);
        }); 
    
     test('Missing password', async () => {
        const email = "eatngreetrome@gmail.com";
        const eat = "";
        const output = "auth/missing-password";
        const result = await loginUser(email, eat, auth);
        expect(result).toBe(output);
        });  
  });
