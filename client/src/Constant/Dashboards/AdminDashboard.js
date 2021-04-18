import DashIcon from "../../assets/svgs/DashIcon";

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
    Icon: DashIcon,
    identif: "formations",
    name: "Fomrations",
    url: `${adminDefaultUrl}`,
  },
  {
    Icon: DashIcon,
    identif: "accounts",
    name: "Accounts",
    url: `${adminDefaultUrl}`,
  },
  {
    Icon: DashIcon,
    identif: "Settings",
    name: "Settings",
    url: `${adminDefaultUrl}`,
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
    Icon: DashIcon,
    name: "Options",
    subList: [
      { name: "Option 1", identif: "option4", url: `${adminDefaultUrl}` },
      { name: "Option 2", identif: "option6", url: `${adminDefaultUrl}` },
      { name: "Option 2", identif: "option5", url: `${adminDefaultUrl}` },
    ],
  },
  {
    Icon: DashIcon,
    identif: "dashboard2",
    name: "Dashboard2",
    url: `${adminDefaultUrl}`,
  },
];
