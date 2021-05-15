import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
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
        const { data } = await RequestApi("post", login.LOGIN, "", client);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", `Bearer ${data.token}`);
        switch (data.user.authorities[0].authority) {
          case "ROLE_ADMIN":
            history.push("/admin");
            break;
          case "ROLE_USER":
            history.push("/user");
            break;
          default:
            console.error("no User with the provided roles");
            break;
        }
      }
    } catch (error) {
      setErrors({
        username: "Check your informations!!",
        password: "Check your informations!!",
      });
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
            buttomText="Sign in"
          />
        </div>
        <Link className="login_nav" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
