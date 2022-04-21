import React from "react";
interface IWarningModalProps {
  onClose: () => void;
  confirmPostDelete: () => void;
}

const Warning = ({ onClose, confirmPostDelete }: IWarningModalProps) => {
  return (
    <div>
      <h3>Do You Really want to delete the post?</h3>
      <button onClick={() => confirmPostDelete()}>Yes</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default Warning;
