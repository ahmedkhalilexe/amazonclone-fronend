"use client";
import sample from "./assets/imgaes/sample2.jpg";
import NavBar from "./components/navBar";
import ImageSlider from "./components/ImageSlider";
import Product from "./components/product";
import Link from "next/link";
import CartProvider from "./components/CartContext";
import { faker } from "@faker-js/faker";
export default function Home() {
  faker.seed(123);
  const products = [...Array(20)].map(() => ({
    title: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    shipping: parseInt(faker.commerce.price()),
  }));
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
                image={sample}
              />
            ))}
          </div>
          <div className=" w-full h-[2px] bg-gray-400"></div>
          <div className=" flex flex-col items-center gap-2 justify-center py-4">
            <button className="rounded-md bg-gradient-to-b from-lightOrange to-darkOrange outline outline-1 outline-darkOrange px-20 py-1">
              Sign in
            </button>
            <p className=" text-sm">
              New customer?
              <Link
                href={"#"}
                className=" text-blue-600 hover:underline hover:text-darkOrange "
              >
                {" "}
                Start here.
              </Link>
            </p>
          </div>
          <div className=" w-full h-[2px] bg-gray-400"></div>
        </div>
      </main>
    </CartProvider>
  );
}
