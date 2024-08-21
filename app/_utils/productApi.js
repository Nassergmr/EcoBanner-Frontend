import axiosClient from "./axiosClient";

const getProductApi = () => axiosClient.get(`/products-digitals?populate=*`);
const getProductId = (id) =>
  axiosClient.get(`/products-digitals/${id}?populate=*`);
const getProductFilter = (category) => {
  return axiosClient.get(
    `/products-digitals?filters[category][$eq]=${category}&populate=*`
  );
};

export default {
  getProductApi,
  getProductId,
  getProductFilter,
};
