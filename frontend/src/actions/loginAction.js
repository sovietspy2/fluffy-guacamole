import URL from "../api";
import { LOGIN } from "./constants";

export const login = () => dispatch => {
  debugger;
  dispatch({
    type: LOGIN.START
  });
  console.log("action");
};
