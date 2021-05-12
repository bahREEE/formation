import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "../../../Components/Form/Form";
import RequestApi from "../.././../Services/request";
import { formateurFORM } from "../../../Constant/Forms/adminForms";
import { userAPI } from "../../../Services/api";

const EditFormateur = () => {
  const history = useHistory();
  const { id: formateurId } = useParams();
  const [formateur, setFormateur] = useState({});
  const [organizations, setOrganizations] = useState([]);
  const [defaults, setDefaults] = useState({});
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
        const {
          data: { formateurName, formateurLastname, email, tel, type, org, id },
        } = await RequestApi("get", `${userAPI.FORMATEUR}${formateurId}`);
        const { data } = await RequestApi("get", `${userAPI.ORGANIZATION}`);
        const currntFormateur = {
          id,
          formateurName,
          formateurLastname,
          email,
          tel,
          type,
          org: JSON.stringify(org),
        };
        setOrganizations(data);
        setFormateur({
          ...currntFormateur,
        });

        setDefaults({
          ...currntFormateur,
        });
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [formateurId]);

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

    if (formateur.tel.length < 8 || formateur.tel.length > 8) {
      generateErrors.tel = "Check your phone number!";
      errorsFound = true;
    }
    if (isNaN(formateur.tel)) {
      generateErrors.tel = "phone must be 8 digits !";
      errorsFound = true;
    }

    setErrors(generateErrors);
    return errorsFound;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!checkError()) {
        await RequestApi("put", userAPI.FORMATEUR, "", {
          ...formateur,
          org: JSON.parse(formateur.org),
          tel: parseInt(formateur.tel),
        });

        history.push("/admin/formateurs");
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
      items={formateurFORM(defaults, organizations)}
      title="Edit Professor"
      reset
    />
  );
};
export default EditFormateur;
