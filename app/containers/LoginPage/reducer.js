/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

export const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // Set the requesting flag and append a message to be shown
      case LOGIN_REQUESTING:
        draft.requesting = true;
        draft.successful = false;
        draft.messages.push({
          body: 'Logging up...',
          time: new Date(),
        });
        draft.errors = [];
        break;

      // Successful?  Reset the login state.
      case LOGIN_SUCCESS:
        draft.errors = [];
        draft.messages = [];
        draft.requesting = false;
        draft.successful = true;
        break;

      // Append the error returned from our api
      // set the success and requesting flags to false
      case LOGIN_ERROR:
        draft.errors.push({
          body: action.error.toString(),
          time: new Date(),
        });
        draft.messages = [];
        draft.requesting = false;
        draft.successful = false;
        break;
    }
  });

export default loginPageReducer;
