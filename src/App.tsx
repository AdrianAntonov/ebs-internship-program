// import React from "react";
import { routes } from "./utils/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import AppProvider from "./context/AppProvider";
import NavBar from "./components/Navigation/NavBar/NavBar";
// import HomePage from "./components/HomePage/HomePage";
// import Registration from "./components/Registration/Registration";
// import Login from "./components/Login/Login";
// import Users from "./components/pages/Users/Users";
// import Posts from "./components/pages/Posts/Posts";
// import Dashboard from "./components/pages/Dashboard/Dashboard";
// import UserAddingForm from "./components/pages/Users/Form/UserAddingForm";
// const routing = routes.map(({ element, ...item }) => (
//   <Route key={item.name} path={item.path} element={element} />
// ));
// console.log(routing);
function App() {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Container>
            <NavBar />
            <Routes>
              {routes.map(({ Element, ...item }) => (
                <Route key={item.name} path={item.path} element={<Element />} />
              ))}

              {/* {routes.map(({name: string, element: FunctionComponent<{}>|()=>JSX.Element,  path: string }) => (
                <Route key={name} path={path} element={element} />
              ))} */}

              {/* <Route path="/registration" element={<Registration />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/posts" element={<Posts />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route> */}
            </Routes>
            {/* <UserAddingForm /> */}
          </Container>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
