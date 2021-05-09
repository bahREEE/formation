import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../../Components/Form/Form";
import { formationForm } from "../../../Constant/Forms/adminForms";
import { userAPI } from "../../../Services/api";
import RequestApi from "../.././../Services/request";

const AddFormation = () => {
  const history = useHistory();

  const [domains, setDomains] = useState([]);
  const [formation, setFormation] = useState({
    titre: "",
    type: "",
    date: "",
    nbsession: "",
    budget: "",
    duree_jrs: "",
    domaine: null,
  });
  const [errors, setErrors] = useState({
    titre: "",
    type: "",
    date: "",
    nbsession: "",
    budget: "",
    domaine: "",
    duree_jrs: "",
  });

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await RequestApi("get", `${userAPI.DOMAIN}`);
        setDomains(data);
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleChange = (value, name) => {
    setFormation({ ...formation, [`${name}`]: value });
    setErrors({ ...errors, [`${name}`]: "" });
  };

  const checkError = () => {
    let errorsFound = false;
    let generateErrors = {
      titre: "",
      type: "",
      date: "",
      nbsession: "",
      budget: "",
      domaine: "",
      duree_jrs: "",
    };
    if (!formation.domaine) {
      generateErrors.domaine = "you need to specify a domain!";
      errorsFound = true;
    }

    if (!formation.type) {
      generateErrors.type = "you need to specify a type!";
      errorsFound = true;
    }

    if (formation.titre.length < 4) {
      generateErrors.titre = "Title should have at least 4 characters!";
      errorsFound = true;
    }

    if (formation.budget < 0) {
      generateErrors.budget = "Budget must be  postive number !";
      errorsFound = true;
    }
    if (formation.nbsession < 0) {
      generateErrors.nbsession = "Nomber of sessions must be postive  number !";
      errorsFound = true;
    }
    if (formation.duree_jrs < 0) {
      generateErrors.duree_jrs = "Number of days must be postive  number !";
      errorsFound = true;
    }

    if (new Date(formation.date) < Date.now()) {
      generateErrors.date = "Choose a date not already passed !";
      errorsFound = true;
    }

    setErrors(generateErrors);
    return errorsFound;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!checkError()) {
        await RequestApi("post", userAPI.FORMATION, "", {
          ...formation,
          domaine: JSON.parse(formation.domaine),
          nbsession: parseInt(formation.nbsession),
          budget: parseFloat(formation.budget),
          duree_jrs: parseInt(formation.duree_jrs),
        });
        history.push("/admin/formations");
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
      items={formationForm(
        {
          titre: "",
          type: "none",
          domaine: "none",
          date: "",
          nbsession: "",
          budget: "",
          duree_jrs: "",
        },
        domains
      )}
      title="Add formation"
      reset
    />
  );
};

export default AddFormation;
