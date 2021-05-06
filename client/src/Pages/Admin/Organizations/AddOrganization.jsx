import React, { useState } from "react";
import Form from "../../../Components/Form/Form";
import RequestApi from "../.././../Services/request";
import { organizationFORM } from "../../../Constant/Forms/adminForms";
import { adminAPI } from "../../../Services/api";
import { useHistory } from "react-router-dom";

const AddOrganization = () => {
  const history = useHistory();
  const [organization, setOrganization] = useState({
    libelle: "",
  });
  const [errors, setErrors] = useState({
    libelle: "",
  });

  const handleChange = (value, name) => {
    setOrganization({ ...organization, [`${name}`]: value });
    setErrors({ ...errors, [`${name}`]: "" });
  };

  const checkError = () => {
    let errorsFound = false;
    let generateErrors = {
      libelle: "",
    };

    if (organization.libelle.length < 4) {
      generateErrors.libelle =
        "Organization name should have at least 4 characters!";
      errorsFound = true;
    }

    setErrors(generateErrors);
    return errorsFound;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!checkError()) {
        await RequestApi("post", adminAPI.ORGANIZATION, "", organization);
        history.push("/admin/organizations");
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
      items={organizationFORM({ libelle: "" })}
      title="Add organization"
      reset
    />
  );
};

export default AddOrganization;
