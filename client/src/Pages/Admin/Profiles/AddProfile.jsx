import React, { useState } from "react";
import Form from "../../../Components/Form/Form";
import RequestApi from "../.././../Services/request";
import { profileFORM } from "../../../Constant/Forms/adminForms";
import { adminAPI } from "../../../Services/api";
import { useHistory } from "react-router-dom";

const AddProfile = () => {
  const history = useHistory();
  const [profile, setProfile] = useState({
    libelle: "",
  });
  const [errors, setErrors] = useState({
    libelle: "",
  });

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
      generateErrors.libelle =
        "Profile name should have at least 4 characters!";
      errorsFound = true;
    }

    setErrors(generateErrors);
    return errorsFound;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!checkError()) {
        await RequestApi("post", adminAPI.PROFILE, "", profile);
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
      items={profileFORM({ libelle: "" })}
      title="add profile"
    />
  );
};

export default AddProfile;
