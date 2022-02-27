import { apiUrl } from "../contants";

export const getAllUsers = async () => {
  const { body } = await fetch(`http://localhost:8000/users`);
  return body;
};
