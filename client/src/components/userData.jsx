import React from "react";

const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { Mine_ID, Mine_name, Distance, Date} = curUser;
        return (
          <tr key={Mine_ID}>
            <td>{Mine_ID}</td>
            <td>{Mine_name}</td>
            <td>{Distance}</td>
            <td>{Date}</td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
