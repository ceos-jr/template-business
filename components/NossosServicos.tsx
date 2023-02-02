import CardServico from "./CardServico";

const NossosServicos = () => {
  return (
    <section className="container flex flex-col gap-y-16 justify-center items-center mx-auto mt-24">
      <div>
        <h1 className="text-4xl font-bold">
          Nossos <span className="text-lime-500">Servicos</span>
        </h1>
        <p className="pt-4 font-extralight text-gray-800 uppercase">
          Adquira um dos nossos servicos
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 p-12 w-full md:grid-cols-3">
        <CardServico
          name="Servico 1"
          image="https://templatemo.com/templates/templatemo_545_finance_business/assets/images/service_01.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet."
        />
        <CardServico
          name="Servico 1"
          image="https://templatemo.com/templates/templatemo_545_finance_business/assets/images/service_01.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet."
        />
        <CardServico
          name="Servico 1"
          image="https://templatemo.com/templates/templatemo_545_finance_business/assets/images/service_01.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit tortor sed augue suscipit tincidunt. Pellentesque vestibulum tellus gravida quam volutpat imperdiet."
        />
      </div>
    </section>
  );
};

export default NossosServicos;
