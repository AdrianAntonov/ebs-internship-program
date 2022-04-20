import { deleteUser } from "../../../services/users";

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
  const handleDeleteUser = (arg: number) => {
    console.log(arg);
    deleteUser(arg);
    handleUserList();
  };

  const handleEditUserItem = (id: number) => {
    handleEditUser(id);
    console.log("editUser, edit button");
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
          <button onClick={() => handleEditUserItem(id)}>Edit</button>
          <button onClick={() => handleDeleteUser(id)}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default UserListItem;
