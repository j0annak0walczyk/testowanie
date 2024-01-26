import { formatString } from "./formatString";

describe("Testowanie formatString", () => {
  test("Testowanie przy poprawnym stringu", () => {
    expect(formatString("Asia")).toBe("A s i a");
  });

  test("Testowanie przy wpisaniu number", () => {
    expect(formatString(34)).toBe("system encountered wrong argument");
  });

  test("Testowanie przy stringu składającym się z 1 litery", () => {
    expect(formatString("z")).toBe(
      "string should consists of at least 2 characters"
    );
  });
});
