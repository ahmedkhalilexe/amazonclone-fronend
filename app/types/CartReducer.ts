import { StaticImageData } from "next/image";

export enum CartActions {
    ADD_TO_CART = "ADD_TO_CART",
    DELETE_FROM_CART = "DELETE_FROM_CART",
  }
  export type CartItem = {
    title: string;
    price: number;
    shipping: number;
    image : StaticImageData;
  };
  export type CartAction = {
    type: CartActions;
    payload: CartItem;
  };