import { addTwoNumbers } from "./addTwoNumbers";

describe("Testowanie funkcji addTwoNumbers", () => {
  test("addTwoNumbers z poprawnymi argumentami", () => {
    const suma = addTwoNumbers(2, 2);
    expect(suma).toBe(4);
  });

  test("addTwoNumbers bez argumentów", () => {
    const suma = addTwoNumbers();
    expect(suma).toBe(NaN);
  });

  test("addTwoNumbers z jednym poprawnym argumentem", () => {
    const suma = addTwoNumbers(20);
    expect(suma).toBe(NaN);
  });

  test("Add two numbers z dziwnymi liczbami", () => {
    const suma = addTwoNumbers(0.5647282903, 0.101029938737);
    expect(suma).toBeCloseTo(0.6, 0.05);
  });

  // test("addTwoNumbers z NIEpoprawnymi argumentami")
  // test("addTwoNumbers z jednym poprawym argumentem")
});
