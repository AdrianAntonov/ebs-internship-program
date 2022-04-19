import { Route } from "../type.d/route";
import { HomePage } from "../components/HomePage/HomePage";
// import Registration from "../components/Registration/Registration";
// import Login from "../components/Login/Login";
// import Users from "../components/pages/Users/Users";
// import Posts from "../components/pages/Posts/Posts";
// import Dashboard from "../components/pages/Dashboard/Dashboard";

// export const routes: Route[] = [
//   { name: "Dashboard", path: "/", exact: true, Component: "Dashboard" },
// ];
export const routes: Route[] = [
  { name: "HomePage", path: "/", Element: HomePage },
  // { name: "Login", path: "/login", Element: Login },
  // { name: "Registration", path: "/registration", Element: Registration },
  // { name: "Users", path: "/users", Element: Users },
  // { name: "Posts", path: "/posts", Element: Posts },
  // { name: "Dashboard", path: "/dashboard", Element: Dashboard },
];

// <Route path="/registration" element={<Registration />}></Route>
// <Route path="/login" element={<Login />}></Route>
// <Route path="/" element={<HomePage />}></Route>
// <Route path="/users" element={<Users />}></Route>
// <Route path="/posts" element={<Posts />}></Route>
// <Route path="/dashboard" element={<Dashboard />}></Route>
