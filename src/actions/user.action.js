import axios from "axios";
import { userURL, baseURL, userStatusURL } from "../constants/backend_url";
import { userConstants } from "../constants/user.constants";
import { message as Message } from "antd";
import { getCookie } from "utils/getCookie";
let token = getCookie("token");

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

export const getUserAction = () => {
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

export const postUserAction = async (body) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  // console.log("response");

  const response = await axios.post(`${baseURL}${userURL}`, body, config);
  if (response.status === 201) {
    Message.success("Add user successfully");
  } else if (response.status === 400) {
    Message.error("Please check again");
    console.log("error");
  }
};

export const updateStatusAction = async (body) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const response = await axios.post(`${baseURL}${userStatusURL}`, body, config);

  if (response.status === 200) {
    Message.success("Update status user success");
  }
};
