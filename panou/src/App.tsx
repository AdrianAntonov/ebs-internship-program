import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import AppProvider from "./context/AppProvider";
import NavBar from "./components/Navigation/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Users from "./components/pages/Users/Users";
import Posts from "./components/pages/Posts/Posts";
import Dashboard from "./components/pages/Dashboard/Dashboard";

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
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/posts" element={<Posts />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
          </Container>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
