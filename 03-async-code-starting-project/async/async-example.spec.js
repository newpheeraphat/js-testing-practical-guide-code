import { it, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

// Working with callback function
it("should generate the token value", (done) => {
  const testUserEmail = "test@test.com";

  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined();
      // expect(token).toBe(2);
      done();
    } catch (err) {
      done(err);
    }
  });
});

// Working with Promise
it("should generate the token value (Promise)", () => {
  const testUserEmail = "test@test.com";

  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});
