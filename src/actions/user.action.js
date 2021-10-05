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
    try {
      const response = await axios.get(`${baseURL}${userURL}`, config);
      if (response.status === 200) {
        dispatch(getUserSuccess(response));
      }
    } catch (error) {
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

  try {
    const test = await axios.post(`${baseURL}${userURL}`, body, config);
    if (test.status === 201) {
      Message.success("Add success");
      return { success: true };
    }
  } catch (error) {
    console.log(error);
    Message.error(error.response.data.email[0]);
    return { success: false };
  }
};

export const updateStatusAction = async (body) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.post(
      `${baseURL}${userStatusURL}`,
      body,
      config
    );
    if (response.status === 200) {
      Message.success("Update status user success");
    }
  } catch (error) {
    Message.error("Update status user false");
  }
};
