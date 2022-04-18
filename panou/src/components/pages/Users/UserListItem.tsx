import React from "react";

function UserListItem({ id, firstName, lastName, email, gender }: any) {
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
}

export default UserListItem;
