/*
 because Fetch doesn't recognize error responses as
 actual errors since it's technically completing the response...
*/

export function handleApiErrors(responseJson) {
  /*
  Backend response (DRF) is an object where every property name is the error type and the value
  is an array of string errors, so we will concatenate all these errors in one string.
  i.e.
  {
    "non_field_errors": ["Unable to log in with provided credentials."]
  }
  */
  const errors = [];
  for (const key of Object.keys(responseJson)) {
    let error = '';
    if (Array.isArray(responseJson[key])) {
      if (responseJson[key].length === 1) {
        error = responseJson[key];
      } else {
        responseJson[key].map(element => {
          error = `${error}, ${element}`;
          return element;
        });
      }
    } else error = responseJson[key];
    errors.push(error);
  }
  // Throw exception work with only one string, so this error array will be transformed.
  throw Error(errors);
}
