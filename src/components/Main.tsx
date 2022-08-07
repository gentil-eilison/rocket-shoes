const Main = () => {
  return (
    <main className="h-4/5 flex flex-row justify-between">
      <article className="basis-2/5 bg-background">
        <section className="border-solid border-2 border-black h-full flex flex-col justify-center items-center gap-5">
          <h1 className="text-5xl font-bold max-w-min">
            Tênis Esportivo Para Corrida Top
          </h1>
          <p className="w-auto pl-40 text-text-description font-bold">
            Esse tênis tem o intuito de te deixar ainda mais fitness, focado e
            musculoso
          </p>
          <p>
            R$ 1.000,00
          </p>

          <button>
            COMPRAR
          </button>
        </section>
      </article>
      <article className="basis-3/5 bg-main-background"></article>
    </main>
  );
};

export default Main;
