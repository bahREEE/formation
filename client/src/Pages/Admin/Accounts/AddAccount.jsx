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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await RequestApi("post", adminAPI.USER, "", user);
      // console.log(result);
      history.push("/admin/accounts");
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
