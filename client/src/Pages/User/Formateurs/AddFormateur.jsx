import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../../Components/Form/Form";
import { formateurFORM } from "../../../Constant/Forms/userForms";
import { userAPI } from "../../../Services/api";
import RequestApi from "../.././../Services/request";

const AddFormateur = () => {
  const history = useHistory();

  const [organizations, setOrganizations] = useState([]);
  const [formateur, setFormateur] = useState({
    formateurName: "",
    formateurLastname: "",
    email: "",
    tel: "",
    type: "",
    org: {},
  });
  const [errors, setErrors] = useState({
    formateurName: "",
    formateurLastname: "",
    email: "",
    tel: "",
    type: "",
    org: "",
  });

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await RequestApi("get", `${userAPI.ORGANIZATION}`);
        setOrganizations(data);
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleChange = (value, name) => {
    setFormateur({ ...formateur, [`${name}`]: value });
    setErrors({ ...errors, [`${name}`]: "" });
  };

  const checkError = () => {
    let errorsFound = false;
    let generateErrors = {
      formateurName: "",
      formateurLastname: "",
      email: "",
      tel: "",
      org: "",
      type: "",
    };
    if (!formateur.org) {
      generateErrors.org = "you need to specify an organization!";
      errorsFound = true;
    }

    if (!formateur.type) {
      generateErrors.type = "you need to specify a type!";
      errorsFound = true;
    }

    if (formateur.formateurName.length < 4) {
      generateErrors.formateurName =
        "First Name should have at least 4 characters!";
      errorsFound = true;
    }

    if (formateur.formateurLastname.length < 4) {
      generateErrors.formateurLastname =
        "Last Name should have at least 4 characters!";
      errorsFound = true;
    }

    if (
      (formateur.tel.length < 8 || formateur.tel.length > 8) &&
      isNaN(formateur.tel)
    ) {
      generateErrors.tel = "Check your phone number!";
      errorsFound = true;
    }

    setErrors(generateErrors);
    return errorsFound;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormateur({
      ...formateur,
      org: JSON.parse(formateur.org),
      tel: parseInt(formateur.tel),
    });

    try {
      if (!checkError()) {
        await RequestApi("post", userAPI.FORMATEUR, "", formateur);
        history.push("/user/formateurs");
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
      items={formateurFORM(
        {
          formateurName: "",
          formateurLastname: "",
          email: "",
          tel: "",
          type: "none",
          org: "none",
        },
        organizations
      )}
      title="Add formateur"
    />
  );
};

export default AddFormateur;
