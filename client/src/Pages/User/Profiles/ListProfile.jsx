import React, { useEffect, useState } from "react";
import List from "../../../Components/List/List";
import Request from "../../../Services/request";
import { profileList } from "../../../Constant/Lists/adminLists";
import { userAPI } from "../../../Services/api";

const ListProfile = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await Request("get", userAPI.PROFILE);
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

  return <List items={profiles} titles={profileList} unDeleteble />;
};
export default ListProfile;
