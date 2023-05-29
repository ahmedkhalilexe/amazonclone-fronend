import React, { useContext } from "react";
import sample from "../assets/imgaes/sample2.jpg";
import Image from "next/image";
import {
  CartAction,
  CartActions,
  DispatchContext,
  useDispatchContext,
} from "./CartContext";
type Props = {};

function Product({}: Props) {
  const dispatchItems = useDispatchContext();
  const title: string =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat maxime,dicta hic odit sint voluptatibus numquam suscipit corrupti a voluptateperf";
  const price: number = 20.99;
  const shipping: number = 30.21;
  return (
    <div className=" h-96 px-5 bg-white">
      <div className="flex justify-center w-full  ">
        <Image src={sample} alt="" className=" object-cover w-3/4" />
      </div>
      <h1 className="line-clamp-3 leading-5">{title}</h1>
      <p className=" mt-2 font-bold">{`$${price}`}</p>
      <p className=" mt-[2px] text-gray-700">{`$${shipping} shipping`}</p>
      <button
        onClick={() => {
          dispatchItems!({
            type: CartActions.ADD_TO_CART,
            payload: {
              title,
              price,
              shipping,
            },
          });
        }}
        className=" mt-3 rounded-md bg-gradient-to-b from-lightOrange to-darkOrange outline outline-1 outline-darkOrange px-4 py-1"
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
