import { Fragment } from "react";

import AddAccount from "../Pages/Admin/Accounts/AddAccount";
import EditAccount from "../Pages/Admin/Accounts/EditAccount";
import ListAccount from "../Pages/Admin/Accounts/ListAccount";

import AddCountry from "../Pages/Admin/Countries/AddCountry";
import EditCountry from "../Pages/Admin/Countries/EditCountry";
import ListCountry from "../Pages/Admin/Countries/ListCountry";

import ListProfile from "../Pages/Admin/Profiles/ListProfile";
import AddProfile from "../Pages/Admin/Profiles/AddProfile";
import EditProfile from "../Pages/Admin/Profiles/EditProfile";

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
  { component: ListAccount, title: "accounts", path: "/accounts" },
  { component: AddAccount, title: "accounts add", path: "/accounts/ADD" },
  {
    component: EditAccount,
    title: "accounts edit",
    path: "/accounts/EDIT/:id",
  },
  { component: ListCountry, title: "countries", path: "/countries" },
  { component: AddCountry, title: "countries add", path: "/countries/ADD" },
  {
    component: EditCountry,
    title: "countries edit",
    path: "/countries/EDIT/:id",
  },
  {
    component: ListProfile,
    title: "profiles",
    path: "/profiles",
  },
  {
    component: AddProfile,
    title: "profiles add",
    path: "/profiles/ADD",
  },
  {
    component: EditProfile,
    title: "profiles edit",
    path: "/profiles/EDIT/:id",
  },
  { component: () => <Fragment />, title: "Acceuil", path: "/" },
];
export const UserRoutes = [];
