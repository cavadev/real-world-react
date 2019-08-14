import { setUser } from '../actions';
import { USER_SET } from '../constants';

describe('UserSession actions', () => {
  describe('Set User', () => {
    it('has a type of USER_SET', () => {
      const expected = {
        type: USER_SET,
      };
      expect(setUser()).toEqual(expected);
    });
  });
});
