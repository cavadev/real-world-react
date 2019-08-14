/**
 *
 * Tests for UserSession
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { render } from 'react-testing-library';

import configureStore from '../../../configureStore';

import { UserSession } from '../index';

describe('<UserSession />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('Expect to not log errors in console', () => {
    const mockUnsetUserFn = jest.fn();
    const spy = jest.spyOn(global.console, 'error');
    render(
      <Provider store={store}>
        <UserSession user={{}} token="" unsetUserProp={mockUnsetUserFn} />
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(true);
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<UserSession />);
    expect(firstChild).toMatchSnapshot();
  });
});
