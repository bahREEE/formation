import DashIcon from "../../assets/svgs/DashIcon";

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
    Icon: DashIcon,
    identif: "formations",
    name: "Fomrations",
    url: `${userDefaultUrl}`,
  },
  {
    Icon: DashIcon,
    identif: "accounts",
    name: "Accounts",
    url: `${userDefaultUrl}`,
  },
  {
    Icon: DashIcon,
    identif: "Settings",
    name: "Settings",
    url: `${userDefaultUrl}`,
  },
  {
    Icon: DashIcon,
    name: "Options",
    subList: [
      { name: "Option 1", identif: "option1", url: `${userDefaultUrl}` },
      { name: "Option 2", identif: "option2", url: `${userDefaultUrl}` },
      { name: "Option 2", identif: "option3", url: `${userDefaultUrl}` },
    ],
  },
  {
    Icon: DashIcon,
    name: "Options",
    subList: [
      { name: "Option 1", identif: "option4", url: `${userDefaultUrl}` },
      { name: "Option 2", identif: "option6", url: `${userDefaultUrl}` },
      { name: "Option 2", identif: "option5", url: `${userDefaultUrl}` },
    ],
  },
  {
    Icon: DashIcon,
    identif: "dashboard2",
    name: "Dashboard2",
    url: `${userDefaultUrl}`,
  },
];
