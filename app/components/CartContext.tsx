import React, { ReactNode, createContext, useContext, useReducer } from "react";
export const ItemsContext = createContext<CartItem[]>([]);
export const DispatchContext = createContext<React.Dispatch<CartAction> | null>(
  null
);
export const useDispatchContext = () => {
  return useContext(DispatchContext);
};
export const useItemsContext = () => {
  return useContext(ItemsContext);
};
type Props = {
  children: ReactNode;
};
export enum CartActions {
  ADD_TO_CART = "ADD_TO_CART",
  DELETE_FROM_CART = "DELETE_FROM_CART",
}
type CartItem = {
  title: string;
  price: number;
  shipping: number;
};
export type CartAction = {
  type: CartActions;
  payload: CartItem;
};
const CartReducer = (items: CartItem[], action: CartAction): CartItem[] => {
  const { type, payload } = action;
  switch (type) {
    case CartActions.ADD_TO_CART:
      console.log(items);
      return [...items, payload];
    case CartActions.DELETE_FROM_CART:
      return items.filter((item) => item != payload);
    default:
      return items;
  }
};
function CartProvider({ children }: Props) {
  const [itemsState, dispatchItems] = useReducer(CartReducer, []);
  return (
    <ItemsContext.Provider value={itemsState}>
      <DispatchContext.Provider value={dispatchItems}>
        {children}
      </DispatchContext.Provider>
    </ItemsContext.Provider>
  );
}

export default CartProvider;
