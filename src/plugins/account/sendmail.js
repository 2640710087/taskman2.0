import { checkRule } from '../../config/env';
import { sendMail as send } from '../senddata';

export const sendMail = async email => {
  if (checkRule.email.test(email)) {
    return send({
      email
    })
  } else if (!checkRule.email.test(email)) {
    return new Promise((reslove) => {
      setTimeout(()=>{
        reslove({data:{code: 304}});
      }, 500);
    })
  }
}