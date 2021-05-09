import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "../../../Components/Form/Form";
import RequestApi from "../.././../Services/request";
import { formationForm } from "../../../Constant/Forms/adminForms";
import { userAPI } from "../../../Services/api";

const EditForamtion = () => {
  const history = useHistory();
  const { id: foramtionId } = useParams();
  const [formation, setFormation] = useState({});
  const [domains, setDomains] = useState([]);
  const [defaults, setDefaults] = useState({});
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
        const {
          data: {
            titre,
            budget,
            date,
            duree_jrs,
            type,
            domaine,
            id,
            nbsession,
          },
        } = await RequestApi("get", `${userAPI.FORMATION}${foramtionId}`);
        const { data } = await RequestApi("get", `${userAPI.DOMAIN}`);
        const currentFormation = {
          id,
          titre,
          budget,
          date,
          duree_jrs,
          nbsession,
          type,
          domaine: JSON.stringify(domaine),
        };
        setDomains(data);
        setFormation({
          ...currentFormation,
        });

        setDefaults({
          ...currentFormation,
        });
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [foramtionId]);

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
        await RequestApi("put", userAPI.FORMATION, "", {
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
      items={formationForm(defaults, domains)}
      title="Edit Formation"
      reset
    />
  );
};
export default EditForamtion;
