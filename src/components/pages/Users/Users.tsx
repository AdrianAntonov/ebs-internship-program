import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUsers } from "../../../services/users";
import { useContext } from "react";
import context from "../../../context/app-context";
import UserListItem from "./UserListItem";
import UserAddingForm from "./Form/UserAddingForm";
import Modal from "../../Modal/Modal";
import UserEditForm from "./UserEditForm";

const Users: React.FC = () => {
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [editId, setEditId] = useState(0);
  const [refreshUserList, setRefreshUserList] = useState(false);
  // const {
  //   user: { agreement },
  // } = useContext(context);
  const { user } = useContext(context);

  console.log(user);

  useEffect(() => {
    getUsers().then((res) => setUsersList(res));
    console.log("users useEffect");
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

  // refresh la lista userilor
  const handleUserList = () => {
    setRefreshUserList(!refreshUserList);
  };

  // pentru click pe butonul Submit la AddingForm
  const handleAddUserButton = () => {
    onClose();
  };

  // primeste id-ul item-ului si ilseteaza in state
  const handleEditUser = (id: number) => {
    console.log("handleEditUser");
    setEditId(id);
    setModalEdit(!modalEdit);
  };

  const showUserList = usersList.map(
    ({ id, firstName, lastName, email, gender }) => (
      <UserListItem
        key={id}
        id={id}
        firstName={firstName}
        lastName={lastName}
        email={email}
        gender={gender}
        handleUserList={handleUserList}
        handleEditUser={handleEditUser}
      />
    )
  );

  return (
    <>
      {user.agreement || window.localStorage.length > 0 ? (
        <div>
          {user.role === "Administrator" && (
            <button onClick={handleAddUserButton}>Add a user</button>
          )}
          {modalAdd && (
            <Modal onClose={onClose}>
              <UserAddingForm onClose={onClose} />
            </Modal>
          )}
          {modalEdit && (
            <Modal onClose={onCloseEdit}>
              <UserEditForm editId={editId} onCloseEdit={onCloseEdit} />
            </Modal>
          )}
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Gender</th>
                {user.role === "Administrator" && <th>Action</th>}
              </tr>
            </thead>
            <tbody>{showUserList}</tbody>
          </table>
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
