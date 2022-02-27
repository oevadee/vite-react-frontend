import React from "react";
import { User } from "../../../../types/user";

interface Props {
  users: User[] | string;
}

export const UsersTable = ({ users }: Props) => {
  console.log(users);
  return (
    <table>
      <thead>
        <tr>
          <th>test</th>
          <th>test2</th>
          <th>test3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>user1</td>
          <td>user2</td>
          <td>user3</td>
        </tr>
      </tbody>
    </table>
  );
};
