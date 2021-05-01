import DashIcon from "../../assets/svgs/DashIcon";
import Person from "../../assets/svgs/Person";
import Logout from "../../assets/svgs/Logout";

const adminDefaultUrl = "/admin";
export const adminDefaultIdentif = "dashboard";
export const adminDash = [
  {
    Icon: DashIcon,
    identif: "dashboard",
    name: "Dashboard",
    url: `${adminDefaultUrl}`,
  },
  {
    Icon: Person,
    identif: "accounts",
    name: "Accounts",
    url: `${adminDefaultUrl}/accounts`,
  },
  {
    Icon: DashIcon,
    identif: "Countries",
    name: "Countries",
    url: `${adminDefaultUrl}/countries`,
  },

  {
    Icon: DashIcon,
    identif: "Profiles",
    name: "Profiles",
    url: `${adminDefaultUrl}/profiles`,
  },
  {
    Icon: DashIcon,
    name: "Options",
    subList: [
      { name: "Option 1", identif: "option1", url: `${adminDefaultUrl}` },
      { name: "Option 2", identif: "option2", url: `${adminDefaultUrl}` },
      { name: "Option 2", identif: "option3", url: `${adminDefaultUrl}` },
    ],
  },
  {
    Icon: Logout,
    identif: "Logout",
    name: "Logout",
    url: `${adminDefaultUrl}/`,
  },
];
