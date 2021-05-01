import { Fragment } from "react";

import MainAdmin from "../Pages/Admin/MainAdmin";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import MainUser from "../Pages/User/MainUser";

import AddAccount from "../Pages/Admin/Accounts/AddAccount";
import EditAccount from "../Pages/Admin/Accounts/EditAccount";
import ListAccount from "../Pages/Admin/Accounts/ListAccount";

import AddCountry from "../Pages/Admin/Countries/AddCountry";
import EditCountry from "../Pages/Admin/Countries/EditCountry";
import ListCountry from "../Pages/Admin/Countries/ListCountry";

import ListProfile from "../Pages/Admin/Profiles/ListProfile";
import AddProfile from "../Pages/Admin/Profiles/AddProfile";
import EditProfile from "../Pages/Admin/Profiles/EditProfile";

import ListDomain from "../Pages/Admin/Domains/ListDomain";
import AddDomain from "../Pages/Admin/Domains/AddDomain";
import EditDomain from "../Pages/Admin/Domains/EditDomain";

import ListOrganization from "../Pages/Admin/Organizations/ListOrganization";
import EditOrganization from "../Pages/Admin/Organizations/EditOrganization";
import AddOrganization from "../Pages/Admin/Organizations/AddOrganization";

import ListFormateur from "../Pages/User/Formateurs/ListFormateur";
import EditFormateur from "../Pages/User/Formateurs/EditFormateur";
import AddFormateur from "../Pages/User/Formateurs/AddFormateur";

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
  {
    component: ListDomain,
    title: "domains",
    path: "/domains",
  },
  {
    component: AddDomain,
    title: "domains add",
    path: "/domains/ADD",
  },
  {
    component: EditDomain,
    title: "domains edit",
    path: "/domains/EDIT/:id",
  },
  {
    component: ListOrganization,
    title: "organizations",
    path: "/organizations",
  },
  {
    component: AddOrganization,
    title: "organizations add",
    path: "/organizations/ADD",
  },
  {
    component: EditOrganization,
    title: "organizations edit",
    path: "/organizations/EDIT/:id",
  },
  { component: () => <Fragment />, title: "Acceuil", path: "/" },
];
export const UserRoutes = [
  {
    component: ListFormateur,
    title: "formateurs",
    path: "/formateurs",
  },
  {
    component: AddFormateur,
    title: "formateurs add",
    path: "/formateurs/ADD",
  },
  {
    component: EditFormateur,
    title: "formateurs edit",
    path: "/formateurs/EDIT/:id",
  },
  { component: () => <Fragment />, title: "Acceuil", path: "/" },
];
