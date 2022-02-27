import React from "react";
import styled from "styled-components";
import { User } from "../../../../types/user";

const STableWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
`;

const STable = styled.table`
  width: 100%;
  margin-top: 2rem;
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

const STH = styled.th`
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

interface Props {
  users: User[];
}

export const UsersTable = ({ users }: Props) => {
  const [id, ...rest] = Object.keys(users[0]);
  const columns = ["name", "age", "role"];
  return (
    <STableWrapper>
      <STable>
        <thead>
          <STr>
            {columns.map((el) => (
              <STH key={el}>{el}</STH>
            ))}
          </STr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map(({ id, firstName, lastName, age, role }) => (
              <STr key={id}>
                <STd>{`${firstName} ${lastName}`}</STd>
                <STd>{age}</STd>
                <STd>{role}</STd>
              </STr>
            ))}
        </tbody>
      </STable>
    </STableWrapper>
  );
};
