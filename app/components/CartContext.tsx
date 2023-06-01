import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { CartAction, CartActions, CartItem } from "../types/CartReducer";
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
function getInitialItems() {
  const initialCartItems = window.localStorage.getItem("cartItems");
  return initialCartItems ? JSON.parse(initialCartItems) : [];
}
const CartReducer = (items: CartItem[], action: CartAction): CartItem[] => {
  const { type, payload } = action;
  switch (type) {
    case CartActions.ADD_TO_CART:
      return [...items, payload];
    case CartActions.DELETE_FROM_CART:
      return items.filter((item) => item.title != payload.title);
    default:
      return items;
  }
};
function CartProvider({ children }: Props) {
  const [itemsState, dispatchItems] = useReducer(
    CartReducer,
    getInitialItems()
  );
  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(itemsState));
  }, [itemsState]);
  return (
    <ItemsContext.Provider value={itemsState}>
      <DispatchContext.Provider value={dispatchItems}>
        {children}
      </DispatchContext.Provider>
    </ItemsContext.Provider>
  );
}

export default CartProvider;
