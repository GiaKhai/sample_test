import ModalAddUser from "components/Admin/ModalAddUser";
import { useForm } from "antd/lib/form/Form";
import { postUserAction } from "actions/user.action";

const AddUser = ({ isModalVisible, handleCancel }) => {
  const [form] = useForm();
  const handleSubmit = async () => {
    form.validateFields();
    let body = form.getFieldsValue();
    const { success } = await postUserAction(body);
    if (success) form.resetFields();
  };

  return (
    <ModalAddUser
      form={form}
      handleSubmit={handleSubmit}
      isModalVisible={isModalVisible}
      handleCancel={handleCancel}
    />
  );
};
export default AddUser;
