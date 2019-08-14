/**
 *
 * UserSession
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { isAuthenticated } from 'utils/auth';
import { makeSelectUser, makeSelectToken } from './selectors';
import { unsetUser } from './actions';
import reducer from './reducer';
import saga from './saga';

export function UserSession({ user, token, unsetUserProp }) {
  useInjectReducer({ key: 'userSession', reducer });
  useInjectSaga({ key: 'userSession', saga });

  useEffect(() => {
    if (!isAuthenticated(token) && (user || token)) unsetUserProp();
  }, []);

  return <div />;
}

UserSession.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
  unsetUserProp: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  token: makeSelectToken(),
});

function mapDispatchToProps(dispatch) {
  return {
    unsetUserProp: () => {
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
)(UserSession);
