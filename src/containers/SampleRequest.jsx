import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormSample from "components/FormSample";
import { getSampleRequest } from "actions/sample-request.action";
import { useState } from "react";

const SampleRequest = ({
  setIsModalVisible,
  showModalTesting,
  showModalExport,
  setSampleIdClick,
  setIdUser,
  setSampleIdExport,
  setIsModalPdf,
}) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(getSampleRequest(filter));
  }, [dispatch, filter]);

  const onsubmit = (newfilter) => {
    // setFilter({ ...filter, name_of_sample: newfilter });
    setFilter(newfilter);
  };

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
      onsubmit={onsubmit}
    />
  );
};

export default SampleRequest;
