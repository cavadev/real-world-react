/*
 * MainMenu Messages
 *
 * This contains all the text for the MainMenu component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.MainMenu';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MainMenu component!',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  signup: {
    id: `${scope}.signup`,
    defaultMessage: 'Signup',
  },
  signout: {
    id: `${scope}.signout`,
    defaultMessage: 'Signout',
  },
  noAuthenticated: {
    id: `${scope}.noAuthenticated`,
    defaultMessage: 'No Authenticated',
  },
});
