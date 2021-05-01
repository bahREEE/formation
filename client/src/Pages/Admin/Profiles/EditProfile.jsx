import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "../../../Components/Form/Form";
import RequestApi from "../.././../Services/request";
import { adminAPI } from "../../../Services/api";
import { profileFORM } from "../../../Constant/Forms/adminForms";

const EditProfile = () => {
  const history = useHistory();
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const [defaults, setDefaults] = useState({});
  const [errors, setErrors] = useState({
    nom: "",
  });

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await RequestApi("get", `${adminAPI.PROFILE}${id}`);
        setDefaults(data);
        setProfile({
          nom: data.nom,
        });
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  const handleChange = (value, name) => {
    setProfile({ ...profile, [`${name}`]: value });
    setErrors({ ...errors, [`${name}`]: "" });
  };

  const checkError = () => {
    let errorsFound = false;
    let generateErrors = {
      nom: "",
    };

    if (profile.nom.length < 4) {
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
        //   const result = await RequestApi("put", adminAPI.PROFILE, "", profile);

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
      items={profileFORM(defaults)}
      title="Edit profile"
    />
  );
};
export default EditProfile;
