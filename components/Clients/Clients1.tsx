import ClientCard1 from "./ClientCard1";

export type Client1Type = {
  name: string;
  position: string;
  testament: string;
};

const clients: Client1Type[] = [
  {
    name: "Tubias",
    position: "Head nos Portulovers",
    testament: "Si si si mano, mucho legal, gostei mucho mesmo",
  },
];

const Clients1 = () => {
  return (
    <div className="w-full text-gray-900 bg-gray-200">
      <div className="container flex flex-col gap-y-16 justify-center items-center py-16 px-8 mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            O que eles dizem <span className="text-primary-500">sobre nós</span>
          </h1>
          <h2 className="pt-4 font-light uppercase">
            Testemunho dos nossos melhores clientes
          </h2>
        </div>
        <ClientCard1 {...clients[0]} />
      </div>
    </div>
  );
};

export default Clients1;
