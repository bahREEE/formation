import DashIcon from "../../assets/svgs/DashIcon";
import Person from "../../assets/svgs/Person";
import Earth from "../../assets/svgs/Earth";
import Profile from "../../assets/svgs/Profile";

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
    Icon: Earth,
    identif: "Countries",
    name: "Countries",
    url: `${adminDefaultUrl}/countries`,
  },

  {
    Icon: Profile,
    identif: "Profiles",
    name: "Profiles",
    url: `${adminDefaultUrl}/profiles`,
  },

  {
    Icon: Profile,
    identif: "Domains",
    name: "Domains",
    url: `${adminDefaultUrl}/domains`,
  },
  {
    Icon: Profile,
    identif: "Organizations",
    name: "Organizations",
    url: `${adminDefaultUrl}/organizations`,
  },
];
/*  {
    Icon: DashIcon,
    name: "Options",
    subList: [
      { name: "Option 1", identif: "option1", url: `${adminDefaultUrl}` },
      { name: "Option 2", identif: "option2", url: `${adminDefaultUrl}` },
      { name: "Option 2", identif: "option3", url: `${adminDefaultUrl}` },
    ],
  },*/
