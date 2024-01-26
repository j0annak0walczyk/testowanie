import { compareTwoObjects } from "./compareTwoObjects";

const obiekt1 = {
  name: "John",
  lastName: "Doe",
};

const obiekt2 = {
  lastName: "Doe",
  name: "John",
};

describe("Test funkcji porównującej", () => {
  test("Porównanie poprawnych obiektów", () => {
    // const result = compareTwoObjects(obiekt1, obiekt2);
    // expect(result).toBe(true);
    expect(obiekt1).toEqual(obiekt2);
  });
});
