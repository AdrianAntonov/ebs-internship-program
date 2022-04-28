import React from "react";
import { deletePost } from "../../../services/users";

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
      <h3>Do You Really want to delete the post?</h3>
      <button onClick={() => confirmDelete()}>Yes</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default Warning;
