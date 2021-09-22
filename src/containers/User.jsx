import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Administration from "../components/Administration";
import { getUserAction, updateStatusAction } from "actions/user.action";
import { getCookie } from "utils/getCookie";

const User = () => {
  const dispatch = useDispatch();
  const token = getCookie("token");
  const userList = useSelector((state) => state.userReducers.userList);
  const [check, setCheck] = useState(true);

  useEffect(() => {
    dispatch(getUserAction(token));
  }, [dispatch, token, check]);

  const checked = (record) => {
    let status = "";
    if (record === "Active") {
      status = true;
    } else if (record === "Suspended") {
      status = false;
    }
    return status;
  };

  const onChange = (checked, id) => {
    let listId = [id];
    if (checked === "Active") {
      let body = { users: listId, status: "Suspended", apply_all: false };
      updateStatusAction(body);
      setCheck(!check);
    } else {
      let body = { users: listId, status: "Active", apply_all: false };
      updateStatusAction(body);
      setCheck(!check);
    }
  };

  return (
    <Administration userList={userList} onChange={onChange} checked={checked} />
  );
};
export default User;
