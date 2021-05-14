import React, { useEffect, useState } from "react";
import List from "../../../Components/List/List";
import Request from "../../../Services/request";
import { formationList } from "../../../Constant/Lists/adminLists";
import { adminAPI } from "../../../Services/api";

const ListFormation = () => {
  const [formations, setFormations] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await Request("get", adminAPI.FORMATION);
        setFormations(
          data.map((formation) => {
            return {
              id: formation.id,
              titre: formation.titre,
              type: formation.type,
              date: formation.date,
              nbSessions: formation.nbsession,
              domaine: formation.domaine.libelle,
              budget: formation.budget,
              duree_jrs: formation.duree_jrs,
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
      await Request("delete", adminAPI.FORMATION, id);
      setFormations(formations.filter((formation) => formation.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <List
      items={formations}
      titles={formationList}
      name="add formation"
      handleDelete={handleDelete}
      path="/admin/formations"
    />
  );
};
export default ListFormation;
