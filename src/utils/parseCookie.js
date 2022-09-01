import cookie from "cookie";
import Cookies from "js-cookie";

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

export function getStoredToken() {
  const token = Cookies.get("_autht");
  return token !== undefined ? token : "";
}

export function getStoredUser() {
  const user = Cookies.get("_user")
  return user !== undefined ? user : "";
}