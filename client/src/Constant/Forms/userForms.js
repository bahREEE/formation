//import Select  from "react-select";
export const participantForm = (
  defaultValues,
  sessions,
  countries,
  profiles
) => {
  return [
    {
      input: "input",
      name: "nom",
      id: "Name",
      type: "input",
      placeholder: "Name",
      defaultValue: defaultValues["nom"],
      required: true,
    },

    {
      input: "input",
      name: "prenom",
      id: "Last Name",
      type: "input",
      placeholder: "Last Name",
      defaultValue: defaultValues["prenom"],
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
      name: "pays",
      input: "select",
      defaultText: "Select a Country...",
      defaultValue: defaultValues["pays"],
      options: countries.map((country) => {
        return {
          value: JSON.stringify(country),
          name: country.nom,
        };
      }),
    },

    {
      name: "profil",
      input: "select",
      defaultText: "Select a Profile...",
      defaultValue: defaultValues["profil"],
      options: profiles.map((profile) => {
        return {
          value: JSON.stringify(profile),
          name: profile.libelle,
        };
      }),
    },

    {
      input: "multi-select",
      name: "sessions",
      multiple: true,
      defaultText: "Select Sessions...",
      defaultValue: defaultValues["sessions"],
      options: sessions.map((session) => {
        return {
          value: session,
          label: session.formation.titre,
        };
      }),
    },
  ];
};
