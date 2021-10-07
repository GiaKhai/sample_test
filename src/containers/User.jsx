import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Administration from "../components/Admin/Administration";
import { getUserAction, updateStatusAction } from "actions/user.action";
import { getCookie } from "utils/getCookie";

const User = () => {
  const [list, setList] = useState([]);
  const [checkStatusUsers, setCheckStatusUsers] = useState("other");
  const [check, setCheck] = useState(true);

  const dispatch = useDispatch();
  const token = getCookie("token");

  const userList = useSelector((state) => state.userReducers.userList);
  // userList.sort((a, b) => a.id - b.id); //sort id

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

  const updateUser = async (checked, id) => {
    let listId = [id];
    if (checked === "Active") {
      let body = { users: listId, status: "Suspended", apply_all: false };
      await updateStatusAction(body);
      setCheck(!check);
    } else {
      let body = { users: listId, status: "Active", apply_all: false };
      await updateStatusAction(body);
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
    if (selectedRowKeys.length === 0) {
      setCheckStatusUsers("other");
    }
    result.forEach((status) => {
      if (status === "Active") count++;
    });
    console.log(selectedRowKeys);
    if (
      result &&
      count === result.length &&
      result.length !== userList.length &&
      count !== 0
    ) {
      setCheckStatusUsers("Active");
    } else if (result && count === 0 && selectedRowKeys.length !== 0) {
      setCheckStatusUsers("Suspended");
    } else if (result && count === selectedRows.length && count !== 0)
      setCheckStatusUsers("all");
    else setCheckStatusUsers("other");
  };

  const updateListUser = async () => {
    if (checkStatusUsers === "Active") {
      let body = { users: list, status: "Suspended", apply_all: false };
      await updateStatusAction(body);
      setCheck(!check);
      setCheckStatusUsers("Suspended");
    } else if (checkStatusUsers === "Suspended") {
      let body = { users: list, status: "Active", apply_all: false };
      await updateStatusAction(body);
      setCheck(!check);
      setCheckStatusUsers("Active");
    } else if (checkStatusUsers === "all") {
      let body = { users: list, status: "Suspended", apply_all: true };
      await updateStatusAction(body);
      setCheckStatusUsers("other");
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
