export function Cart() {
  return (
    <div className="w-full max-w-full mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">
        Carrinho de compras
      </h1>

      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img
          className="w-full rounded-lg max-w-70 mb-2 "
          src="https://http2.mlstatic.com/D_NQ_NP_2X_968934-MLB92393163057_092025-F-impressora-multifuncional-brother-dcp8157dn-127v.webp"
          alt="imagem impressora brother 8157"
        />

        <strong>R$1000</strong>

        <div className="flex items-center justify-center gap-3">
          <button className="bg-slate-600 px-2 rounded text-white font-medium flex items center justify-center">
            -
          </button>
          2
          <button className="bg-slate-600 px-2 rounded text-white font-medium flex items center justify-center">
            +
          </button>
        </div>

        <strong className="float-right">
            SubTotal: R$1000
        </strong>
      </section>

      <p className="font-bold mt-4">Total: R$1000,00</p>
    </div>
  );
}
