import { useState } from "react";
import FormSample from "../../containers/SampleRequest.jsx";
import ModalTesting from "./ModalTesting.jsx";

const SampleTesting = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sampleIdClick, setSampleIdClick] = useState();
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container">
      <h1 className="title">Sample Testing</h1>

      <FormSample
        setIsModalVisible={setIsModalVisible}
        setSampleIdClick={setSampleIdClick}
        show
      />

      <ModalTesting
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        sampleIdClick={sampleIdClick}
      />
    </div>
  );
};

export default SampleTesting;
