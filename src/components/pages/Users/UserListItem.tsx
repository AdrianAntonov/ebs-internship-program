import { deleteUser } from "../../../services/users";
import context from "../../../context/app-context";
import { useContext } from "react";

interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  handleUserList: () => void;
  handleEditUser: (id: number) => void;
}

const UserListItem: React.FC<UserProps> = ({
  id,
  firstName,
  lastName,
  email,
  gender,
  handleUserList,
  handleEditUser,
}) => {
  const { user } = useContext(context);

  const handleDeleteUser = (arg: number) => {
    deleteUser(arg);
    handleUserList();
  };

  const handleEditUserItem = (id: number) => {
    handleEditUser(id);
  };

  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>
          {firstName} {lastName}
        </td>
        <td>{email}</td>
        <td>{gender}</td>
        <td>
          {user.role === "Administrator" && (
            <>
              <button onClick={() => handleEditUserItem(id)}>Edit</button>
              <button onClick={() => handleDeleteUser(id)}>Delete</button>
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default UserListItem;
