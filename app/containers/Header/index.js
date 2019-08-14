/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import RootDiv from 'components/css/RootDiv';
import MenuLink from 'components/css/MenuLink';
import MainMenu from 'components/MainMenu';

import {
  makeSelectUser,
  makeSelectAuthenticated,
} from 'containers/UserSession/selectors';
import { unsetUser } from 'containers/UserSession/actions';

function Header({ user, authenticated, onLogout }) {
  return (
    <RootDiv>
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={4} sm={2}>
              <Typography variant="h6" color="inherit" noWrap>
                <MenuLink to="/">Real World React</MenuLink>
              </Typography>
            </Grid>
            <Grid item xs={8} sm={10}>
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
              >
                <MainMenu
                  user={user}
                  authenticated={authenticated}
                  onLogout={onLogout}
                />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </RootDiv>
  );
}

Header.propTypes = {
  user: PropTypes.object,
  authenticated: PropTypes.bool,
  onLogout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  authenticated: makeSelectAuthenticated(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => {
      dispatch(unsetUser());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
