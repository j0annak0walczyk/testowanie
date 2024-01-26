import { subtractTwoNumbers } from "./subtractTwoNumbers";

describe("Testowanie subtractTwoNumbers", () => {
  test("Testowanie poprawnie wpisanych liczb", () => {
    expect(subtractTwoNumbers(2, 5)).toBe(-3);
  });

  test("Testowanie brak jednego argumentu", () => {
    expect(subtractTwoNumbers(2)).toBe(NaN);
  });

  test("Testowanie jedna liczba jest stringiem", () => {
    expect(subtractTwoNumbers(11, "5")).toBe(6);
  });

  test("Testowanie jeden argument jest stringiem", () => {
    expect(subtractTwoNumbers(2, "zzz")).toBe(NaN);
  });
});
