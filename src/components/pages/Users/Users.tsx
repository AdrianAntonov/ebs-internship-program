import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUsers } from "../../../services/users";
import UserListItem from "./UserListItem";
import { useContext } from "react";
import context from "../../../context/app-context";
import UserAddingForm from "./Form/UserAddingForm";
import Modal from "../../Modal/Modal";

const Users: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [addUser, setAddUser] = useState(false);
  const {
    user: { agreement },
  } = useContext(context);

  useEffect(() => {
    getUsers().then((res) => setUsersList(res));
    console.log("users useEffect");
  }, [addUser]);

  const onClose = () => {
    setModal(!modal);
    setAddUser(!addUser);
  };

  const handleAddUserButton = () => {
    onClose();
  };

  // de CREAT  o functie de DELETE a userului

  const showUserList = usersList.map(
    ({ id, firstName, lastName, email, gender }) => (
      <UserListItem
        key={id}
        id={id}
        firstName={firstName}
        lastName={lastName}
        email={email}
        gender={gender}
      />
    )
  );
  return (
    <>
      {agreement || window.localStorage.length > 0 ? (
        <div>
          <button onClick={handleAddUserButton}>Add a user</button>
          {modal && (
            <Modal onClose={onClose}>
              <UserAddingForm onClose={onClose} />
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
