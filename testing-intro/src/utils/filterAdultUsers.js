export const filterAdultUsers = (users) => {
  return users.filter(({ age }) => age > 18);
};
