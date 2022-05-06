import { Route } from "../type.d/route";
import { HomePage } from "../components/HomePage/HomePage";
import Registration from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import Users from "../components/pages/Users/Users";
import Posts from "../components/pages/Posts/Posts";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import PostAddForm from "../components/pages/Posts/PostAddForm";
import PostEdit from "../components/pages/Posts/PostEdit";

export const routes: Route[] = [
  { name: "HomePage", path: "/", Element: HomePage },
  { name: "Login", path: "/login", Element: Login },
  { name: "Registration", path: "/registration", Element: Registration },
  { name: "Users", path: "/users", Element: Users },
  { name: "Posts", path: "/posts", Element: Posts },
  { name: "Dashboard", path: "/dashboard", Element: Dashboard },
  { name: "PostAddForm", path: "/create", Element: PostAddForm },
  { name: "PostEdit", path: "/posts/:id/edit", Element: PostEdit },
];
