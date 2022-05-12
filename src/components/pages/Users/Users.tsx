import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import {
  useUsersData,
  // useMutateOnDeleteUsersList,
} from "../../../hooks/useData";
// import { getUsers, deleteUser } from "../../../services/users";
import { deleteUser } from "../../../services/users";
import { useContext } from "react";
import context from "../../../context/app-context";
import UserAddingForm from "./Form/UserAddingForm";
// import Warning from "../Warning";
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
  // const [usersList, setUsersList] = useState([]);
  const [editId, setEditId] = useState(0);
  // const [refreshUserList, setRefreshUserList] = useState(false);
  const [warningModal, setWarningModal] = useState(false);
  const [warningId, setWarningId] = useState(0);

  const { user } = useContext(context);

  // useEffect(() => {
  //   getUsers().then((res) => setUsersList(res));
  // }, [refreshUserList]);

  //////////////////// PENTRU A FACE IDENTIC LUCRUL useEFFECTULUI CU DEPENDANCIES ARRAY ////////////////

  //                                    **    useQuery mutation  **
  //                                    **    invalidate cache   **

  // const queryClient = useQueryClient();
  // const { mutate } = useMutateOnDeleteUsersList();
  // console.log(mutate);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  const onSuccess = (data: []) => {
    console.log("SUCCESS!!!", data);
  };
  const onError = (error: string) => {
    console.log("ERROR!!!", error);
  };

  const { data } = useUsersData(onSuccess, onError);

  // const { data } = useQuery("users", getUsers, {
  //   onSuccess,
  //   onError,
  // });
  // const { isLoading: isLoadingUsers, data: dataUsers } = useQuery(
  //   ["users", id],
  //   () => getPosts({ id: user.id })
  // );
  // console.log(data);
  // const resultList = data?.data;

  // console.log(resultList);

  // include modalul t|f, refresh lista
  const onClose = () => {
    setModalAdd(!modalAdd); // toggle la modal
    // queryClient.invalidateQueries("users");

    // handleUserList();
    // refetch();
  };

  const onCloseEdit = () => {
    setModalEdit(!modalEdit);
    // handleUserList();
  };

  const handleWarning = () => {
    setWarningModal(!warningModal);
  };

  // refresh la lista userilor
  // const handleUserList = () => {
  //   // setRefreshUserList(!refreshUserList);
  //   // queryClient.invalidateQueries("users");
  //   // refetch();
  // };

  // pentru click pe butonul Submit la AddingForm
  const handleAddUserButton = () => {
    onClose();
  };

  const handleDeleteUser = (id: number) => {
    setWarningId(id);
    handleWarning();
    // mutate(id);
    // handleUserList();
  };

  // primeste id-ul item-ului si ilseteaza in state
  const handleEditUser = (id: number) => {
    console.log("handleEditUser ", id);
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

  // const userTable = usersList.map(
  //   ({ id, firstName, lastName, email, gender }) => {
  //     const name = `${firstName} ${lastName}`;
  //     return { id, name, email, gender };
  //   }
  // );

  // const userTable = resultList?.map((item: IUsersList<string | number>) => {
  //   const { id, firstName, lastName, email, gender } = item;

  //   const name = `${firstName} ${lastName}`;
  //   return { id, name, email, gender };
  // });

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
              confirmID={warningId}
              cancellation="Cancel"
              acceptance="Delete"
              header={ConfirmModalHeader(modalHeader)}
              content={ConfirmModalContent(modalContent)}
              onClose={handleWarning}
              // handleDelete={deleteUser}
              // handleList={handleUserList}
            />
            // <Modal
            //   closeOnClickOutside
            //   header=""
            //   mask
            //   open
            //   size="small"
            //   title="Do rou really want to delete the item?"
            //   onClose={handleWarning}
            //   className="modal"
            // >
            //   <Warning
            //     warningId={warningId}
            //     onClose={handleWarning}
            //     handleDelete={deleteUser}
            //     handleList={handleUserList}
            //   />
            // </Modal>
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
