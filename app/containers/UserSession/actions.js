/*
 *
 * UserSession actions
 *
 */

import { USER_SET, USER_UNSET } from './constants';

/**
 * Sets a new user session
 *
 * @param  {string} user The new user object
 *
 * @param  {string} token The new user token
 *
 * @return {object} An action object with a type of USER_SET
 */
export function setUser(user, token) {
  return {
    type: USER_SET,
    user,
    token,
  };
}

/**
 * Unsets a user session
 *
 * @return {object} An action object with a type of USER_UNSET
 */
export function unsetUser() {
  return {
    type: USER_UNSET,
  };
}
