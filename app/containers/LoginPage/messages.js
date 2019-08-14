/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the LoginPage container!',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  signup: {
    id: `${scope}.signup`,
    defaultMessage: 'I dont have an account',
  },
  stringMinError: {
    id: `${scope}.stringMinError`,
    defaultMessage: 'text too short!',
  },
  stringMaxError: {
    id: `${scope}.stringMaxError`,
    defaultMessage: 'text too long!',
  },
  stringRequiredError: {
    id: `${scope}.stringRequiredError`,
    defaultMessage: 'Required',
  },
  stringEmailError: {
    id: `${scope}.stringEmailError`,
    defaultMessage: 'Invalid email',
  },
  passwordMinError: {
    id: `${scope}.passwordMinError`,
    defaultMessage: 'Password is too short - should be 8 chars minimum.',
  },
  badCredentials: {
    id: `${scope}.badCredentials`,
    defaultMessage: 'Unable to log in with provided credentials.',
  },
  registeredWithOtherMethod: {
    id: `${scope}.registeredWithOtherMethod`,
    defaultMessage:
      'This e-mail address was used with another login method. Please try your usual login option',
  },
});
