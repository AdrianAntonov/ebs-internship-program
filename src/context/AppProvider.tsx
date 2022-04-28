import { useState, useEffect } from "react";
import appContext, { initialState } from "./app-context";
import { getUserByID } from "../services/users";

function AppProvider({ children }: any) {
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    const storageResult = window.localStorage.getItem("userID");
    console.log("useEffect");
    storageResult &&
      getUserByID(Number(storageResult))
        .then((result) => {
          setUser(result);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [setUser]);

  return (
    <appContext.Provider value={{ user, setUser }}>
      <div>{children}</div>
    </appContext.Provider>
  );
}

export default AppProvider;
