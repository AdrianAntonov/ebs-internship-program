// import React from "react";
import { routes } from "./utils/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import AppNav from "./components/Navigation/AppNav/AppNav";
import AppProvider from "./context/AppProvider";
import NavBar from "./components/Navigation/NavBar/NavBar";
import { Layout, Sidebar } from "ebs-design";
import "ebs-design/dist/styles/index.scss";
// import UserAddingForm from "./components/pages/Users/Form/UserAddingForm";
// import HomePage from "./components/HomePage/HomePage";
// import Registration from "./components/Registration/Registration";
// import Login from "./components/Login/Login";
// import Users from "./components/pages/Users/Users";
// import Posts from "./components/pages/Posts/Posts";
// import Dashboard from "./components/pages/Dashboard/Dashboard";
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
            <Layout>
              <Layout.Topbar.RightSide>
                <NavBar />
              </Layout.Topbar.RightSide>
              <Sidebar>
                <AppNav />
              </Sidebar>
              <Layout.Content>
                <Routes>
                  {routes.map(({ Element, ...item }) => (
                    <Route
                      key={item.name}
                      path={item.path}
                      element={<Element />}
                    />
                  ))}
                  {/* <Route path="/registration" element={<Registration />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/" element={<HomePage />}></Route>
                  <Route path="/users" element={<Users />}></Route>
                  <Route path="/posts" element={<Posts />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route> */}
                </Routes>
              </Layout.Content>
              {/* <UserAddingForm /> */}
            </Layout>
          </Container>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
