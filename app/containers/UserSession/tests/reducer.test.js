// import produce from 'immer';
import userSessionReducer from '../reducer';
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('userSessionReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      authenticated: false,
      token: null,
      user: null,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(userSessionReducer(undefined, {})).toEqual(expectedResult);
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
