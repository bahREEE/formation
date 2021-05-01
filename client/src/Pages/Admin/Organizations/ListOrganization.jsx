import React, { useEffect, useState } from "react";
import List from "../../../Components/List/List";
import Request from "../../../Services/request";
import { organizationList } from "../../../Constant/Lists/adminLists";
import { adminAPI } from "../../../Services/api";

const ListOrganization = () => {
  const [organizations, setOrganization] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await Request("get", adminAPI.ORGANIZATION);
        setOrganization(
          data.map((organization) => {
            return {
              id: organization.id,
              libelle: organization.libelle,
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
      await Request("delete", adminAPI.ORGANIZATION, id);
      setOrganization(
        organizations.filter((organization) => organization.id !== id)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <List
      items={organizations}
      titles={organizationList}
      name="add organization"
      handleDelete={handleDelete}
      path="/admin/organizations"
    />
  );
};

export default ListOrganization;
