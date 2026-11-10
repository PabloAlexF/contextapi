import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Carrinho de compras
        </h1>

        {cart.map((item) => (
          <section key={item.id} className="flex flex-col sm:flex-row items-center gap-4 border border-slate-200 bg-white rounded-2xl p-4 shadow-sm">
            <img
              className="w-28 h-28 object-cover rounded-xl"
              src={item.cover}
              alt={item.title}
            />

            <div className="flex-1">
              <p className="font-medium text-lg">{item.title}</p>
              <p className="text-sm text-slate-500 mt-1">Produto em estoque</p>
            </div>

            <strong className="text-lg font-semibold text-slate-800">
              R$ {item.price}
            </strong>

            <div className="flex items-center gap-3 border border-slate-200 rounded-full px-2 py-1">
              <button className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition">
                -
              </button>

              <span className="text-sm font-medium">{item.amount}</span>

              <button className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition">
                +
              </button>
            </div>

            <strong className="text-base font-semibold text-slate-800">
              Subtotal: R$ {item.total}
            </strong>
          </section>
        ))}

        <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
          <p className="text-lg text-slate-600">Total</p>
          <p className="text-2xl font-bold text-slate-900">R$ 1000,00</p>
        </div>
      </div>
    </div>
  );
}
