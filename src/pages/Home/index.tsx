import {BsCartPlus} from "react-icons/bs"

export function Home() {
  return (
    <div>
      <main className="w-full max-w-full px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </h1>

        <div className="grid grid-cols1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          <section className="w-full ">
            <img className="w-full rounded-lg max-w-70 mb-2 " src="https://http2.mlstatic.com/D_NQ_NP_2X_968934-MLB92393163057_092025-F-impressora-multifuncional-brother-dcp8157dn-127v.webp" alt="imagem impressora brother 8157" />
            <p className="font-medium mt-2 mb-2">Impressora Multifuncional Brother Dcp-8157dn 127v (Recondicionado)</p>

            <div className="flex items-center gap-3">
                <strong>R$950,00</strong>
                <button>
                    <BsCartPlus size={20}/>
                </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
