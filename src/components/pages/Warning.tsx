import { Space, Button } from "ebs-design";

interface IWarningModalProps {
  onClose: () => void;
  warningId: number;
  handleList: () => void;
  handleDelete: (id: number) => void;
}

const Warning = ({
  onClose,
  warningId,
  handleList,
  handleDelete,
}: IWarningModalProps) => {
  const confirmDelete = () => {
    handleDelete(warningId);
    handleList();
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

export default Warning;
