import React, { Fragment, useEffect, useState } from "react";
import List from "../../../Components/List/List";
import Request from "../../../Services/request";
import { usersList } from "../../../Constant/Lists/adminLists";
import { adminAPI } from "../../../Services/api";

const ListAccounts = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        // You can await here
        const { data } = await Request("get", adminAPI.USER);
        //  console.log(data);
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
        // ...
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      const { data } = await Request("delete", adminAPI.USER, id);
      setUsers(users.filter((user) => user.id !== id));
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleEdit = (id) => {
    console.log("edit");
  };
  return (
    <Fragment>
      <List
        items={users}
        titles={usersList}
        name="add User"
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </Fragment>
  );
};

export default ListAccounts;
