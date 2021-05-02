import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "../../../Components/Form/Form";
import RequestApi from "../.././../Services/request";
import { adminAPI } from "../../../Services/api";
import { organizationFORM } from "../../../Constant/Forms/adminForms";

const EditOrganization = () => {
  const history = useHistory();
  const { id } = useParams();
  const [organization, setOrganization] = useState({});
  const [defaults, setDefaults] = useState({});
  const [errors, setErrors] = useState({
    libelle: "",
  });

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await RequestApi(
          "get",
          `${adminAPI.ORGANIZATION}${id}`
        );
        setDefaults(data);
        setOrganization(data);
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

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
        "Organization should have at least 4 characters!";
      errorsFound = true;
    }

    setErrors(generateErrors);
    return errorsFound;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!checkError()) {
        await RequestApi("put", adminAPI.ORGANIZATION, "", organization);
        console.log("eh");
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
      items={organizationFORM(defaults)}
      title="Edit organization"
    />
  );
};

export default EditOrganization;
