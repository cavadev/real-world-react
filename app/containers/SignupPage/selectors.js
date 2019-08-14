import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signupPage state domain
 */

const selectSignup = state => state.signupPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectRequesting = () =>
  createSelector(
    selectSignup,
    signupState => signupState.requesting,
  );

const makeSelectSuccessful = () =>
  createSelector(
    selectSignup,
    signupState => signupState.successful,
  );

const makeSelectMessages = () =>
  createSelector(
    selectSignup,
    signupState => signupState.messages,
  );

const makeSelectErrors = () =>
  createSelector(
    selectSignup,
    signupState => signupState.errors,
  );

/**
 * Default selector used by LoginPage
 */

const makeSelectSignupPage = () =>
  createSelector(
    selectSignup,
    signupState => signupState,
  );

export default makeSelectSignupPage;

export {
  selectSignup,
  makeSelectRequesting,
  makeSelectSuccessful,
  makeSelectMessages,
  makeSelectErrors,
};
