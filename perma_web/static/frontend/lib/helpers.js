// via https://javascript.info/cookie#getcookie-name
// document.cookie returns a semicolon-separated list of all cookies
// this function uses regexp to dynamically generate a pattern to capture and decode the value of a cookie based on its unique name
export function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export const sleep = ms => new Promise(r => setTimeout(r, ms));
