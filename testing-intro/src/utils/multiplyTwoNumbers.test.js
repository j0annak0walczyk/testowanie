import { multiplyTwoNumbers } from "./multiplyTwoNumbers";

describe("Testowanie multiplyTwoNumbers", () => {
  test("Testowanie poprawnie wpisanych liczb", () => {
    expect(multiplyTwoNumbers(2, 5)).toBe(10);
  });

  test("Testowanie brak jednego argumentu", () => {
    expect(multiplyTwoNumbers(2)).toBe(NaN);
  });

  test("Testowanie jedna liczba jest stringiem", () => {
    expect(multiplyTwoNumbers(2, "5")).toBe(10);
  });

  test("Testowanie jeden argument jest stringiem", () => {
    expect(multiplyTwoNumbers(2, "zzz")).toBe(NaN);
  });
});
