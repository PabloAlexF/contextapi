import { createContext, type ReactNode, useState } from "react";
import { type productsProps } from "../pages/Home";

interface CartContextData {
  cart: CartProps[];
  CartAmount: number;
  addItemCart: (newItem: productsProps) => void;
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
  total: number;
}

interface cartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: cartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  function addItemCart(newItem: productsProps) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id); //se retornar -1 quer dizer que encontrou o mesmo item

    if (indexItem !== -1) {
      // se entrou aqui podemos adicionar +1 na quantidade e calculamos o total

      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);

      return;
    }

    //adicionar esse item na nossa lista:

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((products) => [...products, data]);
  }


  function removeItemCart(product: CartProps) {

    const indexItem = cart.findIndex(item => item.id === product.id)

    if(cart[indexItem]?.amount > 1) {
      //diminuir apenas 1 do amount que voce tem
    }

    const removeItem = cart.filter(item => item.id !== product.id )
    setCart(removeItem)

  }

  return (
    <CartContext.Provider
      value={{ cart, CartAmount: cart.length, addItemCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
