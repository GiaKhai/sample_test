import { useState } from "react";
import FormSample from "../../containers/SampleRequest.jsx";
import ModalTesting from "./ModalTesting.jsx";

const SampleTesting = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container">
      <h1 className="title">Sample Testing</h1>

      <FormSample setIsModalVisible={setIsModalVisible} show />

      <ModalTesting
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default SampleTesting;
