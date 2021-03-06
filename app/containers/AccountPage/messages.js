/*
 * AccountPage Messages
 *
 * This contains all the text for the AccountPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AccountPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the AccountPage container!',
  },
  body: {
    id: `${scope}.body`,
    defaultMessage:
      'You are seeing this section because you are succesfully logged.',
  },
});
