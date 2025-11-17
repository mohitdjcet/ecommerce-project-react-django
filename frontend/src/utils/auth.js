// src/utils/auth.js
export const saveTokens = (tokens) => {
  localStorage.setItem("access_token", tokens.access);
  localStorage.setItem("refresh_token", tokens.refresh);
};

export const clearTokens = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export const getAccessToken = () => localStorage.getItem("access_token");

export const authFetch = (url, options = {}) => {
  const token = getAccessToken();
  const headers = options.headers ? {...options.headers} : {};
  if (token) headers['Authorization'] = `Bearer ${token}`;
  headers['Content-Type'] = headers['Content-Type'] || 'application/json';
  return fetch(url, {...options, headers});
};
