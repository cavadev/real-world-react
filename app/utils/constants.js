export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const SIGNUP_URL = `${process.env.BACKEND_URL}rest-auth/registration/`;
export const LOGIN_EMAIL_URL = `${process.env.BACKEND_URL}rest-auth/login/`;
export const LOGIN_FACEBOOK_URL = `${
  process.env.BACKEND_URL
}rest-auth/facebook/`;
export const LOGIN_GOOGLE_URL = `${process.env.BACKEND_URL}rest-auth/google/`;
