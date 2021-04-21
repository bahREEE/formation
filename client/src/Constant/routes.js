import { Fragment } from "react";
import Edit from "../assets/svgs/Edit";
import AddAccount from "../Pages/Admin/Accounts/AddAccount";
import ListAccounts from "../Pages/Admin/Accounts/ListAccounts";
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
  { component: ListAccounts, title: "Accounts", path: "/accounts" },
  { component: AddAccount, title: "Accounts", path: "/accounts/ADD" },
  { component: Edit, title: "Accounts", path: "/accounts/EDIT/:id" },
  { component: ListAccounts, title: "Formation", path: "/formations" },
  { component: ListAccounts, title: "Settings", path: "/settings" },
  { component: () => <Fragment />, title: "Acceuil", path: "/" },
];
export const UserRoutes = [];
