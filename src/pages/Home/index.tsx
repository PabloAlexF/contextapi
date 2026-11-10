import { BsCartPlus } from "react-icons/bs";

import { api } from "../../services/api";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export interface productsProps {
  id: number;
  brand: string;
  category: string;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const [products, setProducts] = useState<productsProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }

    getProducts();
  }, []);

  const { addItemCart } = useContext(CartContext);

  function handleAddCartItem(prodocut: productsProps) {
    addItemCart(prodocut);
    console.log("clicou");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="w-full max-w-7xl px-4 mx-auto py-10">
        <h1 className="font-bold text-2xl mb-8 text-center text-gray-800">
          Produtos Disponíveis
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((prodocut) => (
            <section
              key={prodocut.id}
              className="w-full h-full flex flex-col bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-200"
            >
              <img
                className="w-full h-48 object-contain rounded-lg mb-4"
                src={prodocut.cover}
              />

              <h2 className="font-semibold text-base text-gray-800 mb-2">
                {prodocut.title}
              </h2>

              <h3 className="text-sm text-gray-500 mb-3 line-clamp-3">
                {prodocut.description}
              </h3>

              <h3 className="text-xs font-medium text-gray-400 mb-4">
                {prodocut.brand}
              </h3>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                <strong className="text-lg font-bold text-gray-800">
                  {prodocut.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  onClick={() => handleAddCartItem(prodocut)}
                  className="bg-gray-900 text-white p-2.5 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <BsCartPlus size={20} />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
