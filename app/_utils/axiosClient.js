const { default: axios } = require("axios");

const apikey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiurl = `https://digital-products-backend-2.onrender.com`;

const axiosClient = axios.create({
  baseURL: apiurl,
  headers: {
    Authorization: `bearer ${apikey}`,
  },
});
export default axiosClient;
