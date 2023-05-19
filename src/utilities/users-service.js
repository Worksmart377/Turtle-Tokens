import * as userAPI from "./users-api";


export async function login(credentials) {
    const token = await userAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
}

export function logOut() {
    localStorage.removeItem('token');
};


export async function signUp(userData) {
  const token = await userAPI.signUp(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export function getToken() {
  // attempt get the tokem from localstorage
  const token = localStorage.getItem("token");
  if (!token) return null;
  // if a token is retrieved
  // decode the payload from the token so we can check if it's still valid
  const payload = JSON.parse(atob(token.split(".")[1]));
  // (check if it's expired or not)
  if (payload.exp < Date.now() / 1000) {
    // remove the token from localstorage
    localStorage.removeItem("token");
    return null;
  }
  // if still valid, we return the retrieved token
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}


export function checkToken() {
  // Just so that you don't forget how to use.then
  return (
    userAPI
      .checkToken()
      // checkToken returns a string, but let's
      // make it a Date object for more flexibility
      .then((dateStr) => new Date(dateStr))
  );
}