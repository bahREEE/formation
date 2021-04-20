import List from "../Components/List/List";
import Accounts from "../Pages/Admin/Accounts/Accounts";
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

export const AdminRoutes = [
  { component: Accounts, title: "Accounts", path: "/accounts" },
  { component: Accounts, title: "Formation", path: "/formations" },
  { component: Accounts, title: "Settings", path: "/settings" },
  { component: List, title: "Acceuil", path: "/" },
];
export const UserRoutes = [];
