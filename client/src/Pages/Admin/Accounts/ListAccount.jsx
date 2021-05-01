import React, { Fragment, useEffect, useState } from "react";
import List from "../../../Components/List/List";
import Request from "../../../Services/request";
import { usersList } from "../../../Constant/Lists/adminLists";
import { adminAPI } from "../../../Services/api";

const ListAccount = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await Request("get", adminAPI.USER);
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
      await Request("delete", adminAPI.USER, id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Fragment>
      <List
        items={users}
        titles={usersList}
        name="add User"
        handleDelete={handleDelete}
        path="/admin/accounts"
      />
    </Fragment>
  );
};

export default ListAccount;
