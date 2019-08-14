/*
 *
 * SignupPage reducer
 *
 */
import produce from 'immer';
import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';

export const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
};

/* eslint-disable default-case, no-param-reassign */
const signupPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGNUP_REQUESTING:
        draft.requesting = true;
        draft.successful = false;
        draft.messages.push({
          body: 'Signing up...',
          time: new Date(),
        });
        draft.errors = [];
        break;

      case SIGNUP_SUCCESS:
        draft.messages.push({
          body: `Successfully created account for ${
            action.response.user.email
          }`,
          time: new Date(),
        });
        draft.errors = [];
        draft.requesting = false;
        draft.successful = true;
        break;

      case SIGNUP_ERROR:
        draft.errors.push({
          body: action.error.toString(),
          time: new Date(),
        });
        draft.messages = [];
        draft.requesting = false;
        draft.successful = true;
        break;
    }
  });

export default signupPageReducer;
