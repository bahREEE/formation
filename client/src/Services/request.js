import axios from "axios";

export const request = async () => {
  try {
    const { data } = await axios["get"]();
    return data;
  } catch (error) {
    return error.message;
  }
};
