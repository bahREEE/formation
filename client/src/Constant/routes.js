import MainAdmin from "../Pages/Admin/MainAdmin";
import MainUser from "../Pages/User/MainUser";

const adminPath = "/admin";
const userPath = "/user";

export const MainRoutes = [
  {
    path: `${adminPath}`,
    component: MainAdmin,
    privilege: "admin",
    auth: true,
  },
  { path: `${userPath}`, component: MainUser, privilege: "user", auth: true },
];

export const AdminRoutes = [];
export const UserRoutes = [];
