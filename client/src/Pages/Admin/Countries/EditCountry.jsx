import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "../../../Components/Form/Form";
import RequestApi from "../.././../Services/request";
import { adminAPI } from "../../../Services/api";
import { countryFORM } from "../../../Constant/Forms/adminForms";

const EditCountry = () => {
  const history = useHistory();
  const { id } = useParams();
  const [country, setCountry] = useState({});
  const [defaults, setDefaults] = useState({});
  const [errors, setErrors] = useState({
    nom: "",
  });

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await RequestApi("get", `${adminAPI.COUNTRY}${id}`);
        setDefaults(data);
        setCountry({
          nom: data.nom,
        });
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

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
        //   const result = await RequestApi("put", adminAPI.COUNTRY, "", country);

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
      items={countryFORM(defaults)}
      title="Edit Country"
    />
  );
};
export default EditCountry;
