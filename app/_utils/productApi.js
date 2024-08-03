import axiosClient from "./axiosClient";

const getProductApi = () => axiosClient.get(`/digital-products?populate=*`);
const getProductId = (id) =>
  axiosClient.get(`/digital-products/${id}?populate=*`);
const getProductFilter = (category) => {
  return axiosClient.get(
    `/digital-products?filters[category][$eq]=${category}&populate=*`
  );
};

export default {
  getProductApi,
  getProductId,
  getProductFilter,
};
1;
