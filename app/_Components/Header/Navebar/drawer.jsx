"use client";

import Image from "next/image";
import Link from "next/link";
import Li_drawer from "../../Elements/li_drawer";
import { useState, useEffect, useRef } from "react";
import Button_main_drawer from "../../Elements/button_main_drawer";
import Button_secondary_drawer from "../../Elements/button_secondary_drawer";
import { useUser } from "@clerk/nextjs";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";



export default function Drawer() {
  const { user } = useUser();
  const [drawer, setDrawer] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDrawer(false);
      }
    };

    if (drawer) {
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
  }, [drawer]);

  return (
    <>
      {/* Menu toggle button */}
      <GrMenu
        onClick={toggleDrawer}
        id="menu"
        alt="menu"
        className="sm:hidden block cursor-pointer text-[23px] transition duration-75 ease-in"
      />

      {/* Dark overlay */}
      {drawer && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-20"
          onClick={toggleDrawer} // Close drawer when clicking on the overlay
        />
      )}

      {/* Drawer content */}
      <div
        ref={drawerRef}
        className={`fixed top-0 w-[50%] sm:w-[40%] ${
          drawer ? "right-0" : "-right-full"
        } h-[100vh] bg-white absolute shadow-lg transition-all duration-300 ease-in-out z-30`}
      >
        <ul className="flex gap-y-5 flex-col ml-5 mt-10">
          <IoMdClose
            onClick={toggleDrawer}
            id="close_drawer"
            className="cursor-pointer hover:opacity-100 opacity-70 text-[20px] transition duration-75 ease-in hover:scale-125"
          />
          <Link onClick={toggleDrawer} href="/">
            <Li_drawer>Home</Li_drawer>
          </Link>
          <Link onClick={toggleDrawer} href="/Pages/about">
            <Li_drawer>About Us</Li_drawer>
          </Link>
          <Link onClick={toggleDrawer} href="/Pages/contact">
            <Li_drawer>Contact Us</Li_drawer>
          </Link>
        </ul>

        {!user ? (
          <div
            id="buttons_container"
            className="flex flex-col w-[60%] sm:w-[50%] gap-y-3 mt-5 ml-5"
          >
            <Link href="/auth/sign-in" onClick={toggleDrawer}>
              <Button_main_drawer>Login</Button_main_drawer>
            </Link>
            <Link href="/auth/sign-up" onClick={toggleDrawer}>
              <Button_secondary_drawer>Register</Button_secondary_drawer>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
