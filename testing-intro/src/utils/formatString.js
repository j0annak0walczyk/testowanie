export const formatString = (string) => {
  if (typeof string !== "string") {
    return "system encountered wrong argument";
  }

  if (string.trim().length <= 2) {
    return "string should consists of at least 2 characters";
  }

  return string.split("").join(" ");
};
