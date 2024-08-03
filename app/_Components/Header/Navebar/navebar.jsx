"use client";

import Link from "next/link";
import Li_nave from "../../Elements/li_nave";
import Button_main from "../../Elements/button_main";
import Button_secondary from "../../Elements/button_secondary";
import Image from "next/image";
import Drawer from "./drawer";
import { useUser } from "@clerk/nextjs";
import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import { UserButton } from "@clerk/nextjs";
import Cart_Menu from "./cart_menu";
import Cart_Context from "../../_Context/cart_context";
import cartApi from "../../../_utils/cartApi";

export default function Navebar() {
  const [cart_Menu, setCart_Menu] = useState(false);

  const handleCart_Menu = () => {
    setCart_Menu(!cart_Menu);
  };

  const { user } = useUser();
  const [cart, setCart] = useContext(Cart_Context);
  const pathname = usePathname();
  const isSignUpPage = pathname.includes("sign");

  useEffect(() => {
    user && getCartItems();
  }, [user]);

  const getCartItems = () => {
    cartApi.UserItem(user.primaryEmailAddress.emailAddress).then((res) => {
      res?.data?.data.forEach((cart_item) => {
        setCart((prev) => [
          ...prev,
          {
            id: cart_item.id,
            product: cart_item.attributes.products.data[0],
          },
        ]);
      });
    });
  };

  if (isSignUpPage) {
    return null;
  }

  return (
    <nav className="flex justify-between lg:px-16 md:px-8 sm:px-6 px-5 py-5 items-center bg-white shadow-md fixed w-full max-w-[100vw] top-0">
      <ul className="flex sm:gap-x-5 items-center">
        <Link href="/" id="logo" className="mr-5">
          <Image src="/logo.svg" width={70} height={70} alt="logo" />
        </Link>
        <Link href="/">
          <Li_nave>Home</Li_nave>
        </Link>
        <Link href="/Pages/about">
          <Li_nave>About Us</Li_nave>
        </Link>
        <Link href="/Pages/contact">
          <Li_nave>Contact Us</Li_nave>
        </Link>
      </ul>

      {!user ? (
        <div id="button_container" className="flex gap-x-3 items-center">
          <Link href="/auth/sign-in">
            <Button_main>Login</Button_main>
          </Link>
          <Link href="/auth/sign-up">
            <Button_secondary>Register</Button_secondary>
          </Link>
        </div>
      ) : (
        <div id="cart_icon" className="flex items-center gap-4">
          <h2
            onClick={handleCart_Menu}
            className="flex gap-1 cursor-pointer text-gray-500 hover:text-black transition duration-75 ease-in"
          >
            <FiShoppingCart className="text-[25px] " />({cart?.length})
          </h2>

          <UserButton></UserButton>
          <Cart_Menu cart_Menu={cart_Menu} setCart_Menu={setCart_Menu} />
        </div>
      )}

      <Drawer />
    </nav>
  );
}
