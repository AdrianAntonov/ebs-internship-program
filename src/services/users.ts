// import { useQuery } from "react-query";
import axios from "axios";
import { IaddingUser, IaddPost } from "../type.d/route";
// const KEY = "mG1lAJOyXhDVeAJwLP7UMfzuWbGksCCZkrr2SH4f0PU";
// const BASE_URL = "http://localhost:3001";

axios.defaults.baseURL = "http://localhost:3001";

export const getUsers = async () => {
  const { data } = await axios.get("/users");
  return data;
};

// export const queryUsers = () => {
//   const results = useQuery("users", () => {
//     return axios.get("/users");
//   });
// };

export const getPosts = async () => {
  const { data } = await axios.get("/posts");
  return data;
};

export const addingUser = async (user: IaddingUser) => {
  const { data } = await axios.post("/users", user);
  return data;
};

export const addPost = async (post: IaddPost) => {
  const { data } = await axios.post("/posts", post);
  return data;
};

export const deleteUser = async (userId: number) => {
  const { data } = await axios.delete(`/users/${userId}`);
  return data;
};

export const deletePost = async (userId: number) => {
  const { data } = await axios.delete(`/posts/${userId}`);
  return data;
};

export const checkUser = async (email: string, password: string) => {
  const { data } = await axios.get(
    `/users?email=${email}&password=${password}`
  );
  // console.log(data);
  return data;
};

export const getUserByID = async (id: number) => {
  if (id === undefined || null) {
    return {};
  }
  const { data } = await axios.get(`/users/${id}`);
  return data;
};

////////// CE TIP TRENBUIE SA FIE PENTRU id ?
export const getPostByID = async (id: number | string) => {
  // if (id === (undefined || null)) {
  //   return {};
  // }
  const { data } = await axios.get(`/posts/${id}`);
  return data;
};

export const editUser = async (id: number, cred: {}) => {
  const { data } = await axios.put(`/users/${id}`, cred);
  console.log("editUser");
  return data;
};

////////// CE TIP TREBUIE SA FIE PENTRU id ?
export const editPost = async (id: number | string, cred: {}) => {
  const { data } = await axios.put(`/posts/${id}`, cred);
  console.log("editPost");
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
  // getUsers,
  addingUser,
  deleteUser,
  getUserByID,
  getPostByID,
  editUser,
  getPosts,
  addPost,
  deletePost,
  checkUser,
  // unspsh,
};

export default fetching;
