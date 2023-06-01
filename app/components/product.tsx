import React, { useContext, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { DispatchContext, useDispatchContext } from "./CartContext";
import { CartActions } from "../types/CartReducer";
type Props = {
  title: string;
  price: number;
  shipping: number;
  image: StaticImageData;
};

function Product({ title, price, shipping, image }: Props) {
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  const dispatchItems = useDispatchContext();
  return (
    <div className=" h-fit py-3 px-5 bg-white">
      <div className="flex justify-center w-full  ">
        <Image src={image} alt="" className=" object-cover w-3/4" />
      </div>
      <h1 className="line-clamp-3 leading-5">{title}</h1>
      <p className=" mt-2 font-bold">{`$${price}`}</p>
      <p className=" mt-[2px] text-gray-700">{`$${shipping} shipping`}</p>
      {!isAddedToCart ? (
        <button
          onClick={() => {
            dispatchItems!({
              type: CartActions.ADD_TO_CART,
              payload: {
                title,
                price,
                shipping,
                image,
              },
            });
            setIsAddedToCart(!isAddedToCart);
          }}
          className=" mt-3 rounded-md bg-gradient-to-b from-lightOrange to-darkOrange outline outline-1 outline-darkOrange px-1 py-1 text-sm md:px-4 md:text-base"
        >
          Add to cart
        </button>
      ) : (
        <button
          onClick={() => {
            dispatchItems!({
              type: CartActions.DELETE_FROM_CART,
              payload: {
                title,
                price,
                shipping,
                image,
              },
            });
            setIsAddedToCart(!isAddedToCart);
          }}
          className=" mt-3 rounded-md bg-gradient-to-b from-lightOrange to-darkOrange outline outline-1 outline-darkOrange px-1 py-1 text-sm md:px-4 md:text-base"
        >
          Delete from cart
        </button>
      )}
    </div>
  );
}

export default Product;
