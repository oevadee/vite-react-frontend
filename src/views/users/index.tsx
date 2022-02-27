import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllUsers } from "../../api/users";
import { StyledHeader } from "../../components/styled-header";
import { UsersTable } from "./components/users-table";

const SUpperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UsersView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = getAllUsers();
    console.log(data);
  }, []);
  return (
    <>
      <SUpperWrapper>
        <StyledHeader>Users</StyledHeader>
        <button>Add user</button>
      </SUpperWrapper>
      <UsersTable />
    </>
  );
};
