import { sampleConstants } from "constants/sample.constants";

const initialState = {
  sampleList: [],
  isError: false,
};

const sampleReducers = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case sampleConstants.GET_SAMPLE_SUCCESS:
      return {
        ...state,
        sampleList: data.data,
      };

    case sampleConstants.GET_SAMPLE_FAIL:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};

export default sampleReducers;
