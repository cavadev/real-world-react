import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import history from 'utils/history';

import { makeSelectAuthenticated } from 'containers/UserSession/selectors';

// Functional component version
/*
const Wrapped = Component => props => {
  const { authenticated } = props;

  if (authenticated) {
    return <Component {...props} />;
  }
  setTimeout(() => {
    history.push('/');
  }, 3000);
  return <div>Only authorized users. You will be redirected to home page.</div>;
};
*/

// Class component version
/*
const Wrapped = Component => {
  class WithAuthentication extends React.Component {
    render() {
      console.log(this.props.authenticated);
      return (
        <div>
          { this.props.authenticated === true
            ? <Component {...this.props}/>
            : <div>Only authorized users.</div>
          }
        </div>
      )
    }
  }
  return WithAuthentication;
}
*/

// Functional component version with propTypes validation
const Wrapped = Component => {
  const EnhancedComponent = props => (
    <>
      {props.authenticated ? (
        <Component {...props} />
      ) : (
        setTimeout(() => {
          history.push('/');
        }, 3000) && (
          <div>Only authorized users. You will be redirected to home page.</div>
        )
      )}
    </>
  );

  EnhancedComponent.propTypes = {
    authenticated: PropTypes.bool,
  };

  return EnhancedComponent;
};

const mapStateToProps = createStructuredSelector({
  authenticated: makeSelectAuthenticated(),
});

export const withAuthentication = compose(
  connect(
    mapStateToProps,
    null,
  ),
  Wrapped,
); // Ref: https://bit.ly/2XXUh3N

export default withAuthentication;
// Use with redux: withAuthentication(ComponentComposed);
