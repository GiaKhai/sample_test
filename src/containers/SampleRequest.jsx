import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormSample from "components/FormSample";
import { getCookie } from "utils/getCookie";
import { getSampleRequest } from "actions/sample-request.action";

const SampleRequest = () => {
  let token = getCookie("token");
  const dispatch = useDispatch();
  const sampleList = useSelector(
    (state) => state.sampleReducers.sampleList.results
  );
  console.log(sampleList);

  useEffect(() => {
    dispatch(getSampleRequest(token));
  }, [dispatch, token]);

  return <FormSample sampleList={sampleList} />;
};

export default SampleRequest;
