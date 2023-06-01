import React from "react";
import { useItemsContext } from "../CartContext";

type Props = {};

function Checkout({}: Props) {
  const cartItems = useItemsContext();
  const getTotalPrice = () => {
    let total: number = 0;
    cartItems.map((item) => {
      total = total + item.price;
    });
    return total;
  };
  const totalPrice = getTotalPrice();
  return (
    <div className="flex flex-col justify-center items-center py-7 bg-white h-fit">
      <div className="pb-5">
        <h1 className=" text-lg">
          Subtotal({cartItems.length + " items"}):
          <span className=" font-bold">${totalPrice}</span>
        </h1>
      </div>
      <button className="rounded-md bg-brightOrange hover:bg-orange-400 px-10 py-1">
        proceed to checkout
      </button>
    </div>
  );
}

export default Checkout;
