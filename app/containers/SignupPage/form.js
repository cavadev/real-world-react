import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withFormik, Field } from 'formik';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';
import ErrorList from 'components/ErrorList';

import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';

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
            error={Boolean(errors.firstName) && touched.firstName}
            helperText={
              Boolean(errors.firstName) && touched.firstName
                ? errors.firstName
                : ''
            }
            id="firstName"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            label={<FormattedMessage {...messages.firstName} />}
            margin="normal"
            name="firstName"
            onChange={handleChange}
            placeholder="..."
            style={{ margin: 8 }}
            value={values.firstName}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Field
            component={TextField}
            error={Boolean(errors.lastName) && touched.lastName}
            helperText={
              Boolean(errors.lastName) && touched.lastName
                ? errors.lastName
                : ''
            }
            id="lastName"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            label={<FormattedMessage {...messages.lastName} />}
            margin="normal"
            name="lastName"
            onChange={handleChange}
            placeholder="..."
            style={{ margin: 8 }}
            value={values.lastName}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Field
            component={TextField}
            error={Boolean(errors.email) && touched.email}
            helperText={
              Boolean(errors.email) && touched.email ? errors.email : ''
            }
            id="email"
            InputLabelProps={{
              shrink: true,
            }}
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
            error={Boolean(errors.password1) && touched.password1}
            helperText={
              Boolean(errors.password1) && touched.password1
                ? errors.password1
                : ''
            }
            id="password1"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            label={<FormattedMessage {...messages.password} />}
            margin="normal"
            name="password1"
            onChange={handleChange}
            placeholder="*******"
            type="password"
            style={{ margin: 8 }}
            value={values.password1}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Field
            component={TextField}
            error={Boolean(errors.password2) && touched.password2}
            helperText={
              Boolean(errors.password2) && touched.password2
                ? errors.password2
                : ''
            }
            id="password2"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            label={<FormattedMessage {...messages.password} />}
            margin="normal"
            name="password2"
            onChange={handleChange}
            placeholder="*******"
            type="password"
            style={{ margin: 8 }}
            value={values.password2}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
          <FormattedMessage {...messages.consent} />
          <Field
            color="primary"
            component={Checkbox}
            id="consent"
            name="consent"
            onChange={handleChange}
            type="checkbox"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          style={{ textAlign: 'center', padding: '10px 0px' }}
        >
          {errors.consent && <SnackbarContent message={errors.consent} />}
        </Grid>
        <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
          <Fab
            variant="extended"
            aria-label="create-account"
            type="submit"
            disabled={isSubmitting}
            color="primary"
          >
            <FormattedMessage {...messages.createAccount} />
          </Fab>
          <Button color="primary" component={Link} to="/login">
            <FormattedMessage {...messages.login} />
          </Button>
        </Grid>
        <Grid item xs={12} sm={10}>
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
};

Yup.setLocale({
  string: {
    min: <FormattedMessage {...messages.stringMinError} />,
    max: <FormattedMessage {...messages.stringMaxError} />,
    // required: <FormattedMessage {...messages.stringRequiredError} />, //dont work
  },
  bool: {},
});

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2)
    .max(50)
    .required(<FormattedMessage {...messages.stringRequiredError} />),
  lastName: Yup.string()
    .min(2)
    .max(50)
    .required(<FormattedMessage {...messages.stringRequiredError} />),
  email: Yup.string()
    .email(<FormattedMessage {...messages.stringEmailError} />)
    .required(<FormattedMessage {...messages.stringRequiredError} />),
  password1: Yup.string()
    .min(8, <FormattedMessage {...messages.passwordMinError} />)
    .required(<FormattedMessage {...messages.stringRequiredError} />),
  password2: Yup.string()
    .oneOf(
      [Yup.ref('password1'), null],
      <FormattedMessage {...messages.passwordEqualError} />,
    )
    .required(<FormattedMessage {...messages.stringRequiredError} />),
  consent: Yup.bool()
    .test(
      'consent',
      <FormattedMessage {...messages.consentError} />,
      value => value === true,
    )
    .required(<FormattedMessage {...messages.consentError} />),
});

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: '',
    consent: false,
  }),
  // Custom sync validation
  /*
  validate: values => {
    const errors = {};
    if(!values.firstName) {
      errors.firstName = 'Required';
    }
    return errors;
  },
  */
  validationSchema: SignupSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    // console.log(JSON.stringify(values, null, 2));
    props.onSignupRequest(values);
    setSubmitting(false);
  },
  displayName: 'BasicForm',
})(MyForm);

export default MyEnhancedForm;
