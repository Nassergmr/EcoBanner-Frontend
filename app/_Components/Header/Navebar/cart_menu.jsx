"use client";

import { IoCloseOutline } from "react-icons/io5";
import { useRef, useEffect, useContext } from "react";
import Cart_Products from "./cart_products";

export default function Cart_Menu({ cart_Menu, setCart_Menu }) {
  const cart_MenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cart_MenuRef.current &&
        !cart_MenuRef.current.contains(event.target)
      ) {
        setCart_Menu(false);
      }
    };

    if (cart_Menu) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent scrolling when drawer is open
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = ""; // Re-enable scrolling when drawer is closed
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = ""; // Clean up by enabling scrolling on unmount
    };
  }, [cart_Menu]);

  return (
    <>
      {cart_Menu && (
        <div
          id="overlay"
          className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-20"
          onClick={() => setCart_Menu(false)} // Close drawer when clicking on the overlay
        />
      )}

      <div
        ref={cart_MenuRef}
        id="cart_menu"
        className={`fixed top-[0] overflow-y-scroll h-screen  w-full sm:w-[50%] lg:w-[35%] bg-white shadow-lg transition-all duration-300 ease-in-out z-30 ${
          cart_Menu ? "left-0" : "-left-full"
        }`}
      >
        <h3 className="text-xs text-gray-500">
          (Refresh to display added cart Items)
        </h3>

        <button
          id="close_menu"
          onClick={() => setCart_Menu(false)}
          className="text-[30px] top-[0] absolute right-2  hover:scale-125 hover:opacity-100 opacity-70  transition duration-75 ease-in"
        >
          <IoCloseOutline />
        </button>

        <Cart_Products cart_Menu={cart_Menu} setCaart_Menu={setCart_Menu} />
      </div>
    </>
  );
}
