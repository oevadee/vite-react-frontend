import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllUsers } from "../../api/users";
import { StyledHeader } from "../../components/styled-header";
import { apiUrl } from "../../contants";
import { useFetch } from "../../hooks/useFetch";
import { UsersTable } from "./components/users-table";

const SUpperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UsersView = () => {
  const users = useFetch(`${apiUrl}/users`);
  return (
    <>
      <SUpperWrapper>
        <StyledHeader>Users</StyledHeader>
        <button>Add user</button>
      </SUpperWrapper>
      <UsersTable users={users} />
    </>
  );
};
