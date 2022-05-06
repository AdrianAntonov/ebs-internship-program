import { deleteUser } from "../../../services/users";
import { Space, Button } from "ebs-design";

interface IWarningUsersModalProps {
  onClose: () => void;
  warningId: number;
  handleUserList: () => void;
}

const WarningUsers = ({
  onClose,
  handleUserList,
  warningId,
}: IWarningUsersModalProps) => {
  const confirmDelete = () => {
    deleteUser(warningId);
    handleUserList();
    onClose();
  };

  return (
    <div>
      <Space
        direction="horizontal"
        align="center"
        justify="center"
        className="modal-buttons"
      >
        <Button
          onClick={() => confirmDelete()}
          buttonClass="ebs-button--medium ebs-button butt"
          type="dark"
        >
          DELETE
        </Button>
        <Button
          onClick={onClose}
          buttonClass="ebs-button--medium ebs-button butt"
          type="primary"
        >
          CANCEL
        </Button>
      </Space>
    </div>
  );
};

export default WarningUsers;
