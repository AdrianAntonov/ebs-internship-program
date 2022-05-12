import { Space, Button, Modal } from "ebs-design";
import { useMutateOnDeleteUsersList } from "../../../../hooks/useData";

interface IConfirmModalProps {
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
}) => {
  const { mutate } = useMutateOnDeleteUsersList();
  const handleCancel = (): void => {
    onClose();
  };
  const handleSuccess = (): void => {
    onClose();
    mutate(confirmID);
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
