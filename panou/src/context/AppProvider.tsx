import { useState } from "react";
import appContext, { initialState } from "./app-context";

function AppProvider({ children }: any) {
  const [user, setUser] = useState(initialState);

  return (
    <appContext.Provider value={{ user, setUser }}>
      <div>{children}</div>
    </appContext.Provider>
  );
}

export default AppProvider;
