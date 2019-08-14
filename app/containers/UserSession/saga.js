import { take, call } from 'redux-saga/effects';

import { USER_SET, USER_UNSET } from './constants';

function login() {
  /*
  The reducer save the user and token in the redux global state
  (when the action 'USER_SET' is triggered), so are not necessary other actions.
  */
}

function logout() {
  /*
    The reducer delete the user and token in the redux global state
    (when the action 'USER_UNSET' is triggered), so are not necessary other actions.
    the withAuthentication HOC is responsible for verifying user permissions
  */
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* userSessionWatcher() {
  while (true) {
    const action = yield take([USER_SET, USER_UNSET]);
    // if (action.type === USER_SET) yield call(login, action.user, action.token);
    if (action.type === USER_SET) yield call(login); // to ESLint validation
    if (action.type === USER_UNSET) yield call(logout);
  }
}
