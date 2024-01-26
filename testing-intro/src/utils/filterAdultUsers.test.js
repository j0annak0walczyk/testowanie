import { filterAdultUsers } from "./filterAdultUsers";

describe("Testowanie filterAdultUsers", () => {
  test("Testowanie czy filtruje osoby, które mają co najmniej 18 lat", () => {
    const users = [
      {
        name: "John",
        lastName: "Doe",
        age: 18,
      },
      {
        lastName: "Doe",
        name: "Asia",
        age: 29,
      },
      {
        lastName: "Doe",
        name: "Kamil",
        age: 8,
      },
      {
        lastName: "Doe",
        name: "Ania",
        age: 17,
      },
    ];
    const filtered = filterAdultUsers(users);
    expect(filtered).toEqual([
      { age: 18, lastName: "Doe", name: "John" },
      { age: 29, lastName: "Doe", name: "Asia" },
    ]);

    // Tutaj odkryłam 2 bugi: 1)w if (Array.isArray(users)) oraz return users.filter(({ age }) => age > 18). W pierwszym dodałam zaprzeczenie (!), a w drugim >=
  });

  // Dlaczego ten test nie działa?
  test("Testowanie, czy przejdzie obiekt zamiast tablicy", () => {
    expect(() =>
      filterAdultUsers({
        lastName: "Doe",
        name: "Asia",
        age: 29,
      })
    ).toThrow();
  });

  // Dlaczego ten test nie działa?
  test("Testowanie, czy przejdzie number zamiast tablicy", () => {
    expect(() => filterAdultUsers(20)).toThrow();
  });

  test("Testowanie, gdy tablica jest pusta", () => {
    const users = [];
    expect(filterAdultUsers(users)).toBe("List of users is empty");
  });
});
