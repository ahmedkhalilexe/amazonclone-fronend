"use client";
import React from "react";
import NavBar from "../components/navBar";
import CartProvider from "../components/CartContext";
import CartItemsList from "../components/cart/CartItemsList";
import Checkout from "../components/cart/Checkout";

type Props = {};

function Cart({}: Props) {
  return (
    <CartProvider>
      <header>
        <NavBar />
      </header>
      <main className=" grid grid-cols-3 gap-7 px-7 py-3 bg-gray-200">
        <CartItemsList />
        <Checkout />
      </main>
    </CartProvider>
  );
}

export default Cart;
