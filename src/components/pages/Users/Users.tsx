import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUsers } from "../../../services/users";
import { useContext } from "react";
import context from "../../../context/app-context";
import UserListItem from "./UserListItem";
import UserAddingForm from "./Form/UserAddingForm";
import Modal from "../../Modal/Modal";

const Users: React.FC = () => {
  const [modalAdd, setModalAdd] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [editId, setEditId] = useState(0);
  const [refreshUserList, setRefreshUserList] = useState(false);
  const {
    user: { agreement },
  } = useContext(context);

  useEffect(() => {
    getUsers().then((res) => setUsersList(res));
    console.log("users useEffect");
  }, [refreshUserList]);

  // include modalul t|f, refresh lista
  const onClose = () => {
    setModalAdd(!modalAdd); // toggle la modal
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
    setModalAdd(!modalAdd);
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
      {agreement || window.localStorage.length > 0 ? (
        <div>
          <button onClick={handleAddUserButton}>Add a user</button>
          {modalAdd && (
            <Modal onClose={onClose}>
              <UserAddingForm editId={editId} onClose={onClose} />
            </Modal>
          )}
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Action</th>
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
