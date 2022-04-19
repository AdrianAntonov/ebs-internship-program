import { deleteUser } from "../../../services/users";

interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
}
// de transmis prin props functia DE DELETE
// de facut GET fetch, si INTREBARE SA FIE ID-URILE consecutive dupa DELETE

const handleDeleteUser = (arg: number) => {
  console.log(arg);
  deleteUser(arg);
};

const UserListItem: React.FC<UserProps> = ({
  id,
  firstName,
  lastName,
  email,
  gender,
}) => {
  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>
          {firstName} {lastName}
        </td>
        {/* <td></td> */}
        <td>{email}</td>
        <td>{gender}</td>
        <td>
          <button>Edit</button>
          <button onClick={() => handleDeleteUser(id)}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default UserListItem;
