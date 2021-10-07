import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "utils/getCookie";
import { getWorksheet } from "actions/sample-request.action";
import ModalAddSample from "components/SampleSubmission/ModalAddSample";

const Worksheet = () => {
  let token = getCookie("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorksheet(token));
  }, [dispatch, token]);
  const worksheetList = useSelector(
    (state) => state.worksheetReducers.worksheetList.results
  );

  // console.log(worksheetList);
  return <ModalAddSample />;
};

export default Worksheet;
