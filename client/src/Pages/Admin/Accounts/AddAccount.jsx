import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../../Components/Form/Form";
import { userFORM } from "../../../Constant/Forms/userForm";
import { adminAPI } from "../../../Services/api";
import RequestApi from "../.././../Services/request";

const AddAccount = () => {
  const history = useHistory();
  const [user, setUser] = useState({ username: "", password: "", role: "" });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (value, name) => {
    setUser({ ...user, [`${name}`]: value });
    setErrors({ ...errors, [`${name}`]: "" });
  };

  const checkError = () => {
    let errorsFound = false;
    let generateErrors = {
      username: "",
      password: "",
      role: "",
    };
    if (!user.role) {
      generateErrors.role = "you need to specify a role!";
      errorsFound = true;
    }

    if (user.password.length < 4) {
      generateErrors.password = "password is weak!";
      errorsFound = true;
    }

    if (user.username.length < 4) {
      generateErrors.username = "username should have at least 4 characters!";
      errorsFound = true;
    }

    setErrors(generateErrors);
    return errorsFound;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!checkError()) {
        // const result = await RequestApi("post", adminAPI.USER, "", user);
        // console.log(result);
        history.push("/admin/accounts");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Fragment>
      <Form
        onSubmit={onSubmit}
        handleChange={handleChange}
        values={user}
        errors={errors}
        items={userFORM}
        title="Add user"
      />
    </Fragment>
  );
};

export default AddAccount;
