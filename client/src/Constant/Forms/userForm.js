import Input from "../../Components/Input/Input";
import Select from "../../Components/Select/Select";
import { Roles } from "../roles";

export const userFORM = [
  {
    input: "input",
    name: "username",
    id: "username",
    type: "text",
    placeholder: "username",
    required: true,
    defaultValue: "",
    Component: Input,
  },

  {
    input: "input",
    name: "password",
    id: "password",
    type: "password",
    placeholder: "password",
    required: true,
    Component: Input,
  },

  {
    name: "role",
    input: "select",
    Component: Select,
    roles: Roles.map((role) => {
      return {
        value: role,
        name: role === "ADMINISTRATEUR" ? "Admin" : "User",
      };
    }),
  },
];
