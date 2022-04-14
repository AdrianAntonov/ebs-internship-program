import { createContext } from "react";

interface IsetUser {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    agreement: boolean;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
      email: string;
      gender: string;
      agreement: boolean;
    }>
  >;
}
export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  agreement: false,
};
const appContext = createContext<IsetUser>({
  user: initialState,
  setUser: () => null,
});

export default appContext;
