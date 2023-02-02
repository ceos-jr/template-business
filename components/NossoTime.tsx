import CardMembro from "./CardMembro";

const NossoTime = () => {
  return (
    <div className="container flex flex-col gap-8 justify-center p-8 pt-24 mx-auto">
      <p className="text-lg font-semibold text-lime-600">Nosso Time</p>
      <h1 className="text-4xl font-bold text-gray-800">
        Somos uma equipe de pequenos contadores de historias e roubado da ceos
      </h1>
      <div className="p-4">
        <CardMembro name="tubias" position="tobaianor" />
      </div>
    </div>
  );
};

export default NossoTime;
