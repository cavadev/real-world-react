/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },
  boilerplate: {
    id: `${scope}.boilerplate`,
    defaultMessage:
      'Example of real world project with ReactJS. The first commit of this project was built with ',
  },
  realWorld: {
    id: `${scope}.realWorld`,
    defaultMessage: 'You can see more of the project in ',
  },
  account: {
    id: `${scope}.account`,
    defaultMessage: 'The next page is only visible for logged users: ',
  },
});
