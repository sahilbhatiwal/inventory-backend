const { HttpError } = require("react-admin");
const axios = require("axios");
const baseUrl = "/api";

const authProvider = {
  // authentication
  login: ({ username, password }) => {
    const url = `${baseUrl}/login`;
    return axios
      .post(url, {
        email: username,
        password,
      })
      .then((response) => {
        console.log(response.data);

        localStorage.setItem("jwt", response.data.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
      })
      .catch((err) => {
        console.log(err.response.data.message);
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");

        return Promise.reject();
      });
  },
  //   checkError: (error) => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("jwt")
      ? Promise.resolve()
      : Promise.reject({ message: "login.required" }),
  logout: () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");

    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const { _id, name } = JSON.parse(localStorage.getItem("user"));
      return Promise.resolve({ id: _id, fullName: name });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  // authorization
  getPermissions: () => {
    const {role} = localStorage.getItem("user");
    return role ? Promise.resolve(role) : Promise.reject();
  },
};
export default authProvider;
