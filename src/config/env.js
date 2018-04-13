let baseURL = "http://23.247.25.30";

let API = {
  login: "login.php",
  register: "register.php",
  checkeu: "checkeu.php",
  sendmail: "sendmail.php",
  mailoverdue: "mailoverdue.php",
  reset: "resetpass.php",
  add: "add.php",
  del: "del.php",
  show: "show.php"
};

const checkRule = {
  username: /^[\w\-]{4,20}$/,
  password: /^[a-zA-Z0-9_\.@\-\*]{8,24}$/,
  email: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
}

export { baseURL, API, checkRule };
