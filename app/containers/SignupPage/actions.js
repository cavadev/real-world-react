/*
 *
 * SignupPage actions
 *
 */

import { SIGNUP_REQUESTING } from './constants';

export function signupRequest({
  firstName,
  lastName,
  email,
  password1,
  password2,
}) {
  return {
    type: SIGNUP_REQUESTING,
    firstName,
    lastName,
    email,
    password1,
    password2,
  };
}
