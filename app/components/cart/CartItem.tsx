import { CartActions, CartItem } from "@/app/types/CartReducer";
import React from "react";
import { useDispatchContext } from "../CartContext";
import Image from "next/image";

type Props = {
  Item: CartItem;
};

function CartItem({ Item }: Props) {
  const dispatchItems = useDispatchContext();
  return (
    <>
      <div className="flex w-full py-2 mb-3 justify-between items-center">
        <div className=" flex">
          <Image
            src={Item.image}
            className=" h-24 w-32 md:h-32 md:w-48 "
            alt=""
          />
          <div>
            <h1 className="line-clamp-3 leading-5">{Item.title}</h1>
            <button
              className="text-blue-600 hover:underline text-sm
              "
              onClick={() => {
                dispatchItems!({
                  type: CartActions.DELETE_FROM_CART,
                  payload: Item,
                });
              }}
            >
              Delete
            </button>
          </div>
        </div>
        <span className=" text-lg font-bold">${Item.price}</span>
      </div>
      <div className=" w-full h-[1px] bg-gray-300"></div>
    </>
  );
}

export default CartItem;
