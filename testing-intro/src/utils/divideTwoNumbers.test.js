import { divideTwoNumbers } from "./divideTwoNumbers";

describe("Testy do divideTwoNumbers", () => {
  test("divideTwoNumbers z dwoma porpawnymi argumentami", () => {
    const iloraz = divideTwoNumbers(10, 2);
    expect(iloraz).toBe(5);
  });

  test("czy argumenty są liczbami", () => {
    expect(divideTwoNumbers(20, "z")).toBe("Podane argumenty nie są liczbami");
  });

  test("divideTwoNumbers z jednym poprawnym argumentem", () => {
    const iloraz = divideTwoNumbers(10);
    expect(iloraz).toBe("Podane argumenty nie są liczbami");
  });

  test("divideTwoNumbers bez poprawnych argumentów", () => {
    const iloraz = divideTwoNumbers();
    expect(iloraz).toBe("Podane argumenty nie są liczbami");
  });

  test("dzielenie przez 0", () => {
    expect(() => divideTwoNumbers(20, 0)).toThrow();
  });
});
