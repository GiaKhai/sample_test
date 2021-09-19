import { userConstants } from "../constants/user.constants";

const initialState = {
  userList: [],
  isError: false,
};

const userReducers = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case userConstants.GET_USER_SUCCESS:
      return {
        ...state,
        userList: data.data.results,
      };

    case userConstants.GET_USER_FAIL:
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};

export default userReducers;
