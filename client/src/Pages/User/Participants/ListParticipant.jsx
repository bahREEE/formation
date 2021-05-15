import React, { useEffect, useState } from "react";
import List from "../../../Components/List/List";
import Request from "../../../Services/request";
import { participantList } from "../../../Constant/Lists/userLists";
import { userAPI } from "../../../Services/api";

const ListParticipant = ({ setModelComponent }) => {
  const [participants, setParticipants] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await Request("get", userAPI.PARTICIPANT);
        setParticipants(
          data.map((participant) => {
            return {
              id: participant.id,
              fullName: `${participant.prenom} ${participant.nom}`,
              type: participant.type,
              lieu: participant.lieu,
              tel: participant.tel,
              pays: participant.pays.nom,
              email: participant.email,
              sessions: participant.sessions
                .map((session) => session.formation.titre)
                .join(" , "),
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
      await Request("delete", userAPI.PARTICIPANT, id);
      setParticipants(
        participants.filter((participant) => participant.id !== id)
      );
      setModelComponent(null);
    } catch (error) {
      console.log(error.message);
    }
    /* */
  };
  return (
    <List
      items={participants}
      titles={participantList}
      name="Add a participant"
      handleDelete={handleDelete}
      path="/user/participants"
      setModelComponent={setModelComponent}
    />
  );
};

export default ListParticipant;
