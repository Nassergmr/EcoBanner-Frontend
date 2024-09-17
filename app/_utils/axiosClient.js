const { default: axios } = require("axios");

const apikey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiurl = `https://ecobanner-backend.onrender.com/api`;

const axiosClient = axios.create({
  baseURL: apiurl,
  headers: {
    Authorization: `bearer ${apikey}`,
  },
});
export default axiosClient;
