/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import StyledCard from 'components/css/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import messages from './messages';

export default function HomePage() {
  return (
    <div>
      <StyledCard>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <FormattedMessage {...messages.header} />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <FormattedMessage {...messages.boilerplate} />
            <a
              href="https://github.com/react-boilerplate/react-boilerplate"
              target="_blank"
            >
              [react-boilerplate]
            </a>
            .
            <br />
            <FormattedMessage {...messages.account} />
            <Link to="/account"> account</Link>
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://github.com/cavadev/real-world-react"
          >
            Github
          </Button>
        </CardActions>
      </StyledCard>
    </div>
  );
}
