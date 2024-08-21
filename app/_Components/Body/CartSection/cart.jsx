"use client";

import Image from "next/image";
import Cart_Context from "../../_Context/cart_context";
import { useContext, useState } from "react";
import { BiCategory } from "react-icons/bi";
import cartApi from "../../../_utils/cartApi";
import Link from "next/link";

export default function Cart_Details() {
  const [cart, setCart] = useContext(Cart_Context);

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + Number(item?.product?.attributes?.price);
    });
    return total.toFixed(2);
  };

  const deleteCartItemFromList = (id) => {
    cartApi
      .DeleteItem(id)
      .then((res) => {
        if (res)
          setCart((oldCart) =>
            oldCart.filter((item) => item.id !== res?.data?.data?.id)
          );
      })
      .catch((error) => {});
  };

  return (
    <section>
      <div className="mx-auto mt-[80px] max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-6">
              {cart.map((item) => {
                const img_url =
                  item?.product?.attributes?.media?.data[0]?.attributes?.url;

                return (
                  <li
                    className="flex sm:flex-row flex-col  items-center gap-4"
                    key={item.id}
                  >
                    <div
                      id="img_container"
                      className=" sm:w-auto mx-auto sm:mx-0"
                    >
                      <Image src={img_url} width={300} height={300} alt="img" />
                    </div>
                    <div>
                      <h3 className="sm:text-lg text-base text-gray-900">
                        {item?.product?.attributes?.title}
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[10px] ">
                        <div id="category" className="flex items-center ">
                          <BiCategory className="mr-1" />
                          <p className="sm:text-base text-sm text-gray-500 line-clamp-1">
                            {item?.product?.attributes?.category}
                          </p>
                        </div>
                      </dl>
                    </div>
                    <div className="flex flex-1 items-center justify-end gap-2">
                      <div>
                        <dt className="inline sm:text-[19px] text-[15px] ">
                          ${item?.product?.attributes?.price}
                        </dt>
                      </div>

                      <button
                        onClick={() => deleteCartItemFromList(item?.id)}
                        className=" transition hover:text-purple-600"
                      >
                        <span className="sr-only"></span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between !text-base font-medium ">
                    <dt>Total:</dt>
                    <dd className="sm:text-[19px] text-[15px]">
                      ${getTotalPrice()}
                    </dd>
                  </div>
                </dl>

                <div className="flex justify-end"></div>

                <div className="flex justify-end">
                  <Link
                    href="/Pages/checkout"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
