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

import ListFormateur from "../Pages/Admin/Formateurs/ListFormateur";
import EditFormateur from "../Pages/Admin/Formateurs/EditFormateur";
import AddFormateur from "../Pages/Admin/Formateurs/AddFormateur";

import AddFormation from "../Pages/Admin/Formations/AddFormation";
import EditForamtion from "../Pages/Admin/Formations/EditFormation";
import ListFormation from "../Pages/Admin/Formations/ListFormation";

import ListSessions from "../Pages/Admin/Sessions/ListSession";
import EditSession from "../Pages/Admin/Sessions/EditSession";
import AddSession from "../Pages/Admin/Sessions/AddSessions";

import ListParticipant from "../Pages/User/Participants/ListParticipant";
import EditParticipant from "../Pages/User/Participants/EditParticipant";
import AddParticipant from "../Pages/User/Participants/AddParticipant";

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
    privilege: "ADMINISTRATEUR",
  },
  { path: `${userPath}`, component: MainUser, privilege: "SIMPLE_UTILISATEUR" },
];

export const AdminRoutes = [
  { component: ListAccount, title: "accounts", path: "/accounts" },
  { component: AddAccount, title: "accounts", path: "/accounts/ADD" },
  {
    component: EditAccount,
    title: "accounts",
    path: "/accounts/EDIT/:id",
  },
  { component: ListCountry, title: "countries", path: "/countries" },
  { component: AddCountry, title: "countries", path: "/countries/ADD" },
  {
    component: EditCountry,
    title: "countries",
    path: "/countries/EDIT/:id",
  },
  {
    component: ListProfile,
    title: "profiles",
    path: "/profiles",
  },
  {
    component: AddProfile,
    title: "profiles",
    path: "/profiles/ADD",
  },
  {
    component: EditProfile,
    title: "profiles",
    path: "/profiles/EDIT/:id",
  },
  {
    component: ListDomain,
    title: "domains",
    path: "/domains",
  },
  {
    component: AddDomain,
    title: "domains",
    path: "/domains/ADD",
  },
  {
    component: EditDomain,
    title: "domains",
    path: "/domains/EDIT/:id",
  },
  {
    component: ListOrganization,
    title: "organizations",
    path: "/organizations",
  },
  {
    component: AddOrganization,
    title: "organizations",
    path: "/organizations/ADD",
  },
  {
    component: EditOrganization,
    title: "organizations",
    path: "/organizations/EDIT/:id",
  },
  {
    component: ListFormateur,
    title: "formateurs",
    path: "/formateurs",
  },
  {
    component: AddFormateur,
    title: "formateurs",
    path: "/formateurs/ADD",
  },
  {
    component: EditFormateur,
    title: "formateurs",
    path: "/formateurs/EDIT/:id",
  },
  {
    component: AddFormation,
    title: "formations",
    path: "/formations/ADD",
  },
  {
    component: EditForamtion,
    title: "formations",
    path: "/formations/EDIT/:id",
  },
  {
    component: ListFormation,
    title: "formations",
    path: "/formations",
  },

  {
    component: ListSessions,
    title: "sessions",
    path: "/sessions",
  },
  {
    component: EditSession,
    title: "sessions",
    path: "/sessions/EDIT/:id",
  },
  {
    component: AddSession,
    title: "sessions",
    path: "/sessions/ADD",
  },
  { component: () => <Fragment />, title: "Acceuil", path: "/" },
];
export const UserRoutes = [
  {
    component: ListParticipant,
    title: "participants",
    path: "/participants",
  },
  {
    component: EditParticipant,
    title: "participants",
    path: "/participants/EDIT/:id",
  },
  {
    component: AddParticipant,
    title: "participants",
    path: "/participants/ADD",
  },

  { component: () => <Fragment />, title: "Acceuil", path: "/" },
];
