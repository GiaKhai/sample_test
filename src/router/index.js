import Authed from "./authed";
import Public from "./public";
import { getCookie } from "../utils/getCookie";

const Routes = () => {
  const isLoggedIn = Boolean(getCookie("token"));
  return isLoggedIn ? <Authed /> : <Public />;
};

export default Routes;
