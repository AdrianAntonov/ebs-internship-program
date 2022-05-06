import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUsers } from "../../../services/users";
import { useContext } from "react";
import context from "../../../context/app-context";
import UserAddingForm from "./Form/UserAddingForm";
import WarningUsers from "./WarningUsers";
import UserEditForm from "./UserEditForm";
import { Table, Button, Space, Modal } from "ebs-design";
import "../Posts/PostTest.scss";

const Users: React.FC = () => {
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [editId, setEditId] = useState(0);
  const [refreshUserList, setRefreshUserList] = useState(false);
  const [warningModal, setWarningModal] = useState(false);
  const [warningId, setWarningId] = useState(0);

  const { user } = useContext(context);

  useEffect(() => {
    getUsers().then((res) => setUsersList(res));
  }, [refreshUserList]);

  // include modalul t|f, refresh lista
  const onClose = () => {
    setModalAdd(!modalAdd); // toggle la modal
    handleUserList();
  };

  const onCloseEdit = () => {
    setModalEdit(!modalEdit);
    handleUserList();
  };

  const handleWarning = () => {
    setWarningModal(!warningModal);
  };

  // refresh la lista userilor
  const handleUserList = () => {
    setRefreshUserList(!refreshUserList);
  };

  // pentru click pe butonul Submit la AddingForm
  const handleAddUserButton = () => {
    onClose();
  };

  const handleDeleteUser = (id: number) => {
    setWarningId(id);
    handleWarning();
    handleUserList();
  };

  // primeste id-ul item-ului si ilseteaza in state
  const handleEditUser = (id: number) => {
    console.log("handleEditUser ", id);
    setEditId(id);
    setModalEdit(!modalEdit);
  };

  const userTable = usersList.map(
    ({ id, firstName, lastName, email, gender }) => {
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
            <Modal
              closeOnClickOutside
              header=""
              mask
              open
              size="small"
              title="Do rou really want to delete the item?"
              onClose={handleWarning}
              className="modal"
            >
              <WarningUsers
                onClose={handleWarning}
                warningId={warningId}
                handleUserList={handleUserList}
              />
            </Modal>
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

// {"id": 1,
//       "firstName": "Josh",
//       "lastName": "Crow",
//       "email": "jocrow@mail.com",
//       "password": "South street"}
