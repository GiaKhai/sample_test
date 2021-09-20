import axios from "axios";

import { userURL, baseURL } from "../constants/backend_url";
import { userConstants } from "../constants/user.constants";
import { message as Message } from "antd";

const getUserSuccess = (data) => {
  return {
    type: userConstants.GET_USER_SUCCESS,
    data,
  };
};

const getUserFail = () => {
  return {
    type: userConstants.GET_USER_FAIL,
  };
};

export const getUserAction = (token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async (dispatch) => {
    const response = await axios.get(`${baseURL}${userURL}`, config);
    if (response.status === 200) {
      dispatch(getUserSuccess(response));
    } else {
      dispatch(getUserFail());
    }
  };
};

export const postUserAction = async (token, body) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.post(`${baseURL}${userURL}`, body, config);
  if (response.status === 201) {
    Message.success("Add user successfully");
  } else {
    Message.error("Please check again");
  }
};
