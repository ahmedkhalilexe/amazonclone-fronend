"use client";
import NavBar from "./components/navBar";
import ImageSlider from "./components/ImageSlider";
import Product from "./components/product";
import Link from "next/link";
import CartProvider from "./components/CartContext";
import { products } from "./assets/consts/products";
export default function Home() {
  return (
    <CartProvider>
      <header>
        <NavBar />
      </header>
      <main className=" relative overflow-x- h-full ">
        <ImageSlider />
        <div className="flex flex-col gap-7 absolute px-7 w-full top-1/2 left-0 bg-gradient-to-b from-gray-300/5 via-gray-300 to-gray-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
            {products.map((product, idx) => (
              <Product
                key={idx}
                title={product.title}
                price={product.price}
                shipping={product.shipping}
                image={product.image}
              />
            ))}
          </div>
          <div className=" w-full h-[2px] bg-gray-400"></div>
          <div className=" flex flex-col items-center gap-2 justify-center py-4">
            <button className="rounded-md bg-gradient-to-b from-lightOrange to-darkOrange outline outline-1 outline-darkOrange px-20 py-1">
              <Link href={"/signin"}>Sign in</Link>
            </button>
            <p className=" text-sm">
              New customer?
              <Link
                href={"/signup"}
                className=" text-blue-600 hover:underline hover:text-darkOrange "
              >
                {" "}
                Start here.
              </Link>
            </p>
          </div>
          <div className=" w-full h-[2px] bg-gray-400"></div>
          <div className="flex justify-center items-center w-full h-40">
            Made with &#10084; by{" "}
            <span>
              <Link
                href="https://github.com/khalilrume "
                className=" font-bold underline text-gray-900"
              >
                A.Khalil
              </Link>
            </span>
          </div>
        </div>
      </main>
    </CartProvider>
  );
}
