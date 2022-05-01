import React from "react";
import { deletePost } from "../../../services/users";
import { Label, Space } from "ebs-design";

interface IWarningModalProps {
  onClose: () => void;
  warningId: number;
  handlePostsList: () => void;
}

const Warning = ({
  onClose,
  warningId,
  handlePostsList,
}: IWarningModalProps) => {
  const confirmDelete = () => {
    deletePost(warningId);
    handlePostsList();
    onClose();
  };

  return (
    <div>
      {/* <h3>Do You Really want to delete the post?</h3> */}
      <Space
        direction="horizontal"
        align="center"
        justify="center"
        className="modal-buttons"
      >
        <Label
          status="danger"
          text="YES"
          type="fill"
          className="label"
          onClick={() => confirmDelete()}
        ></Label>
        <Label
          status="info"
          text="CANCEL"
          type="fill"
          className="label"
          onClick={onClose}
        ></Label>
      </Space>
    </div>
  );
};

export default Warning;
