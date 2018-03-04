import { checkRule } from "../../config/env";
import { sendMail as send } from "../senddata";

export const sendMail = async email => {
  return new Promise(reslove => {
    if (checkRule.email.test(email)) {
      let time = 0; //sign in time;
      let timer = setInterval(() => {
        time++;
        //handle timeout
        if (time >= 1500) {
          clearInterval(timer);
          reslove({ code: 501 });
          // return;
        }
      }, 10);
      send({
        email
      }).then(res => {
        clearInterval(timer);
        if (time < 100) {
          setTimeout(() => {
            console.log(res);
            reslove(res);
          }, 10 * (100 - time));
        } else {
          reslove(res);
        }
      });
    } else if (!checkRule.email.test(email)) {
      setTimeout(() => {
        reslove({ code: 304 });
      }, 500);
    }
  });
};
