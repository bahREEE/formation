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
    libelle: "",
  });

  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await RequestApi("get", `${adminAPI.PROFILE}${id}`);
        setDefaults(data);
        setProfile(data);
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
      libelle: "",
    };

    if (profile.libelle.length < 4) {
      generateErrors.username = "Profile should have at least 4 characters!";
      errorsFound = true;
    }

    setErrors(generateErrors);
    return errorsFound;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!checkError()) {
        await RequestApi("put", adminAPI.PROFILE, "", profile);
        history.push("/admin/profiles");
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
      reset
    />
  );
};
export default EditProfile;
