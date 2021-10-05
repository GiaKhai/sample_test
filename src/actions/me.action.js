import axios from "axios";
import { meURL, baseURL } from "../constants/backend_url";
import { getCookie } from "utils/getCookie";
import { meConstants } from "constants/me.constants";
let token = getCookie("token");

const getMeSuccess = (data) => {
  return {
    type: meConstants.GET_ME_SUCCESS,
    data,
  };
};

const getMeFail = () => {
  return {
    type: meConstants.GET_ME_FAIL,
  };
};

export const getMeAction = () => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async (dispatch) => {
    try {
      const response = await axios.get(`${baseURL}${meURL}`, config);
      if (response.status === 200) {
        dispatch(getMeSuccess(response));
      }
    } catch (error) {
      dispatch(getMeFail());
    }
  };
};
