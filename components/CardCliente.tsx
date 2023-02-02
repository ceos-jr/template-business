interface CardClienteProps {
  name: string;
  position: string;
  testament: string;
}

const CardCliente = ({ name, position, testament }: CardClienteProps) => {
  return (
    <div className="p-4 text-center bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{name}</h3>
      <h4 className="font-bold text-primary-400">{position}</h4>
      <p>{testament}</p>
    </div>
  );
};

export default CardCliente;
