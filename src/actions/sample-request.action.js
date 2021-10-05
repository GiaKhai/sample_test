import axios from "axios";
import {
  baseURL,
  sampleRequestURL,
  worksheetURL,
} from "../constants/backend_url";
import { getCookie } from "utils/getCookie";
import { sampleConstants } from "constants/sample.constants";
import { message as Message } from "antd";
import { worksheetContants } from "constants/worksheet.contants";

let token = getCookie("token");

const getSampleSuccess = (data) => {
  return {
    type: sampleConstants.GET_SAMPLE_SUCCESS,
    data,
  };
};

const getSampleFail = () => {
  return {
    type: sampleConstants.GET_SAMPLE_FAIL,
  };
};

const getworksheetSuccess = (data) => {
  return {
    type: worksheetContants.GET_WORKSHEET_SUCCESS,
    data,
  };
};

const geworksheetFail = () => {
  return {
    type: worksheetContants.GET_WORKSHEET_FAIL,
  };
};

export const getSampleRequest = () => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async (dispatch) => {
    try {
      const response = await axios.get(`${baseURL}${sampleRequestURL}`, config);
      if (response.status === 200) {
        dispatch(getSampleSuccess(response));
      }
    } catch (error) {
      dispatch(getSampleFail());
    }
  };
};

export const getWorksheet = () => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async (dispatch) => {
    try {
      const response = await axios.get(`${baseURL}${worksheetURL}`, config);
      if (response.status === 200) {
        dispatch(getworksheetSuccess(response));
      }
    } catch (error) {
      dispatch(geworksheetFail());
    }
  };
};

export const postSampleRequest = async (body) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  try {
    const response = await axios.post(
      `${baseURL}${sampleRequestURL}`,
      body,
      config
    );
    if (response.status === 201) {
      Message.success("Add success");
      return { success: true };
    }
  } catch (error) {
    Message.error("Error");
    console.log(error);
    return { success: false };
  }
};
