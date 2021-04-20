const url = "http://localhost:8080/";

export default {
  USER: {
    listUser: `${url}/users`,
    getUser: (id) => `${url}/user/${id}`,
    deleteUser: (id) => `${url}/deleteuser/${id}`,
    saveUser: `${url}/addUser`,
    updateUser: (id) => `${url}/updateuser/${id}`,
  },
};
