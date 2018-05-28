let baseURL = "//107.151.172.35";

let API = {
    login: "login.php",
    register: "register.php",
    checkeu: "checkeu.php",
    sendmail: "sendmail.php",
    mailoverdue: "mailoverdue.php",
    reset: "resetpass.php",
    getStatus: "modules.php",
    delArt: "delart.php",
    upArt: "updart.php",
    addArt: "addart.php",
    article: "siart.php",
    tagArt: "start.php",
    search: "search.php",
    addTag: "addtag.php",
    delTag: "deltag.php",
    allTag: "satag.php",
    // checktoken: "checktoken.php"
};

const checkRule = {
    username: /^[\w\-]{4,20}$/,
    password: /^[a-zA-Z0-9_\.@\-\*]{8,24}$/,
    email: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
};

export {
    baseURL,
    API,
    checkRule
};