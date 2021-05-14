import DashIcon from "../../assets/svgs/DashIcon";
import Earth from "../../assets/svgs/Earth";
import Edit from "../../assets/svgs/Edit";
import Logout from "../../assets/svgs/Logout";
import Profile from "../../assets/svgs/Profile";

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
    name: "Participants",
    url: `${userDefaultUrl}/participants`,
  },
  {
    Icon: Edit,
    identif: "sessions",
    name: "Sessions",
    url: `${userDefaultUrl}/sessions`,
  },
  {
    Icon: Profile,
    identif: "Profiles",
    name: "Profiles",
    url: `${userDefaultUrl}/profiles`,
  },
  {
    Icon: Earth,
    identif: "countries",
    name: "Countries",
    url: `${userDefaultUrl}/countries`,
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
