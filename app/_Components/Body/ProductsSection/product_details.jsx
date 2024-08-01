"use client";

import Image from "next/image";
import Breadcrumb from "../../Elements/breadcrumb";
import { BiCategory } from "react-icons/bi";
import Skeleton_effect_img from "../../Elements/skeleton_effect_img";
import Skeleton_effect_text from "../../Elements/skeleton_effect_text";
import Similar_Products from "../../Body/ProductsSection/similar_products";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import cartApi from "../../../_utils/cartApi";
import Cart_Context from "../../_Context/cart_context";
import { useContext } from "react";

export default function Product_details({ product_data, filter }) {
  const { user } = useUser();
  const router = useRouter();
  const [cart, setCart] = useContext(Cart_Context);

  const HandleAddtoCart = () => {
    if (!user) {
      router.push("/auth/sign-in");
    } else {
      const data = {
        data: {
          user_name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product_data?.id],
        },
      };

      cartApi.AddtoCart(data).then((res) => {
        setCart([
          ...cart,
          {
            id: res?.data?.data?.id,
            product_data,
          },
        ]);
      });
    }
  };

  return (
    <div className="mt-[120px] mb-[80px]">
      <Breadcrumb product_data={product_data} />

      <div
        id="product_container"
        className="sm:mx-0 mx-auto flex flex-wrap lg:flex-nowrap sm:mt-[50px] mt-[30px] justify-around  lg:px-16 md:px-8 sm:px-6 px-5  items-center gap-y-8"
      >
        {product_data?.attributes?.banner?.data[0]?.attributes?.url ? (
          <div id="img_container" className="sm:mx-0 mx-auto">
            <Image
              className="rounded-lg shadow-lg"
              src={product_data?.attributes?.banner?.data[0]?.attributes?.url}
              width={450}
              height={450}
              alt="banner"
            />
          </div>
        ) : (
          <Skeleton_effect_img />
        )}

        {product_data.id ? (
          <div
            id="content"
            className="lg:w-[50%] sm:mx-0 text-left w-full flex flex-col gap-y-2"
          >
            <h2 id="title" className="text-2xl">
              {product_data.attributes?.title}
            </h2>
            <div id="category" className="flex items-center">
              <BiCategory className="" />
              <p className="text-beseline text-gray-400  ml-1">
                {product_data?.attributes?.category}
              </p>
            </div>
            <p id="description" className="text-gray-600">
              {product_data.attributes?.description[0]?.children[0]?.text}
            </p>
            <p id="price" className=" text-gray-400 text-xl font-medium">
              ${product_data?.attributes?.price}
            </p>

            <button
              onClick={HandleAddtoCart}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group w-fit bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add to Cart
              </span>
            </button>
          </div>
        ) : (
          <Skeleton_effect_text />
        )}
      </div>

      <Similar_Products filter={filter} />
    </div>
  );
}
