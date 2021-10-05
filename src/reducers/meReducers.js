import { meConstants } from "constants/me.constants";

const initialState = {
  me: [],
  isError: false,
};

const meReducers = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case meConstants.GET_ME_SUCCESS:
      return {
        ...state,
        me: data.data,
      };

    case meConstants.GET_ME_FAIL:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};

export default meReducers;
