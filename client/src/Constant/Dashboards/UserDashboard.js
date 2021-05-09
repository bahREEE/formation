import DashIcon from "../../assets/svgs/DashIcon";
import Logout from "../../assets/svgs/Logout";

const userDefaultUrl = "/user";

export const userDefaultIdentif = "dashboard";
export const userDash = [
  {
    Icon: DashIcon,
    identif: "dashboard",
    name: "Dashboard",
    url: `${userDefaultUrl}`,
  },

  {
    Icon: Logout,
    identif: "participants",
    name: "participants",
    url: `${userDefaultUrl}/participants`,
  },
];
/*
  {
    Icon: DashIcon,
    name: "Options",
    subList: [
      { name: "Option 1", identif: "option1", url: `${userDefaultUrl}` },
      { name: "Option 2", identif: "option2", url: `${userDefaultUrl}` },
      { name: "Option 2", identif: "option3", url: `${userDefaultUrl}` },
    ],
  },*/
