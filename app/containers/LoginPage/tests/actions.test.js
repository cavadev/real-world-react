import { loginRequest } from '../actions';
import { LOGIN_REQUESTING } from '../constants';

describe('LoginPage actions', () => {
  describe('loginRequest Action', () => {
    it('has a type of LOGIN_REQUESTING', () => {
      const provider = 'email';
      const payload = {
        mail: 'username@example.com',
        password: '123',
      };
      const expected = {
        type: LOGIN_REQUESTING,
        provider,
        payload,
      };
      expect(loginRequest({ provider, payload })).toEqual(expected);
    });
  });
});
