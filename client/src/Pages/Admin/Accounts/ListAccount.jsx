import React, { useEffect, useState } from "react";
import List from "../../../Components/List/List";
import RequestAPI from "../../../Services/request";
import { usersList } from "../../../Constant/Lists/adminLists";
import { adminAPI } from "../../../Services/api";

const ListAccount = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await RequestAPI("get", adminAPI.USER);
        setUsers(
          data.map((user) => {
            return {
              id: user.id,
              username: user.username,
              role:
                user.roles[0].roleName === "ADMINISTRATEUR" ? "Admin" : "User",
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
      await RequestAPI("delete", adminAPI.USER, id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <List
      items={users}
      titles={usersList}
      name="add User"
      handleDelete={handleDelete}
      path="/admin/accounts"
    />
  );
};

export default ListAccount;
