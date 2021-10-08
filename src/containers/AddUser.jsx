import ModalAddUser from "components/Admin/ModalAddUser";
import { getUserAction, postUserAction } from "actions/user.action";
import { useDispatch } from "react-redux";
import { getCookie } from "utils/getCookie";

const AddUser = ({ isModalVisible, handleCancel, form, setIsModalVisible }) => {
  const dispatch = useDispatch();
  const token = getCookie("token");
  const handleSubmit = async () => {
    try {
      await form.validateFields();
      let body = form.getFieldsValue();
      const { success } = await postUserAction(body);
      if (success) form.resetFields();
      setIsModalVisible(false);
      dispatch(getUserAction(token));
    } catch (error) {}
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
