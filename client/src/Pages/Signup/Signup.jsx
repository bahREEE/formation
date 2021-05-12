import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from "../../Components/Form/Form";
import { signForm } from "../../Constant/Forms/loginForm";
import { login } from "../../Services/api";
import RequestApi from "../../Services/request";

const Signup = () => {
  const history = useHistory();
  const [client, setClient] = useState({
    username: "",
    password: "",
    confirmedPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmedPassword: "",
  });

  const handleChange = (value, name) => {
    setClient({ ...client, [`${name}`]: value });
    setErrors({ ...errors, [`${name}`]: "" });
  };

  const checkError = () => {
    let errorsFound = false;
    let generateErrors = {
      password: "",
      username: "",
      confirmedPassword: "",
    };

    if (client.password.length < 4) {
      generateErrors.password = "password is weak!";
      errorsFound = true;
    }

    if (client.username.length < 4) {
      generateErrors.username = "username should have at leasr 4 characters!";
      errorsFound = true;
    }

    if (client.password !== client.confirmedPassword) {
      generateErrors.confirmedPassword = "Ckeck your password/confirmPassword";
      errorsFound = true;
    }

    setErrors(generateErrors);
    return errorsFound;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!checkError()) {
        const { data } = await RequestApi("post", login.SIGN, "", {
          ...client,
          role: "SIMPLE_UTILISATEUR",
        });
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", `Bearer ${data.token}`);
        switch (data.user.authorities[0].authority) {
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
      setErrors({
        username: "Check your informations!!",
        password: "Check your informations!!",
        confirmedPassword: "Check your informations!!",
      });
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1 className="container__title">sign up</h1>
        <div className="login__form">
          <Form
            items={signForm({
              username: "",
              password: "",
              confirmedPassword: "",
            })}
            errors={errors}
            onSubmit={onSubmit}
            handleChange={handleChange}
            buttomText="Sign up"
          />
        </div>

        <Link className="login_nav" to="/login">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Signup;
