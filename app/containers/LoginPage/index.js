/**
 *
 * LoginPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Grid from '@material-ui/core/Grid';

import { loginRequest } from './actions';

import {
  makeSelectRequesting,
  makeSelectSuccessful,
  makeSelectMessages,
  makeSelectErrors,
} from './selectors';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import MyEnhancedForm from './form';

export function LoginPage(props) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  /*
  const {
    requesting,
    successful,
    stateMessages,
    stateErrors,
    onLoginRequest,
  } = props;
  */

  return (
    <div>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Description of LoginPage" />
      </Helmet>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={10} sm={6}>
          <FormattedMessage {...messages.header} />
        </Grid>
        <Grid item xs={9} sm={4}>
          <MyEnhancedForm {...props} />
        </Grid>
      </Grid>
    </div>
  );
}

LoginPage.propTypes = {
  props: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  requesting: makeSelectRequesting(),
  successful: makeSelectSuccessful(),
  stateMessages: makeSelectMessages(),
  stateErrors: makeSelectErrors(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoginRequest: values => {
      dispatch(loginRequest(values));
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
)(LoginPage);
