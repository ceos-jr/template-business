import Image from "next/image"

{
  /*nao gostei da fonte branca do texto mas nao sei oq ficaria melhor. Não tem como colocar sombra?*/
}

const ServicesJuia = () => {
  return (
    <section className="bg-gradient-to-r from-zinc-200 to-slate-800">
      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mb-12 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:gr-cols-3">
          <div className="w-full">
            <div className="w-full h-64 bg-gray-300 rounded-lg relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1575237402880-4b496a83ae04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8?=force=true"
                alt="barquinho"
                objetc-fit="contain"
                fill
              />
            </div>
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg animate-pulse"></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg animate-pulse"></p>
          </div>
          <div className="w-full">
            <div className="w-full h-64 bg-gray-300 rounded-lg relative overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1650845918019-19d14b959b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=?force=true"
                alt="japon"
                objetc-fit="contain"
                fill
              />
            </div>
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg animate-pulse"></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg animate-pulse"></p>
          </div>
          <div className="w-full">
            <div className="w-full h-64 bg-gray-300 rounded-lg relative overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1543710998-0b2b2a3c3a01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto&force=true"
                alt="muie"
                objetc-fit="contain"
                fill
              />
            </div>
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg animate-pulse"></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg animate-pulse"></p>
          </div>
          <div className="w-full">
            <div className="w-full h-64 bg-gray-300  rounded-lg relative overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1673997058976-497b8e85f3f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto&force=true"
                alt="paisagem lixo"
                objetc-fit="contain"
                fill
              />
            </div>
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg animate-pulse">
            </h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg animate-pulse"></p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ServicesJuia
