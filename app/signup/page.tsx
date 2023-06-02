import Link from "next/link";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className=" flex flex-col items-center">
      <div className=" text-4xl my-3 px-2 py-1 font-bold  cursor-pointer">
        <Link href={"/"}>Zamazon</Link>
      </div>
      <div className=" md:w-3/12 outline outline-1 outline-gray-400 rounded-md px-5 py-3">
        <h1 className=" text-3xl mb-2">Sign up</h1>
        <form className=" flex flex-col">
          <label htmlFor="nameInput">Your Name</label>
          <input
            type="name"
            name="name"
            id="nameInput"
            className=" outline outline-1 outline-gray-500 rounded-sm py-1 px-2 mb-2 text-sm focus:drop-shadow-lg focus:outline-darkOrange"
          />
          <label htmlFor="emailInput">Email</label>
          <input
            type="email"
            name="email"
            id="emailInput"
            className=" outline outline-1 outline-gray-500 rounded-sm py-1 px-2 mb-2 text-sm focus:drop-shadow-lg focus:outline-darkOrange"
          />
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            name="password"
            id="passwordInput"
            className=" outline outline-1 outline-gray-500 rounded-sm py-1 px-2 mb-2 text-sm focus:drop-shadow-lg focus:outline-darkOrange"
          />
          <label htmlFor="repasswordInput">Re-enter password</label>
          <input
            type="repassword"
            name="repassword"
            id="repasswordInput"
            className=" outline outline-1 outline-gray-500 rounded-sm py-1 px-2 mb-2 text-sm focus:drop-shadow-lg focus:outline-darkOrange"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-b from-lightOrange to-darkOrange outline outline-1 outline-darkOrange my-2 py-1"
          >
            Create your Zamazon account
          </button>
        </form>
      </div>
      <p className=" mt-3 text-sm text-blue-600 hover:underline hover:text-darkOrange">
        <Link href={"/signin"}>Already have an account</Link>
      </p>
    </div>
  );
}

export default page;
