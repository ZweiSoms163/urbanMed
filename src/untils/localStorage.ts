import { User } from "../redux/types";

export const loadUsersFromLocalStorage = () => {
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    return JSON.parse(storedUsers);
  }
  return [];
};

export const saveUsersToLocalStorage = (users: User[]) => {
  localStorage.setItem('users', JSON.stringify(users));
};



