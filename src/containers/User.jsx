import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Administration from "../components/Administration";
import { getUserAction, updateStatusAction } from "actions/user.action";
import { getCookie } from "utils/getCookie";

const User = () => {
  const [list, setList] = useState([]);
  const [checkStatusUsers, setCheckStatusUsers] = useState();
  const [check, setCheck] = useState(true);

  const dispatch = useDispatch();
  const token = getCookie("token");

  const userList = useSelector((state) => state.userReducers.userList);
  userList.sort((a, b) => a.id - b.id); //sort id

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

  const updateUser = (checked, id) => {
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

  const onChange = (selectedRowKeys, selectedRows) => {
    let result = [];
    let count = 0;
    selectedRows.forEach((status) => {
      result.push(status.status);
    });
    setList(selectedRowKeys);

    result.forEach((status) => {
      if (status === "Active") count++;
    });

    if (result && count === result.length && result.length !== userList.length)
      setCheckStatusUsers("Active");
    else if (result && count === 0) setCheckStatusUsers("Suspended");
    else if (result && count === selectedRows.length)
      setCheckStatusUsers("all");
    else setCheckStatusUsers("other");
  };

  const updateListUser = () => {
    if (checkStatusUsers === "Active") {
      let body = { users: list, status: "Suspended", apply_all: false };
      updateStatusAction(body);
      setCheck(!check);
    } else if (checkStatusUsers === "Suspended") {
      let body = { users: list, status: "Active", apply_all: false };
      updateStatusAction(body);
      setCheck(!check);
    } else if (checkStatusUsers === "all") {
      let body = { users: list, status: "Suspended", apply_all: true };
      updateStatusAction(body);
      setCheck(!check);
    }
  };

  return (
    <Administration
      userList={userList}
      updateUser={updateUser}
      checked={checked}
      onChange={onChange}
      updateListUser={updateListUser}
      checkStatusUsers={checkStatusUsers}
    />
  );
};
export default User;
