import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormSample from "components/FormSample";
import { getCookie } from "utils/getCookie";
import { getSampleRequest } from "actions/sample-request.action";

const SampleRequest = ({
  setIsModalVisible,
  showModalTesting,
  showModalExport,
  setSampleIdClick,
  setIdUser,
  setSampleIdExport,
  setIsModalPdf,
}) => {
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
      showModalTesting={showModalTesting}
      showModalExport={showModalExport}
      sampleList={sampleList}
      setIsModalVisible={setIsModalVisible}
      setSampleIdClick={setSampleIdClick}
      setIdUser={setIdUser}
      setSampleIdExport={setSampleIdExport}
      setIsModalPdf={setIsModalPdf}
    />
  );
};

export default SampleRequest;
