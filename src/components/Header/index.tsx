import { Link } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const {CartAmount} = useContext(CartContext);

  return (
    <header className="w-full px-1 bg-slate-200 md: grid-cols-2 lg:grid-cols-5">
      <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
        <Link className="font-bold text-2xl" to="/">
          <p>Imprass</p>
        </Link>

        <Link className="relative" to="/cart">
          <FiShoppingCart size={24} color="#121212" />
          {CartAmount > 0 && (
            <span className="absolute -top-3 -right-3 bg-sky-500 rounded-full w-6 flex items-center justify-center text-white">
              {CartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
