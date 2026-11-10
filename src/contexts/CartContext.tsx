import { createContext, type ReactNode, useState } from "react";

interface CartContextData {
  cart: CartProps[];
  CartAmount: number;
}

interface CartProps {
  id: number;
  brand: string;
  category: string;
  title: string;
  description: string;
  price: number;
  amount: number;
  cover: string;
}

interface cartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: cartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  return (
    <CartContext.Provider value={{ cart, CartAmount: cart.length }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
