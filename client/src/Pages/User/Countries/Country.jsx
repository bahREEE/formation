import React, { useEffect, useState } from "react";
import List from "../../../Components/List/List";
import Request from "../../../Services/request";
import { countryList } from "../../../Constant/Lists/adminLists";
import { userAPI } from "../../../Services/api";

const Country = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await Request("get", userAPI.COUNTRY);
        setCountries(
          data.map((country) => {
            return {
              id: country.id,
              nom: country.nom,
            };
          })
        );
      }
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return <List items={countries} titles={countryList} unDeleteble />;
};

export default Country;
