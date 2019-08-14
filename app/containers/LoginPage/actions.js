/*
 *
 * LoginPage actions
 *
 */

import { LOGIN_REQUESTING } from './constants';

// In order to perform an action of type LOGIN_REQUESTING
// we need an email and password
export function loginRequest({ provider, payload }) {
  return {
    type: LOGIN_REQUESTING,
    provider,
    payload,
  };
}
