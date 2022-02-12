const { HttpError }  = require("react-admin")
const axios = require("axios");
const baseUrl = "/api";
exports.dataProvider = {
  create: (resource, params) => {
    const url = `${baseUrl}/${resource}`;
    return axios.post(url, params.data).then((response) => {
      const data = response.data.data;
      return { data: { ...data, id: data._id } };
    }).catch((err)=>{
        console.log(err.response.data.message);

        throw  new HttpError(err.response.data.message);
                            
    });
  },
  update: (resource, params) => {
    const url = `${baseUrl}/${resource}/${params.id}`;
    return axios
      .put(url, params.data)
      .then((response) => {
        const data = response.data.data;
        return { data: { ...data, id: data._id } };
      })
      .catch((err) => {
        console.log(err.response.data.message);

        throw new HttpError(err.response.data.message);
      });
  },
  delete: (resource, params) => {
    const url = `${baseUrl}/${resource}/${params.id}`;
    return axios
      .delete(url)
      .then((response) => {
        const data = response.data.data;
        return { data: { ...data, id: data._id } };
      })
      .catch((err) => {
        console.log(err.response.data.message);

        throw new HttpError(err.response.data.message);
      });
  },

  getList: (resource, params) => {
    const url = `${baseUrl}/${resource}`;
    return axios
      .get(url)
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

        throw new HttpError(err.response.data.message);
      });
  },
  getMany: (resource, params) => {
    const url = `${baseUrl}/${resource}`;
    return axios
      .get(url)
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

        throw new HttpError(err.response.data.message);
      });
  },
  getOne: (resource, params) => {
    const url = `${baseUrl}/${resource}/${params.id}`;
    return axios
      .get(url)
      .then((response) => {
        // first data for body second data is for data which we return
        console.log(response.data);
        const data = response.data.data;
        return { data: { ...data, id: data._id } };
      })
      .catch((err) => {
        console.log(err.response.data.message);

        throw new HttpError(err.response.data.message);
      });
  },
};
