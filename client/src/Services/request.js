import axios from "axios";

axios.defaults.headers.common["Content-type"] = "application/json";
axios.defaults.headers = { Accept: "application/json" };

export default async (methode, url, id = "", body = null) => {
  switch (methode) {
    case "get":
    case "delete":
      return await axios[methode](url + id);

    case "post":
    case "put":
      return await axios[methode](url + id, body);

    default:
      throw new Error("no sucha request !");
  }
};
