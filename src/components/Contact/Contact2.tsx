import Image from "next/image"

const Contact2 = () => {
    return(
        <div className="w-full pb-16">
            <div className="-z-10 w-full fixed">
                <Image
                    src = "https://raw.githubusercontent.com/vercel/next.js/canary/examples/image-component/public/mountains.jpg://github.com/vercel/next.js/blob/canary/examples/image-component/public/mountains.jpg?raw=true"
                    alt = "img"
                    width={400}
                    height={400}
                />
            </div>
            <div className="flex items-center pb-8 justify-center">
                <h1 className="font-sans text-5xl font-bold"> We are ready, are you? </h1>
            </div>
            <form className="flex flex-col items-center justify-center">
                <input type="name" name="" id="" placeholder="Name" className="w-2/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"/>
                <input type="email" name="" id="" placeholder="E-Mail" className="w-2/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"/>
                <input type="phone" name="" id="" placeholder="Phone" className="w-2/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"/>
                <textarea id="message" rows={6} className="block p-2.5 w-2/5 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" placeholder="Write your thoughts here..."></textarea>
                
            </form>
            <div className="flex py-8 align-middle justify-center items-center">
                <button type="button" className="focus:outline-none w-40 text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Send</button>
            </div>
        </div>
    )

}

export default Contact2