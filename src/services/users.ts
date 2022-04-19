import axios from "axios";
import { IaddingUser } from "../type.d/route";
// const KEY = "mG1lAJOyXhDVeAJwLP7UMfzuWbGksCCZkrr2SH4f0PU";
// const BASE_URL = "http://localhost:3001";

axios.defaults.baseURL = "http://localhost:3001";

export const getUsers = async () => {
  //axios.get(`${BASE_URL}/posts`).then((response) => console.log(response));
  const { data } = await axios.get("/users");
  return data;
};

export const addingUser = async (user: IaddingUser) => {
  const { data } = await axios.post("/users", user);
  return data;
};

export const deleteUser = async (userId: number) => {
  const { data } = await axios.delete(`/users/${userId}`);
  return data;
};

export const checkUser = async (email: string, password: string) => {
  const { data } = await axios.get(
    `/users?email=${email}&password=${password}`
  );
  console.log(data);
  return data;
};

export const getUserByID = async (id: number) => {
  if (id === undefined || null) {
    return {};
  }
  const { data } = await axios.get(`/users/${id}`);
  return data;
};

// export const unspsh = async () => {
//   // const data = await axios("https://api.unsplash.com/photos/random");
//   const { data } = await axios(
//     `https://api.unsplash.com/photos/?client_id=${KEY}`
//   );
//   console.log(data);
// };

const fetching = {
  getUsers,
  addingUser,
  deleteUser,
  getUserByID,
  // unspsh,
};

export default fetching;
