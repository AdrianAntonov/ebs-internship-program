import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useUsersData } from "../../../hooks/useData";
import { useContext } from "react";
import context from "../../../context/app-context";
import UserAddingForm from "./Form/UserAddingForm";
import UserEditForm from "./UserEditForm";
import ConfirmModal from "./ConfirmModal/ConfirmModal";
import ConfirmModalContent from "./ConfirmModal/ConfirmModalContent";
import ConfirmModalHeader from "./ConfirmModal/ConfirmModalHeader";
import { Table, Button, Space, Modal } from "ebs-design";
import "../Posts/PostTest.scss";

axios.defaults.baseURL = "http://localhost:3001";

interface IUsersList {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
}

const Users: React.FC = () => {
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [editId, setEditId] = useState(0);
  const [warningModal, setWarningModal] = useState(false);
  const [warningId, setWarningId] = useState(0);

  const { user } = useContext(context);

  const onSuccess = (data: []) => {
    console.log("SUCCESS!!!", data);
  };
  const onError = (error: string) => {
    console.log("ERROR!!!", error);
  };

  const { data } = useUsersData(onSuccess, onError);

  // include modalul t|f, refresh lista
  const onClose = () => {
    setModalAdd(!modalAdd); // toggle la modal
    // refetch();
  };

  const onCloseEdit = () => {
    setModalEdit(!modalEdit);
  };

  const handleWarning = () => {
    setWarningModal(!warningModal);
  };

  // pentru click pe butonul Submit la AddingForm
  const handleAddUserButton = () => {
    onClose();
  };

  const handleDeleteUser = (id: number) => {
    setWarningId(id);
    handleWarning();
  };

  // primeste id-ul item-ului si ilseteaza in state
  const handleEditUser = (id: number) => {
    setEditId(id);
    setModalEdit(!modalEdit);
  };

  const modalHeader = (
    <div>
      <h3>WARNING!</h3>
    </div>
  );

  const modalContent = (
    <div>
      <h3>You are going to DELETE an item!</h3>
      <hr />
      <h4>ARE YOU SURE?</h4>
    </div>
  );

  const userTable = data?.map(
    ({ id, firstName, lastName, email, gender }: IUsersList) => {
      const name = `${firstName} ${lastName}`;
      return { id, name, email, gender };
    }
  );

  return (
    <>
      {user.agreement || window.localStorage.length > 0 ? (
        <div>
          {user.role === "Administrator" && (
            <Button
              type="ghost"
              size="small"
              children="Add a user"
              onClick={handleAddUserButton}
            />
          )}
          {modalAdd && (
            <Modal
              closeOnClickOutside
              header=""
              mask
              open
              size="small"
              className="modal"
              onClose={onClose}
            >
              <UserAddingForm onClose={onClose} />
            </Modal>
          )}
          {modalEdit && (
            <Modal
              closeOnClickOutside
              header=""
              mask
              open
              size="small"
              className="modal"
              onClose={onCloseEdit}
            >
              <UserEditForm editId={editId} onCloseEdit={onCloseEdit} />
            </Modal>
          )}
          {warningModal && (
            <ConfirmModal
              info="users"
              confirmID={warningId}
              cancellation="Cancel"
              acceptance="Delete"
              header={ConfirmModalHeader(modalHeader)}
              content={ConfirmModalContent(modalContent)}
              onClose={handleWarning}
            />
          )}
          <Table
            columns={[
              {
                dataIndex: "id",
                title: "ID",
              },
              {
                dataIndex: "name",
                title: "Full Name",
              },
              {
                dataIndex: "email",
                title: "Email",
              },
              {
                dataIndex: "gender",
                title: "Gender",
              },
              {
                title: "Action",
                render: ({ id }) => (
                  <Space>
                    <Button
                      type="ghost"
                      size="small"
                      children="Edit"
                      onClick={() => handleEditUser(id)}
                    />
                    <Button
                      type="dark"
                      size="small"
                      children="Delete"
                      onClick={() => handleDeleteUser(id)}
                    />
                  </Space>
                ),
              },
            ]}
            data={userTable}
            size="medium"
          />
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Users;
