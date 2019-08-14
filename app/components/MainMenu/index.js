/**
 *
 * MainMenu
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import MenuLink from 'components/css/MenuLink';
import LocaleToggle from 'containers/LocaleToggle';

import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';

import messages from './messages';

function MainMenu({ user, authenticated, onLogout }) {
  return (
    <div>
      {authenticated && (
        <div>
          <AccountCircle />
          <MenuLink to="/account"> {user.username}</MenuLink> |
          <Button onClick={onLogout}>
            <FormattedMessage {...messages.signout} />
          </Button>{' '}
          |
          <LocaleToggle />
        </div>
      )}
      {!authenticated && (
        <div>
          <AccountCircle />
          <span>
            <FormattedMessage {...messages.noAuthenticated} />
          </span>{' '}
          |
          <MenuLink to="/login">
            <FormattedMessage {...messages.login} />
          </MenuLink>{' '}
          |
          <MenuLink to="/signup">
            <FormattedMessage {...messages.signup} />
          </MenuLink>{' '}
          |
          <LocaleToggle />
        </div>
      )}
    </div>
  );
}

MainMenu.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
};

export default memo(MainMenu);
