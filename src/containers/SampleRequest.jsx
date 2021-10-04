import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormSample from "components/FormSample";
import { getCookie } from "utils/getCookie";
import { getSampleRequest } from "actions/sample-request.action";

const SampleRequest = ({ setIsModalVisible, show }) => {
  let token = getCookie("token");
  const dispatch = useDispatch();
  const sampleList = useSelector(
    (state) => state.sampleReducers.sampleList.results
  );

  useEffect(() => {
    dispatch(getSampleRequest(token));
  }, [dispatch, token]);

  return (
    <FormSample
      show={show}
      sampleList={sampleList}
      setIsModalVisible={setIsModalVisible}
    />
  );
};

export default SampleRequest;
