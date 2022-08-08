import Item from "./Item";

const Main = () => {
  return (
    <main className="h-4/5 flex flex-row justify-between">
      <article className="basis-2/5 bg-background flex flex-col justify-center items-start">
        <span className="pl-32 pr-32 font-bold">
          <h1 className="text-5xl">Tênis Esportivo Para Corrida Top</h1>
          <p className="text-text-description">
            Esse tênis tem o intuito de te deixar ainda mais fitness, focado e
            musculoso
          </p>
          <p className="text-3xl">R$ 1.000,00</p>
        </span>
        <button className="bg-button ml-32 w-48 h-12 text-white font-bold">
          COMPRAR
        </button>
      </article>
      <article className="basis-3/5 bg-main-background flex flex-col justify-center items-center">
        <Item />
      </article>
    </main>
  );
};

export default Main;
