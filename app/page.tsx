"use client";
import Image from "next/image";
import NavBar from "./components/navBar";
import ImageSlider from "./components/ImageSlider";
import Product from "./components/product";
import Link from "next/link";
import CartProvider from "./components/CartContext";
export default function Home() {
  return (
    <CartProvider>
      <header>
        <NavBar />
      </header>
      <main className=" relative overflow-x-hidden ">
        <ImageSlider />
        <div className="flex flex-col gap-7 absolute px-7 w-full top-1/2 left-0 bg-gradient-to-b from-gray-300/5 via-gray-300 to-gray-300">
          <div className="grid grid-cols-4 gap-7">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className=" w-full h-[2px] bg-gray-400"></div>
          <div className=" flex flex-col items-center gap-2 justify-center py-4">
            <button className="rounded-md bg-gradient-to-b from-lightOrange to-darkOrange outline outline-1 outline-darkOrange px-16 py-1">
              Sign in
            </button>
            <p>
              New customer?<Link href={"/link"}> Start here.</Link>
            </p>
          </div>
          <div className=" w-full h-[2px] bg-gray-400"></div>
        </div>
      </main>
    </CartProvider>
  );
}
