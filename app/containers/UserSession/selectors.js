/**
 * UserSession selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUserSession = state => state.userSession || initialState;

const makeSelectUser = () =>
  createSelector(
    selectUserSession,
    userSessionState => userSessionState.user,
  );

const makeSelectToken = () =>
  createSelector(
    selectUserSession,
    userSessionState => userSessionState.token,
  );

const makeSelectAuthenticated = () =>
  createSelector(
    selectUserSession,
    userSessionState => userSessionState.authenticated,
  );

export {
  selectUserSession,
  makeSelectUser,
  makeSelectToken,
  makeSelectAuthenticated,
};
