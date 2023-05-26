import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="flex items-center h-16 w-screen px-5 py-3 bg-darkGrey text-gray-50">
      {/* Logo */}
      <div className=" text-2xl px-2 py-1 font-bold hover:outline outline-1 cursor-pointer">
        Zamazon
      </div>
      {/* search bar */}
      <div className="flex basis-full h-full mx-4 text-black">
        <select className=" h-full px-2 py-1 text-sm text-gray-600 hover:text-gray-950 rounded-s-md border-e-2 bg-gray-100 hover:bg-gray-200 border-gray-300 cursor-pointer">
          <option value={"all"} defaultChecked>
            all
          </option>
          <option value={"test1"}>test1</option>
          <option value={"test2"}>test2</option>
          <option value={"test3"}>test3</option>
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
      <div>
        <div className="h-full px-2 py-1 text-center hover:outline outline-1 cursor-pointer">
          ENG
        </div>
      </div>
      <div className="h-full px-2 py-1 hover:outline outline-1 cursor-pointer">
        <div className=" text-xs ">Hello, sign in</div>
        <div className=" text-sm font-bold">Account&nbsp;&&nbsp;Lists</div>
      </div>
      <div className=" h-full px-2 py-1 hover:outline outline-1 cursor-pointer">
        <div className=" text-xs ">Returns</div>
        <div className=" text-sm font-bold">&&nbsp;Orders</div>
      </div>
      <div className="flex h-full px-2 py-1 hover:outline outline-1 cursor-pointer">
        <div className=" relative">
          <span className=" absolute left-3 bottom-4 text-lg font-bold text-darkOrange ">
            0
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" aspect-square w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
        <div className=" font-bold">cart</div>
      </div>
    </nav>
  );
};
export default NavBar;
