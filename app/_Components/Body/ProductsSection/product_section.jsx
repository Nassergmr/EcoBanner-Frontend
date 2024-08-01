"use client";

import productApi from "../../../_utils/productApi";
import Product_list from "./product_list";
import { useEffect, useState } from "react";

export default function Product_section() {
  const [product_data, setData] = useState([]);

  useEffect(() => {
    latestProducts_();
  }, []);

  const latestProducts_ = () => {
    productApi.getProductApi().then((res) => {
      setData(res.data.data);
    });
  };

  return (
    <div>
      <Product_list product_data={product_data} />
    </div>
  );
}
