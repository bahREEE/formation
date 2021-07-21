import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "../../../Components/Form/Form";
import RequestApi from "../.././../Services/request";
import { userFORM } from "../../../Constant/Forms/adminForms";
import { adminAPI } from "../../../Services/api";

const EditAccount = () => {
  const history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [defaults, setDefaults] = useState({});
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await RequestApi("get", `${adminAPI.USER}${id}`);

        setUser({
          id: data.id,
          username: data.username,
          role: data.roles[0].roleName,
          password: data.password,
        });

        setDefaults({
          username: data.username,
          role: data.roles[0].roleName,
          password: data.password,
        });
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

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
        await RequestApi("put", adminAPI.USER, "", {
          ...user,
          roles: [{ roleName: user.role }],
        });
        history.push("/admin/accounts");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Form
      onSubmit={onSubmit}
      handleChange={handleChange}
      errors={errors}
      items={userFORM(defaults)}
      title="Edit user"
      reset
    />
  );
};

export default EditAccount;
