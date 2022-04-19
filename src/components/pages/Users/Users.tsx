import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUsers } from "../../../services/users";
import UserListItem from "./UserListItem";
import { useContext } from "react";
import context from "../../../context/app-context";

const Users: React.FC = () => {
  const {
    user: { agreement },
  } = useContext(context);

  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUsersList(res));
  }, []);

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
          <button>Add a user</button>
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
          <h4>Users</h4>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Users;
