import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../Components/Form/Form";
import { loginForm } from "../../Constant/Forms/loginForm";
import { login } from "../../Services/api";
import RequestApi from "../../Services/request";
import "./login.scss";

const Login = () => {
  const history = useHistory();
  const [client, setClient] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleChange = (value, name) => {
    setClient({ ...client, [`${name}`]: value });
    setErrors({ ...errors, [`${name}`]: "" });
  };

  const checkError = () => {
    let errorsFound = false;
    let generateErrors = {
      password: "",
      username: "",
    };

    if (client.password.length < 4) {
      generateErrors.password = "password is weak!";
      errorsFound = true;
    }

    if (client.username.length < 4) {
      generateErrors.username = "username should have at leasr 4 characters!";
      errorsFound = true;
    }

    setErrors(generateErrors);
    return errorsFound;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!checkError()) {
        const {
          data: { user, token },
        } = await RequestApi("post", login.LOGIN, "", client);
        //  console.log(user, token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", `Bearer ${token}`);
        switch (user.authorities[0].authority) {
          case "ADMINISTRATEUR":
            history.push("/admin");
            break;
          case "SIMPLE_UTILISATEUR":
            history.push("/user");
            break;
          default:
            console.error("no User with the provided roles");
            break;
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1 className="container__title">sign in</h1>
        <div className="login__form">
          <Form
            items={loginForm({ username: "", password: "" })}
            errors={errors}
            onSubmit={onSubmit}
            handleChange={handleChange}
            values={client}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
