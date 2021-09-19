import axios from "axios";

import { userURL, baseURL } from "../constants/backend_url";
import { userConstants } from "../constants/user.constants";

const getUserSuccess = (data) => {
  return {
    type: userConstants.GET_USER_SUCCESS,
    data,
  };
};

const getCategoryFail = () => {
  return {
    type: userConstants.GET_USER_FAIL,
  };
};

export const getUserAction = () => {
  return async (dispatch) => {
    const response = await axios.get(`${baseURL}${userURL}`);
    if (response.status === 200) {
      dispatch(getUserSuccess(response));
    } else {
      dispatch(getCategoryFail());
    }
  };
};
