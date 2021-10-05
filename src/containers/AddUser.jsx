import ModalAddUser from "components/Admin/ModalAddUser";
import { postUserAction } from "actions/user.action";

const AddUser = ({ isModalVisible, handleCancel, form }) => {
  const handleSubmit = async () => {
    try {
      await form.validateFields();
      let body = form.getFieldsValue();
      const { success } = await postUserAction(body);
      if (success) form.resetFields();
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
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
