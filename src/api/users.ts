import { apiUrl } from "../contants";

export const getAllUsers = async () => {
  const data = await fetch(`${apiUrl}/users`, { method: "no-cors" });
  console.log(data);
};
