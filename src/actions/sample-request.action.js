import axios from "axios";
import { baseURL, sampleRequestURL, testURL } from "../constants/backend_url";
import { getCookie } from "utils/getCookie";
import { sampleConstants } from "constants/sample.constants";
import { message as Message } from "antd";
import { testContants } from "constants/test.contants";

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

const getTestSuccess = (data) => {
  return {
    type: testContants.GET_TEST_SUCCESS,
    data,
  };
};

const geTestFail = () => {
  return {
    type: testContants.GET_TEST_FAIL,
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

export const getTest = () => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return async (dispatch) => {
    try {
      const response = await axios.get(`${baseURL}${testURL}`, config);
      if (response.status === 200) {
        dispatch(getTestSuccess(response));
      }
    } catch (error) {
      dispatch(geTestFail());
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
    console.log(response);
  } catch (error) {}
};
