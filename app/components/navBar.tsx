import React from "react";
import { useItemsContext } from "./CartContext";
import Link from "next/link";
import { categories } from "../assets/consts/categories";

type Props = {};

const NavBar = (props: Props) => {
  const cartItems = useItemsContext();
  return (
    <nav className=" flex flex-col md:flex-row items-center h-fit w-screen px-5 py-3 bg-darkGrey text-gray-50">
      {/* Logo */}
      <div className=" text-2xl px-2 py-1 font-bold hover:outline outline-1 cursor-pointer">
        <Link href={"/"}>Zamazon</Link>
      </div>
      {/* search bar */}
      <div className="flex basis-full h-full mx-4 text-black">
        <select className=" px-2 py-1 text-sm text-gray-600 hover:text-gray-950 rounded-s-md border-e-2 bg-gray-100 hover:bg-gray-200 border-gray-300 cursor-pointer">
          <option value={"all"} defaultChecked>
            all
          </option>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
        <input
          type="text"
          className=" h-full min-w-[200px] w-full px-3 py-1"
          placeholder="Search Zamazon"
        ></input>
        <div className="flex justify-center items-center h-full px-4 py-1 bg-lightOrange hover:bg-orange-400 rounded-e-md cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      {/* left side of nav */}
      <div className=" flex py-2">
        <div>
          <div className="h-full px-2 py-1 text-center hover:outline outline-1 cursor-pointer">
            ENG
          </div>
        </div>
        <div className="h-full px-2 py-1 hover:outline outline-1 cursor-pointer">
          <Link href={"/signin"}>
            <div className=" text-xs ">Hello, sign in</div>
            <div className=" text-sm font-bold">Account&nbsp;&&nbsp;Lists</div>
          </Link>
        </div>
        <div className=" h-full px-2 py-1 hover:outline outline-1 cursor-pointer">
          <div className=" text-xs ">Returns</div>
          <div className=" text-sm font-bold">&&nbsp;Orders</div>
        </div>
        <div className="flex h-full px-2 py-1 hover:outline outline-1 cursor-pointer">
          <div className=" relative">
            <span className=" text-lg font-bold mr-2 text-darkOrange ">
              {cartItems.length}
            </span>
          </div>
          <Link href={"/cart"} className=" text-lg font-bold">
            Cart
          </Link>
          {/* <div className=" text-lg font-bold">cart</div> */}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
