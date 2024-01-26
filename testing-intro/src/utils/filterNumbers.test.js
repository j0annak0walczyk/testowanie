import { filterNumbers } from "./filterNumbers";

describe("Testowanie filterNumbers", () => {
  test("sprawdzanie czy elementy są numberami", () => {
    const filtered = filterNumbers([20, "ss", 45, "z"]);
    expect(filtered).toEqual([20, 45]);
  });

  test("sprawdzanie długości tablicy", () => {
    const arrayLength = [20, "ss", 45, "z"].length;
    const arrayLengthFiltered = filterNumbers([20, "ss", 45, "z"]).length;
    expect(arrayLength >= arrayLengthFiltered).toBe(true);
  });
});
