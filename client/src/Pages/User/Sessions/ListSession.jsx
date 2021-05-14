import React, { useEffect, useState } from "react";
import List from "../../../Components/List/List";
import Request from "../../../Services/request";
import { sessionList } from "../../../Constant/Lists/adminLists";
import { userAPI } from "../../../Services/api";

const ListSession = () => {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await Request("get", userAPI.SESSION);
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

  return <List items={sessions} titles={sessionList} unDeleteble />;
};

export default ListSession;
