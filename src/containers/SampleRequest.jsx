import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormSample from "components/FormSample";
import { getCookie } from "utils/getCookie";
import { getSampleRequest } from "actions/sample-request.action";

const SampleRequest = ({ setIsModalVisible, show, setSampleIdClick }) => {
  let token = getCookie("token");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSampleRequest(token));
  }, [dispatch, token]);

  const sampleList = useSelector(
    (state) => state.sampleReducers.sampleList.results
  );

  return (
    <FormSample
      show={show}
      sampleList={sampleList}
      setIsModalVisible={setIsModalVisible}
      setSampleIdClick={setSampleIdClick}
    />
  );
};

export default SampleRequest;
