import { useState } from "react";
import FormSample from "../../containers/SampleRequest.jsx";
import ModalTesting from "./ModalTesting.jsx";
import { Form } from "antd";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SampleTesting = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sampleIdClick, setSampleIdClick] = useState();
  const [data, setData] = useState();

  const [form] = Form.useForm();
  const [formTable] = Form.useForm();
  const handleOk = () => {
    setIsModalVisible(false);

    const {
      requestor,
      receivedDate,
      dateTested,
      product,
      sampleDate,
      description,
      sampleContainer,
      batch,
      plant,
      remarks,
    } = form.getFieldsValue();

    const body = {
      requestor: requestor,
      receivedDate: receivedDate.format("YYYY-MM-DD HH:mm:ss"),
      dateTested: dateTested.format("YYYY-MM-DD HH:mm:ss"),
      product: product,
      sampleDate: sampleDate.format("YYYY-MM-DD HH:mm:ss"),
      description: description,
      sampleContainer: sampleContainer,
      batch: batch,
      plant: plant,
      remarks: remarks,
      results: data,
    };

    // console.log(body);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const sampleList = useSelector(
    (state) => state.sampleReducers.sampleList.results
  );

  const test = sampleList?.find(
    (item) => item.sample_request_id === sampleIdClick
  );

  useEffect(() => {
    test &&
      form.setFieldsValue({
        customer: test.client_name,
        requestor: test.owner_name,
        description: test.sample_description,
      });

    setData(test?.results);
  }, [test]);

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
        form={form}
        data={data}
        setData={setData}
        formTable={formTable}
      />
    </div>
  );
};

export default SampleTesting;
