import React, { useState } from "react";
import { useSelector } from "react-redux";

import FormSample from "containers/SampleRequest";
import Export from "./Export";

const SampleApproval = () => {
  const [sampleIdExport, setSampleIdExport] = useState();
  const [isModalPdf, setIsModalPdf] = useState(false);

  const sampleList = useSelector(
    (state) => state.sampleReducers.sampleList.results
  );
  console.log(sampleList);
  const testExport = sampleList?.find(
    (item) => item.sample_request_id === sampleIdExport
  );

  const handleCancel = () => {
    setIsModalPdf(false);
  };

  return (
    <div className="container">
      <h1 className="title">Sample Approval</h1>
      <FormSample
        setSampleIdExport={setSampleIdExport}
        setIsModalPdf={setIsModalPdf}
        showPdf
      />
      <Export
        isModalPdf={isModalPdf}
        testExport={testExport}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default SampleApproval;
