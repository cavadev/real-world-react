import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withFormik, Field } from 'formik';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';

import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import ErrorList from 'components/ErrorList';

import messages from './messages';

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    stateErrors,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={12}>
          <Field
            component={TextField}
            error={Boolean(errors.email) && touched.email}
            helperText={
              Boolean(errors.email) && touched.email ? errors.email : ''
            }
            id="email"
            InputLabelProps={{ shrink: true }}
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            onChange={handleChange}
            placeholder="..."
            style={{ margin: 8 }}
            type="email"
            value={values.email}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Field
            component={TextField}
            error={Boolean(errors.password) && touched.password}
            helperText={
              Boolean(errors.password) && touched.password
                ? errors.password
                : ''
            }
            id="password"
            InputLabelProps={{ shrink: true }}
            fullWidth
            label={<FormattedMessage {...messages.password} />}
            margin="normal"
            name="password"
            onChange={handleChange}
            placeholder="*******"
            type="password"
            style={{ margin: 8 }}
            value={values.password}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
          <Fab
            variant="extended"
            aria-label="login"
            type="submit"
            disabled={isSubmitting}
            color="primary"
          >
            <FormattedMessage {...messages.login} />
          </Fab>
          <Button color="primary" component={Link} to="/signup">
            <FormattedMessage {...messages.signup} />
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          style={{ textAlign: 'center', padding: '10px 0px' }}
        >
          <FacebookLogin
            appId={process.env.FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name,email,picture,birthday"
            callback={response =>
              props.onLoginRequest({
                provider: 'facebook',
                payload: { accessToken: response.accessToken },
              })
            }
            render={renderProps => (
              <Button
                onClick={renderProps.onClick}
                variant="outlined"
                color="primary"
              >
                Login with Facebook
              </Button>
            )}
          />
          &nbsp;
          <GoogleLogin
            clientId={process.env.GOOGLE_APP_ID}
            render={renderProps => (
              <Button
                onClick={renderProps.onClick}
                variant="outlined"
                color="primary"
              >
                Login with Google
              </Button>
            )}
            onSuccess={response =>
              props.onLoginRequest({
                provider: 'google',
                payload: {
                  accessToken: response.accessToken,
                },
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <br />
          <ErrorList errors={stateErrors} />
        </Grid>
      </Grid>
    </form>
  );
};

MyForm.propTypes = {
  values: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  stateErrors: PropTypes.array,
  onLoginRequest: PropTypes.func,
};

Yup.setLocale({
  string: {
    min: <FormattedMessage {...messages.stringMinError} />,
    max: <FormattedMessage {...messages.stringMaxError} />,
    // required: <FormattedMessage {...messages.stringRequiredError} />, //dont work
  },
});

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(<FormattedMessage {...messages.stringEmailError} />)
    .required(<FormattedMessage {...messages.stringRequiredError} />),
  password: Yup.string()
    .min(8, <FormattedMessage {...messages.passwordMinError} />)
    .required(<FormattedMessage {...messages.stringRequiredError} />),
});

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  // Custom sync validation
  /*
  validate: values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    return errors;
  },
  */
  validationSchema: LoginSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onLoginRequest({ provider: 'email', payload: values });
    setSubmitting(false);
  },
  displayName: 'BasicForm',
})(MyForm);

export default MyEnhancedForm;
