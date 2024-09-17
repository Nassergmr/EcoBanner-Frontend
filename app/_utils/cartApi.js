import axiosClient from "./axiosClient";

const AddtoCart = (payload) => axiosClient.post(`/carts`, payload);
const UserItem = (email) =>
  axiosClient.get(
    `/carts?populate[products_digitals][populate]=img&filters[email][$eq]=${email}`
  );
const DeleteItem = (id) => axiosClient.delete(`/carts/${id}`);
export default { AddtoCart, UserItem, DeleteItem };
