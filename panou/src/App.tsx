import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./context/AppProvider";
// import Modal from "./components/Modal/Modal";
import PaginaPrincipala from "./components/HomePage/HomePage";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import NavBar from "./components/Navigation/NavBar/NavBar";
import Container from "./components/Container/Container";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppProvider>
          <Container>
            <NavBar />
            <Routes>
              <Route path="/registration" element={<Registration />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/" element={<PaginaPrincipala />}></Route>
            </Routes>
          </Container>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
