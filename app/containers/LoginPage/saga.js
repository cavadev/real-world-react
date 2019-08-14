import { take, fork, cancel, call, put } from 'redux-saga/effects';
// We'll use this function to redirect to different routes based on cases
import { push } from 'connected-react-router/immutable';
import { handleApiErrors } from 'utils/apiErrors';

import { USER_UNSET } from 'containers/UserSession/constants';
import {
  LOGIN_EMAIL_URL,
  LOGIN_FACEBOOK_URL,
  LOGIN_GOOGLE_URL,
} from 'utils/constants';
// So that we can modify our User piece of state
import { setUser, unsetUser } from 'containers/UserSession/actions';
// Our login constants
import { LOGIN_REQUESTING, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

function login(provider, payload) {
  let loginUrl = '';
  let body = '';
  if (provider === 'email') {
    loginUrl = LOGIN_EMAIL_URL;
    body = JSON.stringify({ email: payload.email, password: payload.password });
  } else if (provider === 'facebook') {
    loginUrl = LOGIN_FACEBOOK_URL;
    body = JSON.stringify({ access_token: payload.accessToken });
  } else if (provider === 'google') {
    loginUrl = LOGIN_GOOGLE_URL;
    body = JSON.stringify({ access_token: payload.accessToken });
  }

  // Call to the "fetch". This is a "native" function for browsers.
  return fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
    .then(response => {
      if (response.ok) return response.json();
      return response.json().then(data => handleApiErrors(data));
    })
    .catch(error => {
      throw error;
    });
}

function* logout() {
  // dispatches the USER_UNSET action
  yield put(unsetUser());

  // redirect to the /login screen
  // yield call(history.push, '/login')
}

function* loginFlow(provider, payload) {
  let user;
  try {
    // try to call to our login() function.  Redux Saga
    // will pause here until we either are successful or
    // receive an error
    user = yield call(login, provider, payload);

    // inform Redux to set our user and his token, this is non blocking so...
    yield put(setUser(user.user, user.token));

    // .. also inform redux that our login was successful
    yield put({ type: LOGIN_SUCCESS });

    // redirect them to home!
    // yield call(history.push, '/account') //work (other option)
    yield put(push('/account'));
  } catch (error) {
    // error? send it to redux
    yield put({ type: LOGIN_ERROR, error: error.message });
  } finally {
    // No matter what, if our `forked` `task` was cancelled
    // we will then just redirect them to login
    /*
    if (yield cancelled()) { // Check because it always runs
      yield call(history.push, '/login')
    }
    */
  }

  // return the token for health and wealth
  return user;
}

function* loginWatcher() {
  while (true) {
    const { provider, payload } = yield take(LOGIN_REQUESTING);

    const task = yield fork(loginFlow, provider, payload);

    const action = yield take([USER_UNSET, LOGIN_ERROR]);

    if (action.type === USER_UNSET) yield cancel(task);

    yield call(logout);
  }
}

export default loginWatcher;
