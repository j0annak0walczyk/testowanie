export const divideTwoNumbers = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Podane argumenty nie są liczbami";
  }
  if (b === 0) {
    throw new Error("Nie dziel przez 0");
  } else {
    return a / b;
  }
};
