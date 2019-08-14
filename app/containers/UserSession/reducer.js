/*
 *
 * UserSession reducer
 *
 */
import produce from 'immer';
import { USER_SET, USER_UNSET } from './constants';

export const initialState = {
  user: null,
  token: null,
  authenticated: false,
};

/* eslint-disable default-case, no-param-reassign */
const userSessionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case USER_SET:
        draft.user = action.user;
        draft.token = action.token;
        draft.authenticated = true;
        break;
      case USER_UNSET:
        draft.user = null;
        draft.token = null;
        draft.authenticated = false;
        break;
    }
  });

export default userSessionReducer;
