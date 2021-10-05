import {
  getSampleRequest,
  postSampleRequest,
} from "actions/sample-request.action";
import ModalAddSample from "components/SampleSubmission/ModalAddSample";

const AddSample = ({ visibleAdd, handleCancel, setData, data, form }) => {
  const handleSubmit = async () => {
    try {
      await form.validateFields();
      let body = form.getFieldsValue();
      const { success } = await postSampleRequest(body);
      getSampleRequest();
      if (success) {
        form.resetFields();
        setData([]);
      }
    } catch (error) {}
  };

  return (
    <ModalAddSample
      handleSubmit={handleSubmit}
      form={form}
      handleCancel={handleCancel}
      visibleAdd={visibleAdd}
      setData={setData}
      data={data}
    />
  );
};
export default AddSample;
