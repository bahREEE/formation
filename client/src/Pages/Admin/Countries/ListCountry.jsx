import React, { useEffect, useState } from "react";
import List from "../../../Components/List/List";
import Request from "../../../Services/request";
import { countryList } from "../../../Constant/Lists/adminLists";
import { adminAPI } from "../../../Services/api";

const ListCountry = ({ setModelComponent }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        const { data } = await Request("get", adminAPI.COUNTRY);
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

  const handleDelete = async (id) => {
    try {
      await Request("delete", adminAPI.COUNTRY, id);
      setCountries(countries.filter((country) => country.id !== id));
      setModelComponent(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <List
      items={countries}
      titles={countryList}
      name="add Country"
      handleDelete={handleDelete}
      path="/admin/countries"
      setModelComponent={setModelComponent}
    />
  );
};

export default ListCountry;
