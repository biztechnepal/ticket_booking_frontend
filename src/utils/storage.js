import cookie from "cookie";
import Cookies from 'js-cookie'
class storage {
    // static set(key, items) {
    //     localStorage.set(key, JSON.stringify(items))
    // }
    // static get(key) {
    //     return localStorage.get(key)
    // }

    // static remove(key) {
    //     return localStorage.delete(key)
    // }

    static parseCookies(req) {
        return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
    }

    static getTokenFromCookies() {
        const token = Cookies.get("_autht");
        return token !== undefined ? token : "";
    }

    static getUserFromCookies() {
        const user = Cookies.get("_user")
        return user !== undefined ? user : "";
    }
    static setCookies(key,value) {
        return Cookies.set(key,value,{sameSite: 'strict', secure: true});
    }
    static delCookies(key) {
        return Cookies.remove(key);
    }

}

export default storage