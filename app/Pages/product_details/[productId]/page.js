"use client";
import productApi from "../../../_utils/productApi";
import { useEffect, useState } from "react";
import Product_details from "../../../_Components/Body/ProductsSection/product_details";

export default function Product_Id({ params }) {
  const [product_data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    ProductId_();
  }, [params.productId]);

  const ProductId_ = () => {
    productApi.getProductId(params.productId).then((res) => {
      setData(res.data.data);
      Productcategory(res?.data?.data);
    });
  };

  const Productcategory = (product) => {
    productApi.getProductFilter(product?.attributes?.category).then((res) => {
      setFilter(res?.data?.data);
    });
  };

  return <Product_details product_data={product_data} filter={filter} />;
}
