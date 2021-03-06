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

const getworksheetFail = () => {
  return {
    type: worksheetContants.GET_WORKSHEET_FAIL,
  };
};

export const getSampleRequest = (filter) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${baseURL}${sampleRequestURL}?name_of_sample=${filter}`,
        config
      );
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
      dispatch(getworksheetFail());
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
    return { success: false };
  }
};

export const sampleTetingAction = async (body, id) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  try {
    const response = await axios.put(
      `${baseURL}${sampleRequestURL}${id}/`,
      body,
      config
    );
    if (response.status === 200) {
      Message.success("Test success");
      return { success: true };
    }
  } catch (error) {
    Message.error("Please fill out completely");
    return { success: false };
  }
};
