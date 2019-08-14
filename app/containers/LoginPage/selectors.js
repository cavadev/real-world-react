import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLogin = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectRequesting = () =>
  createSelector(
    selectLogin,
    loginState => loginState.requesting,
  );

const makeSelectSuccessful = () =>
  createSelector(
    selectLogin,
    loginState => loginState.successful,
  );

const makeSelectMessages = () =>
  createSelector(
    selectLogin,
    loginState => loginState.messages,
  );

const makeSelectErrors = () =>
  createSelector(
    selectLogin,
    loginState => loginState.errors,
  );

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(
    selectLogin,
    loginState => loginState,
  );

export default makeSelectLoginPage;

export {
  selectLogin,
  makeSelectRequesting,
  makeSelectSuccessful,
  makeSelectMessages,
  makeSelectErrors,
};
