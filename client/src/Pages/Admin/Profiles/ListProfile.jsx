import React, { useEffect, useState } from "react";
import List from "../../../Components/List/List";
import Request from "../../../Services/request";
import { profileList } from "../../../Constant/Lists/adminLists";
import { adminAPI } from "../../../Services/api";

const ListProfile = ({ setModelComponent }) => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await Request("get", adminAPI.PROFILE);
        setProfiles(
          data.map((profile) => {
            return {
              id: profile.id,
              libelle: profile.libelle,
            };
          })
        );
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      await Request("delete", adminAPI.PROFILE, id);
      setProfiles(profiles.filter((profile) => profile.id !== id));
      setModelComponent(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <List
      items={profiles}
      titles={profileList}
      name="add profile"
      handleDelete={handleDelete}
      path="/admin/profiles"
      setModelComponent={setModelComponent}
    />
  );
};
export default ListProfile;
