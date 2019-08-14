/*
 * SignupPage Messages
 *
 * This contains all the text for the SignupPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SignupPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the SignupPage container!',
  },
  firstName: {
    id: `${scope}.firstName`,
    defaultMessage: 'First Name',
  },
  lastName: {
    id: `${scope}.lastName`,
    defaultMessage: 'Last Name',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  consent: {
    id: `${scope}.consent`,
    defaultMessage: 'I read the Terms and Conditions',
  },
  createAccount: {
    id: `${scope}.createAccount`,
    defaultMessage: 'Create Account',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'I have an account',
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
  passwordEqualError: {
    id: `${scope}.passwordEqualError`,
    defaultMessage: 'Passwords are not the same!',
  },
  consentError: {
    id: `${scope}.consentError`,
    defaultMessage: 'You have to agree with our Terms and Conditions',
  },
});
