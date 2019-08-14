import { signupRequest } from '../actions';
import { SIGNUP_REQUESTING } from '../constants';

describe('SignupPage actions', () => {
  describe('signupRequest Action', () => {
    it('has a type of SIGNUP_REQUESTING', () => {
      const payload = {
        firstName: 'first',
        lastName: 'last',
        email: 'username@example.com',
        password1: '123',
        password2: '123',
      };
      const expected = {
        type: SIGNUP_REQUESTING,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password1: payload.password1,
        password2: payload.password2,
      };
      expect(signupRequest(payload)).toEqual(expected);
    });
  });
});
