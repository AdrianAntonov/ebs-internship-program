import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
// import Modal from "./components/Modal/Modal";
import PaginaPrincipala from "./components/PaginaPrincipala/PaginaPrincipala";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <NavLink to="/registration">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/principala">Principala</NavLink>
          <Routes>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/principala" element={<PaginaPrincipala />}></Route>
            {/* <Modal>
              <Login />
            </Modal> */}
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
