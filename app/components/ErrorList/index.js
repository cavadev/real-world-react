import React from 'react';
import PropTypes from 'prop-types';
import SnackbarContent from '@material-ui/core/SnackbarContent';

// Iterate over each message object and print them
// in an unordered list
function ErrorList(props) {
  const { errors } = props;
  return (
    <div>
      {errors.map(error => (
        <SnackbarContent key={error.time} message={error.body} />
      ))}
    </div>
  );
}

ErrorList.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      time: PropTypes.date,
    }),
  ),
};

export default ErrorList;
