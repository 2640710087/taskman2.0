import Mock from "mockjs";
import task from "./task";
Mock.mock(/j.php/, "post", task);
Mock.mock(/login.php/, "post", task);
