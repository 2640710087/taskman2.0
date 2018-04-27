import Mock from "mockjs";
import { modules, login } from "./dataTemplate";
Mock.mock(/login.php/, "post", login);
// Mock.mock(/modules.php/, "post", modules);
