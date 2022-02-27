import { apiUrl } from "../contants";

export const getAllUsers = async () => {
  const { body } = await fetch(`${apiUrl}/users`);
  return body;
};

export const deleteUser = async (userId: string) => {
  await fetch(`${apiUrl}/users/${userId}`, { method: "DELETE" });
};
