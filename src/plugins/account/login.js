import { checkRule } from '../../config/env';
import encrpty from 'js-sha512';
import { login } from '../senddata';

const signIn = async data => {
  if (
    (checkRule.email.test(data.username) ||
      checkRule.username.test(data.username)) &&
    checkRule.password.test(data.password)
  ) {
    return login({
      username: data.username,
      password: encrpty(data.password)
    });
  }else {
    return {error: 401}
  }
};

export default signIn;
