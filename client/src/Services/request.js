import axios from "axios";

export default async (methode, url, id = "", body = null) => {
  try {
    switch (methode) {
      case "get":
      case "delete":
        return ({ data } = await axios[methode](url + id));

      case "post":
      case "put":
        return ({ data } = await axios[methode](url + id, body));
      default:
        throw new Error("no sucha request !");
    }
  } catch (error) {
    return error.message;
  }
};
