import React from 'react';
// BrowserRouter is to avoid error: not use <Link> outside a <Router>
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
