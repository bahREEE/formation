import Input from "../../Components/Input/Input";
export const loginForm = (defaultValues) => {
  return [
    {
      input: "input",
      name: "username",
      id: "Username",
      type: "text",
      placeholder: "Username",
      required: true,
      defaultValue: defaultValues["username"],
      Component: Input,
    },
    {
      input: "input",
      name: "password",
      id: "Password",
      type: "password",
      placeholder: "Password",
      required: true,
      defaultValue: defaultValues["password"],
      Component: Input,
    },
  ];
};
