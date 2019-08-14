import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  makeSelectUser,
  makeSelectAuthenticated,
} from 'containers/UserSession/selectors';

/*
const Wrapped = (Component, requiredRol) => props => {
  const { user, authenticated } = props;
  if (authenticated && user.roles.indexOf(requiredRol) >= 0) {
    return <Component {...props} />;
  }
  return <div>Only authorized users.</div>;
};
*/

const Wrapped = (Component, requiredRol) => {
  const EnhancedComponent = props => (
    <>
      {props.authenticated && props.user.roles.indexOf(requiredRol) >= 0 ? (
        <Component {...props} />
      ) : (
        <div>Only authorized users.</div>
      )}
    </>
  );

  EnhancedComponent.propTypes = {
    user: PropTypes.object,
    authenticated: PropTypes.bool,
  };

  return EnhancedComponent;
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  authenticated: makeSelectAuthenticated(),
});

export const withAuthorization = compose(
  connect(
    mapStateToProps,
    null,
  ),
  Wrapped,
); // Ref: https://bit.ly/2XXUh3N

export default withAuthorization;
// Use with redux: withAuthorization(ComponentComposed, requiredRol);
