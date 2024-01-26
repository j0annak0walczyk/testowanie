import { convertTemperature } from "./convertTemperature";

describe("Testowanie convertTemperature", () => {
  test("Zamiana C na F", () => {
    const temp = convertTemperature(50, "Celsius", "Fahrenheit");
    expect(temp).toBe(122);
  });

  test("Zamiana F na C", () => {
    const temp = convertTemperature(50, "Fahrenheit", "Celsius");
    expect(temp).toBe(10);
  });

  test("Inna jednostka", () => {
    expect(() => convertTemperature(50, "Celsius", "Fahekshaols")).toThrow();
  });

  test("Liczba jako string", () => {
    const temp = convertTemperature("50", "Fahrenheit", "Celsius");
    expect(temp).toBe(10);
  });

  // Czy tutaj powinniśmy oczekiwać NaN czy powinna być funkcja tak zrobiona, żeby wyświetlał się Error?
  test("Inny string zamiast liczby", () => {
    expect(convertTemperature("sedfcqwed", "Fahrenheit", "Celsius")).toBe(NaN);
  });

  /// Dlaczego tutaj musi być expect(() => convertTemperature("50", "Celsius")), a nie może być w expect przekazana wartość temp?
  test("Brak jednego argumentu", () => {
    expect(() => convertTemperature("50", "Celsius")).toThrow();
  });
});
