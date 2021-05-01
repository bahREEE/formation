import Input from "../../Components/Input/Input";
import Select from "../../Components/Select/Select";

export const formateurFORM = (defaultValues, organizations) => {
  return [
    {
      input: "input",
      name: "formateurName",
      id: "First name",
      type: "text",
      placeholder: "First name",
      required: true,
      defaultValue: defaultValues["formateurName"],
      Component: Input,
    },

    {
      input: "input",
      name: "formateurLastname",
      id: "Last name",
      type: "text",
      placeholder: "Last name",
      defaultValue: defaultValues["formateurLastname"],
      required: true,
      Component: Input,
    },

    {
      input: "input",
      name: "email",
      id: "Email",
      type: "email",
      placeholder: "Email",
      defaultValue: defaultValues["email"],
      required: true,
      Component: Input,
    },

    {
      input: "input",
      name: "tel",
      id: "phone",
      type: "text",
      placeholder: "phone",
      defaultValue: defaultValues["tel"],
      required: true,
      Component: Input,
    },

    {
      name: "type",
      input: "select",
      Component: Select,
      defaultText: "Select a type...",
      defaultValue: defaultValues["type"],
      options: ["interne", "externe"].map((type) => {
        return {
          value: type,
          name: type,
        };
      }),
    },

    {
      name: "org",
      input: "select",
      Component: Select,
      defaultText: "Select an organization...",
      defaultValue: defaultValues["org"],
      options: organizations.map((organization) => {
        return {
          value: JSON.stringify({ id: organization.id }),
          name: organization.libelle,
        };
      }),
    },
  ];
};
