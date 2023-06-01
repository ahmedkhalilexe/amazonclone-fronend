import React, { ReactComponentElement } from "react";
import { useDispatchContext, useItemsContext } from "../CartContext";
import { CartActions } from "../../types/CartReducer";
import CartItem from "./CartItem";

type Props = {};

const CartItemsList = (props: Props) => {
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
    <div className=" col-span-2 px-5 bg-white rounded-sm">
      <h1 className=" text-2xl pt-5">
        {cartItems.length ? "Shopping Cart" : "Your Zamazon Cart is empty."}
      </h1>
      <p className=" text-right text-gray-500">Price</p>
      <div className=" w-full h-[1px] bg-gray-300"></div>
      {cartItems.map((item, idx) => (
        <CartItem key={idx} Item={item} />
      ))}
      <div className=" pt-2 pb-5">
        <h1 className=" text-right text-lg">
          Subtotal({cartItems.length + " items"}):
          <span className=" font-bold">${totalPrice}</span>
        </h1>
      </div>
    </div>
  );
};

export default CartItemsList;
