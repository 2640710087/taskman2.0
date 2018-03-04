import { checkRule } from '../../config/env';
import encrpty from 'js-sha512';
import { login } from '../senddata';

const signIn = async data => {

  return new Promise(reslove => {
    if (
      (checkRule.email.test(data.username) ||
        checkRule.username.test(data.username)) &&
      checkRule.password.test(data.password)
    ) {
      
      let time = 0; //sign in time;
      let timer = setInterval(() => {
        time ++;
        //handle timeout
        if (time >= 1500) {
          clearInterval(timer);
          reslove({code: 501});
          // return;
        }
      }, 10);

      login({
        username: data.username,
        password: encrpty(data.password)
      }).then(res => {
        clearInterval(timer);// cancel timer;
        if (time < 100) {
          setTimeout(() => {
            console.log(res);
            reslove(res);
          }, 10 * (100 - time));
        }else {
          reslove(res);
        }
      });
    }else {
      setTimeout(() => {
        reslove({code: 401});
      }, 1000)
    }
  })
};

export default signIn;
