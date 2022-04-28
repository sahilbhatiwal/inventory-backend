const { HttpError } = require("react-admin");
const axios = require("axios");
const config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("jwt"),
  },
};
const baseUrl = "https://health-in-one.herokuapp.com/api";
const dataProvider = {
  create: (resource, params) => {
    const url = `${baseUrl}/${resource}`;
    return axios
      .post(url, params.data, config)
      .then((response) => {
        const data = response.data.data;
        return { data: { ...data, id: data._id } };
      })
      .catch((err) => {
        console.log(err.response.data.message);

        window.alert(err.response.data.message);
      });
  },
  update: (resource, params) => {
    const url = `${baseUrl}/${resource}/${params.id}`;
    return axios
      .put(url, params.data, config)
      .then((response) => {
        const data = response.data.data;
        return { data: { ...data, id: data._id } };
      })
      .catch((err) => {
        console.log(err.response.data.message);

        window.alert(err.response.data.message);
      });
  },
  delete: (resource, params) => {
    const url = `${baseUrl}/${resource}/${params.id}`;
    return axios
      .delete(url, config)
      .then((response) => {
        const data = response.data.data;
        return { data: { ...data, id: data._id } };
      })
      .catch((err) => {
        console.log(err.response.data.message);

        window.alert(err.response.data.message);
      });
  },

  getList: (resource, params) => {
    const url = `${baseUrl}/${resource}`;
    return axios
      .get(url, config)
      .then((response) => {
        // first data for body second data is for data which we return
        console.log(response.data);
        const data = response.data.data;
        const dataToReturn = {
          data: data.map((res) => ({ ...res, id: res._id })),
          total: data.length,
        };
        return dataToReturn;
      })
      .catch((err) => {
        console.log(err.response.data.message);

        window.alert(err.response.data.message);
      });
  },
  getMany: (resource, params) => {
    const url = `${baseUrl}/${resource}`;
    return axios
      .get(url, config)
      .then((response) => {
        // first data for body second data is for data which we return
        console.log(response.data);
        const data = response.data.data;
        const dataToReturn = {
          data: data.map((res) => ({ ...res, id: res._id })),
          total: data.length,
        };
        return dataToReturn;
      })
      .catch((err) => {
        console.log(err.response.data.message);

        window.alert(err.response.data.message);
      });
  },
  getOne: (resource, params) => {
    const url = `${baseUrl}/${resource}/${params.id}`;
    return axios
      .get(url, config)
      .then((response) => {
        // first data for body second data is for data which we return
        console.log(response.data);
        const data = response.data.data;
        return { data: { ...data, id: data._id } };
      })
      .catch((err) => {
        console.log(err.response.data.message);

        window.alert(err.response.data.message);
      });
  },
};
export default dataProvider;
