// import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { addingUser, getUsers, deleteUser } from "../services/users";

// export function useUsersData(onSuccess: () => void, onError: () => void) {
//   return useQuery("users", getUsers, {
//     onSuccess,
//     onError,
//   });
// }

export const useUsersData = (
  onSuccess: (data: []) => void,
  onError: (error: string) => void
) => {
  return useQuery("users", getUsers, {
    onSuccess,
    onError,
  });
};

// const mutate = useMutation();

export const useMutateUsersList = () => {
  const queryClient = useQueryClient();

  return useMutation(addingUser, {
    onSuccess: () => queryClient.invalidateQueries("users"),
  });
};

export const useMutateOnDeleteUsersList = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: () => queryClient.invalidateQueries("users"),
  });
};

//////////////// DE CE ASA NU MEREGE ??? //////////////////////

// export const useMutateOnDeleteUsersList = (arg) => {
//   const queryClient = useQueryClient();

//   return useMutation(deleteUser, {
//     onSuccess: () => queryClient.invalidateQueries("users"),
//   });
// };
