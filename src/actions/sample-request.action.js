import axios from "axios";
import { baseURL, sampleRequestURL } from "../constants/backend_url";
import { getCookie } from "utils/getCookie";
import { sampleConstants } from "constants/sample.constants";
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

// export const postSampleRequest = async (body) => {
//   let config = {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   };

//   try {
//     const test = await axios.post(`${baseURL}${userURL}`, body, config);
//     if (test.status === 201) {
//       Message.success("Add success");
//       return { success: true };
//     }
//     console.log(test);
//   } catch (error) {}
// };
