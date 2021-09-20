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
        userList: data.data,
      };

    case userConstants.GET_USER_FAIL:
      return {
        ...state,
        isError: true,
      };

    case userConstants.POST_USER_SUCCESS:
      return {
        ...state,
      };
    case userConstants.POST_USER_ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userReducers;
