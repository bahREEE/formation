import React, { useEffect, useState } from "react";
import List from "../../../Components/List/List";
import Request from "../../../Services/request";
import { sessionList } from "../../../Constant/Lists/adminLists";
import { adminAPI } from "../../../Services/api";

const ListSessions = ({ setModelComponent }) => {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await Request("get", adminAPI.SESSION);
        setSessions(
          data.map((session) => {
            return {
              id: session.id,
              formation: session.formation.titre,
              formateur: `${session.formateur.formateurLastname} ${session.formateur.formateurName}`,
              lieu: session.lieu,
              dateDebut: session.dateDebut,
              dateFin: session.dateFin,
              organisme: session.organisme.libelle,
              nbParticipants: session.nbParticipants,
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
      await Request("delete", adminAPI.SESSION, id);
      setSessions(sessions.filter((session) => session.id !== id));
      setModelComponent(null);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <List
      items={sessions}
      titles={sessionList}
      name="add session"
      handleDelete={handleDelete}
      path="/admin/sessions"
      setModelComponent={setModelComponent}
    />
  );
};

export default ListSessions;
