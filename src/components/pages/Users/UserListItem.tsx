interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
}

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
          <button>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default UserListItem;
