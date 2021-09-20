import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Administration from "../components/Administration";
import { getUserAction } from "actions/user.action";
import { getCookie } from "utils/getCookie";

const User = () => {
  const dispatch = useDispatch();
  const token = getCookie("token");

  const userList = useSelector((state) => state.userReducers.userList);
  console.log(userList);

  useEffect(() => {
    dispatch(getUserAction(token));
  }, [dispatch, token]);

  return <Administration userList={userList} />;
};
export default User;
