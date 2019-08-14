import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router/immutable';
import { handleApiErrors } from 'utils/apiErrors';

import { USER_SET } from 'containers/UserSession/constants';
import { SIGNUP_URL } from 'utils/constants';
import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';

function signupApi(user) {
  // Call to the "fetch".  this is a "native" function for browsers
  // That's conveniently polyfilled in create-react-app if not available
  return fetch(SIGNUP_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => {
      if (response.ok) return response.json();
      return response.json().then(data => handleApiErrors(data));
    })
    .catch(error => {
      throw error;
    });
}

// This will be run when the SIGNUP_REQUESTING
// Action is found by the watcher
function* signupFlow(action) {
  try {
    const { firstName, lastName, email, password1, password2 } = action;
    const user = {
      first_name: firstName,
      last_name: lastName,
      email,
      password1,
      password2,
    };
    // pulls "calls" to our signupApi with our new user
    // from our dispatched signup action, and will PAUSE
    // here until the API async function, is complete!
    const response = yield call(signupApi, user);

    // when the above api call has completed it will "put",
    // or dispatch, an action of type SIGNUP_SUCCESS with
    // the successful response.
    yield put({ type: SIGNUP_SUCCESS, response });

    // and we can dispatch the USER_SET action as well
    yield put({ type: USER_SET, user: response.user, token: response.token });

    // all is fine
    yield put(push('/'));
    // history.push('/')
  } catch (error) {
    // if the api call fails, it will "put" the SIGNUP_ERROR
    // into the dispatch along with the error.
    yield put({ type: SIGNUP_ERROR, error: error.message });

    /* 'throw Error(object)' convert all types of objects to string (array will convert to string with ','), so we cant use the next function
    if(Array.isArray(error)) {
      yield error.map(element => {
        put({ type: SIGNUP_ERROR, element})
        return element;
      });
    } else {
      yield put({ type: SIGNUP_ERROR, error })
    }
    */
  }
}

// Watches for the SIGNUP_REQUESTING action type
// When it gets it, it will call signupFlow()
// WITH the action we dispatched
function* signupWatcher() {
  // takeLatest() takes the LATEST call of that action and runs it
  // if we we're to use takeEvery, it would take every single
  // one of the actions and kick off a new task to handle it
  // CONCURRENTLY!!!
  yield takeLatest(SIGNUP_REQUESTING, signupFlow);
}

export default signupWatcher;
