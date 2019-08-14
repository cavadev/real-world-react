/*
  Function to check if user token is valid (not expired)
*/

export function isAuthenticated(token) {
  // if it exists
  if (token) {
    // Note: If you blindly decode the payload of the token, without validating the signature,
    // you may (or may not) run into security issues
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonToken = JSON.parse(window.atob(base64));

    const now = new Date().getTime() / 1000;
    const expiry = jsonToken.exp;

    // if the token has expired return false
    if (now > expiry) return false;

    return true;
  }

  return false;
}
