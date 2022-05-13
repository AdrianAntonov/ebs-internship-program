import { Space, Button, Modal } from "ebs-design";
import { useUniversalListMutation } from "../../../../hooks/useData";
import { deleteUser, deletePost } from "../../../../services/users";

interface IConfirmModalProps {
  info: string;
  confirmID: number;
  cancellation: string;
  acceptance: string;
  header?: React.ReactNode;
  content?: React.ReactNode;
  onClose: () => void;
}

export const ConfirmModal: React.FC<IConfirmModalProps> = ({
  confirmID,
  onClose,
  header,
  content,
  cancellation,
  acceptance,
  info,
}) => {
  const { mutate } = useUniversalListMutation(deleteUser);

  const { mutate: deletePostItem } = useUniversalListMutation(deletePost);

  const handleCancel = (): void => {
    onClose();
  };
  const handleSuccess = (): void => {
    if (info === "users") {
      mutate(confirmID);
    }
    if (info === "posts") {
      deletePostItem(confirmID);
    }

    onClose();
  };
  return (
    <div>
      <Modal
        closeOnClickOutside
        header={header || <h4>Warning! Achtung!</h4>}
        mask
        open
        size="small"
      >
        <Modal.Content>{content || <h4>Are you sure!</h4>}</Modal.Content>
        <Modal.Footer>
          <Space justify="space-between">
            <Button type="primary" onClick={handleCancel}>
              {cancellation}
            </Button>
            <Button type="dark" onClick={handleSuccess}>
              {acceptance}
            </Button>
          </Space>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
