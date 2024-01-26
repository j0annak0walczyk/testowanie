import { calculateTwoNumbers } from "./calculateTwoNumbers";

describe("Testowanie calculateTwoNumbers", () => {
  test("Dodawanie dwóch liczb", () => {
    const suma = calculateTwoNumbers(2, 7, "+");
    expect(suma).toBe(9);
  });

  test("Odejmowanie dwóch liczb", () => {
    const roznica = calculateTwoNumbers(7, 5, "-");
    expect(roznica).toBe(2);
  });

  test("Mnożenie dwóch liczb", () => {
    const iloczyn = calculateTwoNumbers(5, 3, "*");
    expect(iloczyn).toBe(15);
  });

  test("Dzielenie dwóch liczb", () => {
    const iloraz = calculateTwoNumbers(16, 2, "/");
    expect(iloraz).toBe(8);
  });

  test("dzielenie przez 0", () => {
    expect(() => calculateTwoNumbers(20, 0, "/")).toThrow();
  });

  test("Brak znaku działania", () => {
    expect(calculateTwoNumbers(2, 4)).toBe(undefined);
  });

  test("Brak jednej z liczb", () => {
    expect(calculateTwoNumbers(2, "*")).toBe(undefined);
  });

  test("String zamiast jednej liczby", () => {
    expect(calculateTwoNumbers(2, "z", "*")).toBe(NaN);
  });

  test("Inny znak działania", () => {
    expect(calculateTwoNumbers(4, 5, "&")).toBe(undefined);
  });
});
