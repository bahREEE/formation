import React, { useEffect, useState } from "react";
import List from "../../../Components/List/List";
import Request from "../../../Services/request";
import { formateurList } from "../../../Constant/Lists/userLists";
import { userAPI } from "../../../Services/api";

const ListFormateur = () => {
  const [formateurs, setFormateurs] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await Request("get", userAPI.FORMATEUR);
        setFormateurs(
          data.map((formateur) => {
            return {
              id: formateur.id,
              fullName: `${formateur.formateurLastname}  ${formateur.formateurName}`,
              email: formateur.email,
              phone: formateur.tel,
              org: formateur.org.libelle,
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
      await Request("delete", userAPI.FORMATEUR, id);
      setFormateurs(formateurs.filter((formateur) => formateur.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <List
      items={formateurs}
      titles={formateurList}
      name="add Formateur"
      handleDelete={handleDelete}
      path="/user/formateurs"
    />
  );
};
export default ListFormateur;
