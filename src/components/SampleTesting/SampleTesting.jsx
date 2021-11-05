import { useState } from "react";
import FormSample from "../../containers/SampleRequest.jsx";
import ModalTesting from "./ModalTesting.jsx";
import { Form } from "antd";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import moment from "moment";
import { sampleTetingAction } from "actions/sample-request.action.js";

const SampleTesting = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sampleIdClick, setSampleIdClick] = useState();
  const [idUser, setIdUser] = useState();
  const [data, setData] = useState();

  const [form] = Form.useForm();
  const [formTable] = Form.useForm();

  const handleOk = async () => {
    const {
      requestor,
      dateTested,
      product,
      description,
      sampleContainer,
      batch,
      plant,
      remarks,
    } = form.getFieldsValue();

    const body = {
      requestor: requestor,
      testing_date: moment(dateTested).format("YYYY-MM-DD HH:mm:ss"),
      product: product,
      sample_source: description,
      sample_contaier: sampleContainer,
      batch: batch,
      location: plant,
      remarks: remarks,
      results: data,
    };

    try {
      await form.validateFields();
      const { success } = await sampleTetingAction(body, idUser);
      if (success) {
        setIsModalVisible(false);
        form.resetFields();
      }
    } catch (error) {
      setIsModalVisible(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const sampleList = useSelector(
    (state) => state.sampleReducers.sampleList.results
  );

  // console.log(idUser);

  const test = sampleList?.find(
    (item) => item.sample_request_id === sampleIdClick
  );

  useEffect(() => {
    test &&
      form.setFieldsValue({
        customer: test.client_name,
        requestor: test.owner_name,
        description: test.sample_description,
        receivedDate: moment(test.received_date).format("YYYY-MM-DD HH:mm:ss"),
      });

    setData(test?.results);
  }, [test, form]);

  return (
    <div className="container">
      <h1 className="title">Sample Testing</h1>

      <FormSample
        setIsModalVisible={setIsModalVisible}
        setSampleIdClick={setSampleIdClick}
        setIdUser={setIdUser}
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
