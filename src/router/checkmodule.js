import { getModuleStatus } from "@/plugins/senddata";
import { reset } from "../plugins/senddata/index";

// let getBlacklist = async () => {
//   // 定义一个黑名单
//   let blacklist = {
//     login: 0,
//     register: 0,
//     resetpass: 0
//   };
//   try {
//     await getModuleStatus().then((res, rej) => {
//       console.log("1", res);
//       try {
//         if (res && res.code < 300) {
//           for (let moduleName in res) {
//             if (moduleName !== "code") {
//               blacklist[moduleName] = res[moduleName];
//             }
//           }
//           console.log("2", blacklist);
//         } else {
//           throw "error";
//         }
//       } catch (except) {
//         if (except) {
//           console.log(rej);
//         }
//       }
//     });
//   } catch (e) {
//     for (let i in e) {
//       console.log(e[i]);
//     }
//   }

//   console.log(blacklist);
//   return blacklist;
// };

const getStatus = async moduleName => {
  let moduleList = {
    login: 0,
    register: 0,
    reset: 0,
    resetpass: 0
  };
  let moduleNameList = Object.keys(moduleList);
  let status = false;
  if (moduleNameList.includes(moduleName)) {
    let moduleStatus = {};
    await getModuleStatus().then(res => {
      if (res && res.code < 300) {
        for (let i in res) {
          moduleStatus[i] = res[i];
        }
      }
    });
  }
  return status;
};
export default getStatus;
