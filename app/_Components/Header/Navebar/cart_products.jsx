"use client";

import Image from "next/image";
import Cart_Context from "../../_Context/cart_context";
import { useContext } from "react";
import Link from "next/link";

export default function Cart_Products({ setCart_Menu }) {
  const [cart] = useContext(Cart_Context);

  return (
    <div id="cards_container " className="py-5 flex flex-col gap-y-8">
      {cart.map((item) => {
        console.log("cart", cart);
        const img_url = item?.product?.attributes?.img?.data?.attributes?.url;
        return (
          <div key={item.id} className="mx-auto" id="card">
            <div id="img_container">
              <Image src={img_url} width={300} height={300} alt="" />
              <h2 className="text-center text-md mt-2 text-gray-500">
                {item?.product?.attributes?.title}
              </h2>
            </div>
          </div>
        );
      })}

      {cart.length !== 0 ? (
        <Link href="/Pages/cart" onClick={() => setCart_Menu(false)}>
          <button className=" left-[50%] transform translate-x-[-50%] relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group w-fit bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              View My Cart
            </span>
          </button>
        </Link>
      ) : (
        <div className="mx-auto">
          <Image
            src={"/Images/Empty Cart.png"}
            width={300}
            height={300}
            alt=""
          />
          <h1 className="mt-6 text-center text-xl">
            Cart is Empty Start Shopping
          </h1>
        </div>
      )}
    </div>
  );
}
