import React, { useState } from "react";
import Form from "../../../Components/Form/Form";
import RequestApi from "../.././../Services/request";
import { countryFORM } from "../../../Constant/Forms/adminForms";
import { adminAPI } from "../../../Services/api";
import { useHistory } from "react-router-dom";

const AddCountry = () => {
  const history = useHistory();
  const [country, setCountry] = useState({
    nom: "",
  });
  const [errors, setErrors] = useState({
    nom: "",
  });

  const handleChange = (value, name) => {
    setCountry({ ...country, [`${name}`]: value });
    setErrors({ ...errors, [`${name}`]: "" });
  };

  const checkError = () => {
    let errorsFound = false;
    let generateErrors = {
      nom: "",
    };

    if (country.nom.length < 4) {
      generateErrors.nom = "Country name should have at least 4 characters!";
      errorsFound = true;
    }

    setErrors(generateErrors);
    return errorsFound;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!checkError()) {
        const result = await RequestApi("post", adminAPI.COUNTRY, "", country);
        history.push("/admin/countries");
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
      items={countryFORM({ nom: "" })}
      title="Add Country"
    />
  );
};

export default AddCountry;
