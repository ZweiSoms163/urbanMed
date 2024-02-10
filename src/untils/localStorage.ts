export const loadUsersFromLocalStorage = () => {
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    return JSON.parse(storedUsers);
  }
  return [];
};

export const saveUsersToLocalStorage = (users: any) => {
  localStorage.setItem('users', JSON.stringify(users));
};
