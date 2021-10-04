import { testContants } from "constants/test.contants";

const initialState = {
  testList: [],
  isError: false,
};

const testReducers = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case testContants.GET_TEST_SUCCESS:
      return {
        ...state,
        testList: data.data,
      };

    case testContants.GET_TEST_FAIL:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};

export default testReducers;
