import React from "react";
import styled from "styled-components";
import { deleteUser } from "../../../../api/users";
import { User } from "../../../../types/user";

const STableWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
`;

const STable = styled.table`
  width: 100%;
  margin-top: 1rem;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;

const STr = styled.tr`
  background-color: ${({ theme }) => theme.colors.graniteGray};
  &:first-child {
    th {
      &:first-child {
        border-top-left-radius: 0.75rem;
      }
      &:last-child {
        border-top-right-radius: 0.75rem;
      }
    }
  }
  &:last-child {
    td {
      &:first-child {
        border-bottom-left-radius: 0.75rem;
      }
      &:last-child {
        border-bottom-right-radius: 0.75rem;
      }
    }
  }
`;

const STh = styled.th`
  padding: 1.2rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.darkSienna};
  text-transform: uppercase;

  &:nth-child(1) {
    width: 40%;
  }
`;

const STd = styled.td`
  padding: 1rem 0.8rem;
  &:nth-child(1) {
    width: 40%;
  }
`;

const SDeleteButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  img {
    width: 1.5rem;
    aspect-ratio: auto;
  }
`;

interface Props {
  users: User[];
}

export const UsersTable = ({ users }: Props) => {
  const columns = ["name", "age", "role"];

  const handleDelete = async (id: string) => await deleteUser(id);

  return (
    <STableWrapper>
      <STable>
        <thead>
          <STr>
            {columns.map((el) => (
              <STh key={el}>{el}</STh>
            ))}
            <STh />
          </STr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map(({ id, firstName, lastName, age, role }) => (
              <STr key={id}>
                <STd>{`${firstName} ${lastName}`}</STd>
                <STd>{age}</STd>
                <STd>{role || "-"}</STd>
                <STd>
                  <SDeleteButton onClick={() => handleDelete(id)}>
                    <img src="src/assets/ic-delete.png" alt="delete icon" />
                  </SDeleteButton>
                </STd>
              </STr>
            ))}
        </tbody>
      </STable>
    </STableWrapper>
  );
};
