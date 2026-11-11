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
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <main className="w-full max-w-7xl px-4 mx-auto py-12">
        <header className="mb-10 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-medium tracking-[0.12em] uppercase mb-4">
            Loja
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Produtos Disponíveis
          </h1>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {products.map((prodocut) => (
            <section
              key={prodocut.id}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 overflow-hidden rounded-xl bg-slate-100">
                <img
                  className="h-48 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  src={prodocut.cover}
                  alt={prodocut.title}
                />
              </div>

              <div className="mb-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
                  {prodocut.brand}
                </p>
                <h2 className="mt-2 text-base font-semibold text-slate-800 line-clamp-2">
                  {prodocut.title}
                </h2>
              </div>

              <p className="mb-4 text-sm leading-6 text-slate-500 line-clamp-3">
                {prodocut.description}
              </p>

              <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                <strong className="text-lg font-bold text-slate-900">
                  {prodocut.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>

                <button
                  onClick={() => handleAddCartItem(prodocut)}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white transition-colors duration-200 hover:bg-slate-700"
                  aria-label={`Adicionar ${prodocut.title} ao carrinho`}
                >
                  <BsCartPlus size={18} />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
