import axios from "axios";
const KEY = "mG1lAJOyXhDVeAJwLP7UMfzuWbGksCCZkrr2SH4f0PU";
// const BASE_URL = "http://localhost:3001";

axios.defaults.baseURL = "http://localhost:3001";

export const getUsers = async () => {
  //axios.get(`${BASE_URL}/posts`).then((response) => console.log(response));
  const { data } = await axios.get("/users");
  return data;
};

export const addingUser = async (user: any) => {
  const { data } = await axios.post("/users", user);
  return data;
};

export const deleteUser = async (userId: any) => {
  const { data } = await axios.delete(`/users/${userId}`);
  return data;
};

export const unspsh = async () => {
  // const data = await axios("https://api.unsplash.com/photos/random");
  const { data } = await axios(
    `https://api.unsplash.com/photos/?client_id=${KEY}`
  );
  console.log(data);
};

const fetching = {
  getUsers,
  addingUser,
  deleteUser,
  unspsh,
};

export default fetching;
