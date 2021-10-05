import { worksheetContants } from "constants/worksheet.contants";

const initialState = {
  worksheetList: [],
  isError: false,
};

const worksheetReducers = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case worksheetContants.GET_WORKSHEET_SUCCESS:
      return {
        ...state,
        worksheetList: data.data,
      };

    case worksheetContants.GET_WORKSHEET_FAIL:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};

export default worksheetReducers;
