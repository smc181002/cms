import {browser} from '$app/env';

export function getCookieValueByName(name) {
  if(browser) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : "";
  }
}

export const cookiePromise = new Promise(resolve => {resolve(getCookieValueByName("user"))},);
