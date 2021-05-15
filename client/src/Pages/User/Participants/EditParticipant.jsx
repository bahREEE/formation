import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "../../../Components/Form/Form";
import RequestApi from "../.././../Services/request";
import { participantForm } from "../../../Constant/Forms/userForms";
import { userAPI } from "../../../Services/api";

const EditParticipant = () => {
  const history = useHistory();
  const { id: participantId } = useParams();
  const [sessions, setSessions] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [countries, setCountries] = useState([]);
  const [participant, setParticipant] = useState({});
  const [defaults, setDefaults] = useState({ sessions: [] });
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
        const {
          data: { id, nom, prenom, email, sessions, type, tel, pays, profil },
        } = await RequestApi("get", `${userAPI.PARTICIPANT}${participantId}`);

        const currentParticipant = {
          id,
          nom,
          prenom,
          sessions,
          type,
          email,
          tel,
          pays: JSON.stringify(pays),
          profil: JSON.stringify(profil),
        };
        setParticipant(currentParticipant);
        const { data: profs } = await RequestApi("get", `${userAPI.PROFILE}`);
        setProfiles(profs);
        const { data: counts } = await RequestApi("get", `${userAPI.COUNTRY}`);
        setCountries(counts);

        setDefaults({
          ...currentParticipant,
          sessions: sessions.map((session) => ({
            value: session,
            label: session.formation.titre,
          })),
        });
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [participantId]);

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
      items={participantForm(defaults, sessions, countries, profiles)}
      title="Edit participant"
      reset
      action="edit"
    />
  );
};
export default EditParticipant;
