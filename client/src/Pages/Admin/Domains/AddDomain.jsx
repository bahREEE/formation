import React, { useState } from "react";
import Form from "../../../Components/Form/Form";
import RequestApi from "../.././../Services/request";
import { domainFORM } from "../../../Constant/Forms/adminForms";
import { adminAPI } from "../../../Services/api";
import { useHistory } from "react-router-dom";

const AddDomain = () => {
  const history = useHistory();
  const [domain, setDomain] = useState({
    libelle: "",
  });
  const [errors, setErrors] = useState({
    libelle: "",
  });

  const handleChange = (value, name) => {
    setDomain({ ...domain, [`${name}`]: value });
    setErrors({ ...errors, [`${name}`]: "" });
  };

  const checkError = () => {
    let errorsFound = false;
    let generateErrors = {
      libelle: "",
    };

    if (domain.libelle.length < 4) {
      generateErrors.libelle = "Domain name should have at least 4 characters!";
      errorsFound = true;
    }

    setErrors(generateErrors);
    return errorsFound;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!checkError()) {
        await RequestApi("post", adminAPI.DOMAIN, "", domain);
        history.push("/admin/domains");
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
      items={domainFORM({ libelle: "" })}
      title="Add domain"
      rest
    />
  );
};

export default AddDomain;
