export const TOKEN_KEY = 'custom-auth-token';
export const USER_ID = 'user-id';

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setUserId = (id: string) => {
  localStorage.setItem(USER_ID, id);
};

export const getUserId = () => {
  return localStorage.getItem(USER_ID);
};

export const isLoggedIn = () => {
  return Boolean(getToken());
};
