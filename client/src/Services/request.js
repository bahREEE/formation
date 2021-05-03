import axios from "axios";

export default async (methode, url, id = "", body = null) => {
  const token = localStorage.getItem("token");
  // console.log(token);
  switch (methode) {
    case "get":
    case "delete":
      return await axios[methode](url + id, {
        headers: {
          Authorization: token,
        },
      });

    case "post":
    case "put":
      return await axios[methode](url + id, body, {
        headers: {
          Authorization: token,
        },
      });

    default:
      throw new Error("no sucha request !");
  }
};
