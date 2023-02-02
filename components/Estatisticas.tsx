import CardEstatistica from "./CardEstatistica";

const Estatisticas = () => {
  return (
    <section className="w-full bg-gray-900">
      <div className="container grid grid-cols-1 gap-8 p-8 py-32 mx-auto md:grid-cols-2">
        <div className="flex flex-col gap-12 justify-center items-center text-white">
          <p className="w-full font-light uppercase">Lorem fodase kkkkk</p>
          <h1 className="w-full text-4xl font-bold">
            Our solutions for your{" "}
            <span className="text-lime-400">business growth</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            purus tellus, maximus at ornare id, sagittis in ante. Proin
            ultricies est arcu, eget facilisis lacus ultrices sed. Nulla sed
            urna semper, faucibus elit vel, ornare ipsum. Nullam lorem est,
            vulputate sit amet lorem eget, gravida sagittis ex.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 text-white md:grid-cols-2 md:grid-rows-2">
          <CardEstatistica number={945} name="Tubias" speed={1} />
          <CardEstatistica number={945} name="Tubias" speed={1} />
          <CardEstatistica number={945} name="Tubias" speed={1} />
          <CardEstatistica number={945} name="Tubias" speed={1} />
        </div>
      </div>
    </section>
  );
};

export default Estatisticas;
