import Image from "next/image"

{
  /*nao gostei da fonte branca do texto mas nao sei oq ficaria melhor. Não tem como colocar sombra?*/
}

const ServicesJuia = () => {
  return (
    <section className="bg-gradient-to-r from-zinc-200 to-slate-800">
      <h1 className="text-white text-center py-12 text-4xl font-extrabold cursor-pointer duration-400">
        Our Services
      </h1>
      <div className="container px-6 py-10 mx-auto animate-pulse">
        <div className="grid grid-cols-1 gap-8 mb-12 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:gr-cols-3">
          <div className="w-full">
            <div className="w-full h-64 bg-gray-300  rounded-lg">
              {/*aqui vai a imagem se der certo*/}
            </div>
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
          </div>
          <div className="w-full">
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
          </div>
          <div className="w-full">
            <div className="w-full h-64 bg-gray-300  rounded-lg"></div>
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
          </div>
          <div className="w-full">
            <div className="w-full h-64 bg-gray-300  rounded-lg"></div>
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ServicesJuia
