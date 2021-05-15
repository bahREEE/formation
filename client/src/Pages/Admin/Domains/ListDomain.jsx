import React, { useEffect, useState } from "react";
import List from "../../../Components/List/List";
import Request from "../../../Services/request";
import { domainList } from "../../../Constant/Lists/adminLists";
import { adminAPI } from "../../../Services/api";

const ListDomain = ({ setModelComponent }) => {
  const [domains, setDomains] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await Request("get", adminAPI.DOMAIN);
        setDomains(
          data.map((domain) => {
            return {
              id: domain.id,
              libelle: domain.libelle,
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
      await Request("delete", adminAPI.DOMAIN, id);
      setDomains(domains.filter((domain) => domain.id !== id));
      setModelComponent(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <List
      items={domains}
      titles={domainList}
      name="add domain"
      handleDelete={handleDelete}
      path="/admin/domains"
      setModelComponent={setModelComponent}
    />
  );
};

export default ListDomain;
