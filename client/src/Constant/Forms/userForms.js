import Input from "../../Components/Input/Input";
import Select from "../../Components/Select/Select";

export const formateurFORM = (defaultValues, organizations) => {
  // console.log(defaultValues);
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
          value: JSON.stringify({ ...organization }),
          name: organization.libelle,
        };
      }),
    },
  ];
};

export const formationForm = (defaultValues, domains) => {
  // console.log(defaultValues);
  return [
    {
      input: "input",
      name: "titre",
      id: "Title",
      type: "text",
      placeholder: "Title",
      required: true,
      defaultValue: defaultValues["titre"],
      Component: Input,
    },

    {
      name: "type",
      input: "select",
      Component: Select,
      defaultText: "Select a type...",
      defaultValue: defaultValues["type"],
      options: ["nationale", "internationale"].map((type) => {
        return {
          value: type,
          name: type,
        };
      }),
    },

    {
      name: "domaine",
      input: "select",
      Component: Select,
      defaultText: "Select a domain...",
      defaultValue: defaultValues["domaine"],
      options: domains.map((domain) => {
        return {
          value: JSON.stringify({ ...domain }),
          name: domain.libelle,
        };
      }),
    },

    {
      input: "input",
      name: "date",
      id: "Date",
      type: "Date",
      placeholder: "Date of Formation",
      defaultValue: defaultValues["date"],
      required: true,
      Component: Input,
    },

    {
      input: "input",
      name: "duree_jrs",
      id: "Duree (jours)",
      type: "number",
      placeholder: "Duree (jours)",
      defaultValue: defaultValues["duree_jrs"],
      required: true,
      Component: Input,
    },

    {
      input: "input",
      name: "budget",
      id: "Budget",
      type: "float",
      placeholder: "Budget (DT)",
      defaultValue: defaultValues["budget"],
      required: true,
      Component: Input,
    },
    {
      input: "input",
      name: "nbsession",
      id: "Nombre de sessions",
      type: "number",
      placeholder: "Nombre de sessions",
      defaultValue: defaultValues["nbsession"],
      required: true,
      Component: Input,
    },
  ];
};
