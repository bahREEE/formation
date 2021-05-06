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
    identif: "formateurs",
    name: "Formateurs",
    url: `${userDefaultUrl}/formateurs`,
  },
  {
    Icon: DashIcon,
    identif: "formations",
    name: "Fomrations",
    url: `${userDefaultUrl}/formations`,
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
];
