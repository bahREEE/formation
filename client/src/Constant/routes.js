import MainAdmin from "../Pages/Admin/MainAdmin";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import MainUser from "../Pages/User/MainUser";

const adminPath = "/admin";
const userPath = "/user";

export const AuthenticateRouters = [
  {
    path: `/login`,
    component: Login,
  },
  {
    path: `/signup`,
    component: Signup,
  },
];

export const MainRoutes = [
  {
    path: `${adminPath}`,
    component: MainAdmin,
    privilege: "admin",
  },
  { path: `${userPath}`, component: MainUser, privilege: "user" },
];

export const AdminRoutes = [];
export const UserRoutes = [];
