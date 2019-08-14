/**
 *
 * AccountPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import StyledCard from 'components/css/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import withAuthentication from 'containers/UserSession/withAuthentication';

import messages from './messages';
// import { REQUIRED_ROL } from './constants';

export function AccountPage() {
  return (
    <div>
      <Helmet>
        <title>AccountPage</title>
        <meta name="description" content="Description of AccountPage" />
      </Helmet>
      <StyledCard>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <FormattedMessage {...messages.header} />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <FormattedMessage {...messages.body} />
          </Typography>
        </CardContent>
      </StyledCard>
    </div>
  );
}

AccountPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export const AccountPageComposed = compose(
  withConnect,
  memo,
)(AccountPage);

// const requiredRol = REQUIRED_ROL;
// export default withAuthorization(AccountPageComposed, requiredRol);

export default withAuthentication(AccountPageComposed);
