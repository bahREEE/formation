import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "../../../Components/Form/Form";
import { participantForm } from "../../../Constant/Forms/userForms";
import { userAPI } from "../../../Services/api";
import RequestApi from "../.././../Services/request";

const AddParticiapant = () => {
  const history = useHistory();

  const [profiles, setProfiles] = useState([]);
  const [countries, setCountries] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [participant, setParticipant] = useState({
    nom: "",
    prenom: "",
    sessions: [],
    type: "",
    email: "",
    tel: "",
    pays: null,
    profil: null,
  });
  const [errors, setErrors] = useState({
    nom: "",
    prenom: "",
    sessions: "",
    type: "",
    tel: "",
    pays: "",
    profil: "",
  });

  useEffect(() => {
    try {
      async function fetchData() {
        const { data: sess } = await RequestApi("get", `${userAPI.SESSION}`);
        setSessions(sess);
        const { data: counts } = await RequestApi("get", `${userAPI.COUNTRY}`);
        setCountries(counts);
        const { data: profs } = await RequestApi("get", `${userAPI.PROFILE}`);
        setProfiles(profs);
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleChange = (value, name) => {
    setParticipant({ ...participant, [`${name}`]: value });
    setErrors({ ...errors, [`${name}`]: "" });
  };

  const handleSelect = (values) => {
    setParticipant({
      ...participant,
      sessions: values.map((opt) => opt.value),
    });
  };

  const checkError = () => {
    let errorsFound = false;
    let generateErrors = {
      nom: "",
      prenom: "",
      sessions: "",
      type: "",
      tel: "",
      pays: "",
      profil: "",
    };
    if (!participant.type) {
      generateErrors.type = "you need to specify a type !";
      errorsFound = true;
    }

    if (!participant.pays) {
      generateErrors.pays = "you need to specify a country !";
      errorsFound = true;
    }
    if (!participant.profil) {
      generateErrors.profil = "you need to specify a profile !";
      errorsFound = true;
    }

    if (participant.nom.length < 4) {
      generateErrors.nom = "Name should have at least 4 characters!";
      errorsFound = true;
    }

    if (participant.prenom.length < 4) {
      generateErrors.prenom = "Last Name should have at least 4 characters!";
      errorsFound = true;
    }

    if (participant.sessions.length === 0) {
      generateErrors.sessions = "you need to specify at least one session !";
      errorsFound = true;
    }
    if (participant.tel.length < 8 || participant.tel.length > 8) {
      generateErrors.tel = "Check your phone number!";
      errorsFound = true;
    }
    if (isNaN(participant.tel)) {
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
        await RequestApi("post", userAPI.PARTICIPANT, "", {
          ...participant,
          pays: JSON.parse(participant.pays),
          profil: JSON.parse(participant.profil),
          tel: parseInt(participant.tel),
        });
        history.push("/user/participants");
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
      handleSelect={handleSelect}
      items={participantForm(
        {
          nom: "",
          prenom: "",
          sessions: [],
          type: "none",
          email: "",
          tel: "",
          pays: "none",
          profil: "none",
        },
        sessions,
        countries,
        profiles
      )}
      title="Add participant"
      reset
      action="add"
    />
  );
};
export default AddParticiapant;
