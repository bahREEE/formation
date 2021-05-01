import Input from "../../Components/Input/Input";
import Select from "../../Components/Select/Select";
import { Roles } from "../roles";

export const userFORM = (defaultValues) => {
  return [
    {
      input: "input",
      name: "username",
      id: "username",
      type: "text",
      placeholder: "username",
      required: true,
      defaultValue: defaultValues["username"],
      Component: Input,
    },

    {
      input: "input",
      name: "password",
      id: "password",
      type: "password",
      placeholder: "password",
      defaultValue: defaultValues["password"],
      required: true,
      Component: Input,
    },

    {
      name: "role",
      input: "select",
      Component: Select,
      defaultText: "Select a role...",
      defaultValue: defaultValues["role"],
      options: Roles.map((role) => {
        return {
          value: role,
          name: role === "ADMINISTRATEUR" ? "Admin" : "User",
        };
      }),
    },
  ];
};

export const countryFORM = (defaultValues) => {
  return [
    {
      input: "input",
      name: "nom",
      id: "country",
      type: "text",
      placeholder: "country",
      required: true,
      defaultValue: defaultValues["nom"],
      Component: Input,
    },
  ];
};

export const profileFORM = (defaultValues) => {
  return [
    {
      input: "input",
      name: "libelle",
      id: "profile",
      type: "text",
      placeholder: "profile",
      required: true,
      defaultValue: defaultValues["libelle"],
      Component: Input,
    },
  ];
};
