// import produce from 'immer';
import signupPageReducer from '../reducer';
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('signupPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      errors: [],
      messages: [],
      requesting: false,
      successful: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(signupPageReducer(undefined, {})).toEqual(expectedResult);
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
