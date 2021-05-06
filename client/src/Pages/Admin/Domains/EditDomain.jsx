import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "../../../Components/Form/Form";
import RequestApi from "../.././../Services/request";
import { adminAPI } from "../../../Services/api";
import { domainFORM } from "../../../Constant/Forms/adminForms";

const EditDomain = () => {
  const history = useHistory();
  const { id } = useParams();
  const [domain, setDomain] = useState({});
  const [defaults, setDefaults] = useState({});
  const [errors, setErrors] = useState({
    libelle: "",
  });

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await RequestApi("get", `${adminAPI.DOMAIN}${id}`);
        setDefaults(data);
        setDomain(data);
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

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
      generateErrors.libelle = "Domain should have at least 4 characters!";
      errorsFound = true;
    }

    setErrors(generateErrors);
    return errorsFound;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!checkError()) {
        await RequestApi("put", adminAPI.DOMAIN, "", domain);

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
      items={domainFORM(defaults)}
      title="Edit domain"
      reset
    />
  );
};
export default EditDomain;
