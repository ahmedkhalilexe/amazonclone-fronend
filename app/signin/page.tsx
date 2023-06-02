import Link from "next/link";
import React from "react";

type Props = {};

function SignIn({}: Props) {
  return (
    <div className=" flex flex-col items-center">
      <div className=" text-4xl my-3 px-2 py-1 font-bold  cursor-pointer">
        <Link href={"/"}>Zamazon</Link>
      </div>
      <div className=" md:w-3/12 outline outline-1 outline-gray-400 rounded-md px-5 py-3">
        <h1 className=" text-3xl mb-2">Sign in</h1>
        <form className=" flex flex-col">
          <label htmlFor="emainInput">Email</label>
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
          <p className=" text-right text-sm text-blue-600 hover:underline hover:text-darkOrange">
            <Link href={"#"}>Forgot your password?</Link>
          </p>
          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-b from-lightOrange to-darkOrange outline outline-1 outline-darkOrange my-2 py-1"
          >
            Sign in
          </button>
        </form>
      </div>
      <p className=" text-sm text-gray-500 mt-4">New to Zamazon?</p>
      <button className="md:w-3/12 px-2 rounded-md bg-gradient-to-b from-white to-gray-200 outline outline-1 outline-gray-400 my-2 py-1">
        <Link href={"/signup"}>Create your Zamazon account</Link>
      </button>
    </div>
  );
}

export default SignIn;
