import { Space, Button, Modal } from "ebs-design";

interface IConfirmModalProps {
  confirmID: number;
  onClose: () => void;
  handleDelete: (id: number) => void;
  handleList: () => void;
}

export const ConfirmModal: React.FC<IConfirmModalProps> = ({
  confirmID,
  onClose,
  handleDelete,
  handleList,
}) => {
  const handleCancel = (): void => {
    onClose();
  };
  const handleSuccess = (): void => {
    handleDelete(confirmID);
    onClose();
    handleList();
  };
  return (
    <div>
      {/* ConfirmModal */}
      <Modal closeOnClickOutside header="" mask open size="small">
        <Modal.Content>Are you sure?</Modal.Content>
        <Modal.Footer>
          <Space justify="space-between">
            {/* <Button onClick={handleCancel}>{t("buttons.cancel")}</Button>
            <Button type="primary" onClick={handleSuccess}>
              {t("buttons.yes")}
            </Button> */}
            <Button onClick={handleCancel}>Cancel</Button>
            <Button type="primary" onClick={handleSuccess}>
              Delete
            </Button>
          </Space>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
