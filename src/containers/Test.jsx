import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "utils/getCookie";
import { getTest } from "actions/sample-request.action";
import TableTest from "components/SampleSubmission/TableTest";

const Test = () => {
  let token = getCookie("token");
  const dispatch = useDispatch();
  const testList = useSelector((state) => state.testReducers.testList.results);

  useEffect(() => {
    dispatch(getTest(token));
  }, [dispatch, token]);

  return <TableTest testList={testList} />;
};

export default Test;
