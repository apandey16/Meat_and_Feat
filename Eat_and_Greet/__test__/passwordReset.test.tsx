import resetUserPassword from "../src/logic/PasswordResetLogic";
import { app } from "../src/firebase/config";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

describe("Fails Sending Email", () => {
  test("Invalid Email", async () => {
    const output = "auth/invalid-email";
    const result = await resetUserPassword("earyahoo.com", auth);
    expect(result).toBe(output);
  });
});
