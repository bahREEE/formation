import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "../../../Components/Form/Form";
import RequestApi from "../.././../Services/request";
import { sessionForm } from "../../../Constant/Forms/adminForms";
import { userAPI } from "../../../Services/api";

const EditSession = () => {
  const history = useHistory();
  const { id: sessionId } = useParams();
  const [session, setSession] = useState({});
  const [formateurs, setFormateurs] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [formations, setformations] = useState([]);
  const [defaults, setDefaults] = useState({});
  const [errors, setErrors] = useState({
    nbParticipants: "",
    dateFin: "",
    dateDebut: "",
    formation: "",
    formateur: "",
    lieu: "",
    organisme: "",
  });

  useEffect(() => {
    try {
      async function fetchData() {
        const { data: orgs } = await RequestApi(
          "get",
          `${userAPI.ORGANIZATION}`
        );
        setOrganizations(orgs);
        const { data: forms } = await RequestApi("get", `${userAPI.FORMATION}`);
        setformations(forms);
        const { data: formates } = await RequestApi(
          "get",
          `${userAPI.FORMATEUR}`
        );
        setFormateurs(formates);
        const {
          data: {
            id,
            nbParticipants,
            dateFin,
            dateDebut,
            formation,
            formateur,
            lieu,
            organisme,
          },
        } = await RequestApi("get", `${userAPI.SESSION}${sessionId}`);

        const currentFormation = {
          id,
          nbParticipants,
          dateFin,
          dateDebut,
          formation: JSON.stringify(formation),
          formateur: JSON.stringify(formateur),
          lieu,
          organisme: JSON.stringify(organisme),
        };
        setSession({
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
  }, [sessionId]);

  const handleChange = (value, name) => {
    setSession({ ...session, [`${name}`]: value });
    setErrors({ ...errors, [`${name}`]: "" });
  };

  const checkError = () => {
    let errorsFound = false;
    let generateErrors = {
      nbParticipants: "",
      dateFin: "",
      dateDebut: "",
      formation: "",
      formateur: "",
      lieu: "",
      organisme: "",
    };
    if (!session.organisme) {
      generateErrors.organisme = "you need to specify an organization !";
      errorsFound = true;
    }

    if (!session.formateur) {
      generateErrors.formateur = "you need to specify a formateur!";
      errorsFound = true;
    }
    if (!session.formation) {
      generateErrors.formation = "you need to specify a formation!";
      errorsFound = true;
    }

    if (session.lieu.length < 4) {
      generateErrors.lieu = "Place should have at least 4 characters!";
      errorsFound = true;
    }

    if (session.nbParticipants < 10) {
      generateErrors.nbParticipants =
        "sessions should host at least 10 participants";
      errorsFound = true;
    }

    if (new Date(session.dateDebut) < Date.now()) {
      generateErrors.dateDebut = "Choose a date not already passed !";
      errorsFound = true;
    }
    if (new Date(session.dateFin) < new Date(session.dateDebut)) {
      generateErrors.dateFin = "Choose a date after the session started !";
      errorsFound = true;
    }

    setErrors(generateErrors);
    return errorsFound;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!checkError()) {
        await RequestApi("put", userAPI.SESSION, "", {
          ...session,
          formateur: JSON.parse(session.formateur),
          formation: JSON.parse(session.formation),
          organisme: JSON.parse(session.organisme),
          nbParticipants: parseInt(session.nbParticipants),
          participants: [],
        });

        history.push("/admin/sessions");
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
      items={sessionForm(defaults, organizations, formateurs, formations)}
      title="Edit session"
      reset
    />
  );
};
export default EditSession;
