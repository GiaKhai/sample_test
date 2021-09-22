import ModalAddUser from "components/ModalAddUser";
import { useForm } from "antd/lib/form/Form";
import { postUserAction } from "actions/user.action";

const AddUser = ({ isModalVisible, handleCancel }) => {
  const [form] = useForm();
  const handleSubmit = () => {
    form.validateFields();
    let body = form.getFieldsValue();
    postUserAction(body);
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
