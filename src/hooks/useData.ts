import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getPosts,
  getUsers,
  getUserByID,
  getPostByID,
} from "../services/users";

export const useUsersData = (
  onSuccess: (data: []) => void,
  onError: (error: string) => void
) => {
  return useQuery("users", getUsers, {
    onSuccess,
    onError,
  });
};

export const useGetUserById = (id: number) => {
  return useQuery(["getUser", id], () => getUserByID(id));
};

export const useGetPostById = (id: number) => {
  return useQuery(["getPost", id], () => getPostByID(id));
};

export const usePostsData = (
  onSuccess: (data: []) => void,
  onError: (error: string) => void
) => {
  return useQuery("posts", getPosts, {
    onSuccess,
    onError,
  });
};

type Choose = "users" | "posts";

export const useUniversalListMutation = (func: (arg?: any) => Promise<any>) => {
  const queryClient = useQueryClient();

  return useMutation(func, {
    onSuccess: (list: Choose) => queryClient.invalidateQueries(list),
  });
};

export const useUniversalEditMutation = (
  func: (arg: { id: number; cred: {} }) => Promise<any>
) => {
  const queryClient = useQueryClient();

  return useMutation(func, {
    onSuccess: () => queryClient.invalidateQueries(),
  });
};
