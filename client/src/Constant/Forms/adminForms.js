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
    },

    {
      input: "input",
      name: "password",
      id: "password",
      type: "password",
      placeholder: "password",
      defaultValue: defaultValues["password"],
      required: true,
    },

    {
      name: "role",
      input: "select",

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
    },
  ];
};

export const domainFORM = (defaultValues) => {
  return [
    {
      input: "input",
      name: "libelle",
      id: "domain",
      type: "text",
      placeholder: "domain",
      required: true,
      defaultValue: defaultValues["libelle"],
    },
  ];
};

export const organizationFORM = (defaultValues) => {
  return [
    {
      input: "input",
      name: "libelle",
      id: "organization",
      type: "text",
      placeholder: "organization",
      required: true,
      defaultValue: defaultValues["libelle"],
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
    },

    {
      name: "type",
      input: "select",

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
    },

    {
      input: "input",
      name: "duree_jrs",
      id: "Duree (jours)",
      type: "number",
      placeholder: "Duree (jours)",
      defaultValue: defaultValues["duree_jrs"],
      required: true,
    },

    {
      input: "input",
      name: "budget",
      id: "Budget",
      type: "float",
      placeholder: "Budget (DT)",
      defaultValue: defaultValues["budget"],
      required: true,
    },
    {
      input: "input",
      name: "nbsession",
      id: "Nombre de sessions",
      type: "number",
      placeholder: "Nombre de sessions",
      defaultValue: defaultValues["nbsession"],
      required: true,
    },
  ];
};

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
    },

    {
      input: "input",
      name: "formateurLastname",
      id: "Last name",
      type: "text",
      placeholder: "Last name",
      defaultValue: defaultValues["formateurLastname"],
      required: true,
    },

    {
      input: "input",
      name: "email",
      id: "Email",
      type: "email",
      placeholder: "Email",
      defaultValue: defaultValues["email"],
      required: true,
    },

    {
      input: "input",
      name: "tel",
      id: "phone",
      type: "text",
      placeholder: "phone",
      defaultValue: defaultValues["tel"],
      required: true,
    },

    {
      name: "type",
      input: "select",

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
export const sessionForm = (
  defaultValues,
  organizations,
  formateurs,
  formations
) => {
  return [
    {
      name: "formation",
      input: "select",

      defaultText: "Select a formation...",
      defaultValue: defaultValues["formation"],
      options: formations.map((formation) => {
        return {
          value: JSON.stringify({ ...formation }),
          name: formation.titre,
        };
      }),
    },

    {
      name: "formateur",
      input: "select",

      defaultText: "Select a formateur...",
      defaultValue: defaultValues["formateur"],
      options: formateurs.map((formateur) => {
        return {
          value: JSON.stringify({ ...formateur }),
          name: `${formateur.formateurLastname} ${formateur.formateurName}`,
        };
      }),
    },

    {
      name: "organisme",
      input: "select",

      defaultText: "Select an Organization...",
      defaultValue: defaultValues["organisme"],
      options: organizations.map((organization) => {
        return {
          value: JSON.stringify({ ...organization }),
          name: organization.libelle,
        };
      }),
    },

    {
      input: "input",
      name: "lieu",
      id: "place",
      type: "text",
      placeholder: "Place",
      defaultValue: defaultValues["lieu"],
      required: true,
    },

    {
      input: "input",
      name: "dateDebut",
      id: "start",
      type: "Date",
      placeholder: "Start",
      defaultValue: defaultValues["dateDebut"],
      required: true,
    },

    {
      input: "input",
      name: "dateFin",
      id: "end",
      type: "Date",
      placeholder: "End",
      defaultValue: defaultValues["dateFin"],
      required: true,
    },

    {
      input: "input",
      name: "nbParticipants",
      id: "Nombre of participants",
      type: "number",
      placeholder: "Nombre of participants",
      defaultValue: defaultValues["nbParticipants"],
      required: true,
    },
  ];
};
