import {
  getSampleRequest,
  postSampleRequest,
} from "actions/sample-request.action";
import ModalAddSample from "components/SampleSubmission/ModalAddSample";
import { useDispatch } from "react-redux";
import { getCookie } from "utils/getCookie";

const AddSample = ({
  visibleAdd,
  handleCancel,
  setData,
  data,
  form,
  setVisibleAdd,
}) => {
  const dispatch = useDispatch();
  let token = getCookie("token");

  const handleSubmit = async () => {
    try {
      await form.validateFields();
      let body = form.getFieldsValue();
      const { success } = await postSampleRequest(body);
      getSampleRequest();
      if (success) {
        form.resetFields();
        setData([]);
        setVisibleAdd(false);
        dispatch(getSampleRequest(token));
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
