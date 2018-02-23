let baseURL = "http://23.247.25.30";
let API = {
  login: "login.php",
  register: "register.php",
  checkeu: "checkeu.php",
  sendmail: "sendmail.php",
  mailoverdue: "mailoverdue.php",
  reset: "resetpass.php",
  add: "add.php",
  del: "del.php"
};
const checkRule = {
  username: /^[\w\-]{4,20}$/,
  password: /^[a-zA-Z0-9_\.@\-\*]{8,24}$/,
  email: /^((?:(?:[a-zA-Z0-9]+\.?[A-Za-z]*)*[a-zA-Z]*)+[A-Za-z0-9]+)@((?:[a-zA-Z0-9])+\.{1}(?:[A-Za-z]{1,5})*[a-zA-Z]+)$/
}
export { baseURL, API, checkRule };
