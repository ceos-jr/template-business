import type { NextPage } from "next"
import { Inter } from "@next/font/google"
import Head from "next/head"
import Navbar5 from "@/components/Nav-Header/Navbar5"
import Hero1 from "@/components/Heros/Hero1"
import Services5 from "@/components/Services/Services5"
import StatisticsSection from "@/components/Stats/Stats1"
import Member1 from "@/components/Members/Members1"
import Clients1 from "@/components/Clients/Clients1"
import Contact1 from "@/components/Contact/Contact1"
import Footer6 from "@/components/Footers/Footer6"
import Services4 from "@/components/Services/Sevices4"
import Services2 from "@/components/Services/Services2"
import Navbar3 from "@/components/Nav-Header/Navbar3"
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const Home: NextPage = () => {
  return (
    <div className={`${inter.variable} flex flex-col items-center font-inter`}>
      <Head>
        <title>Finance Business</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className="w-full min-h-screen"> 
        <Navbar5/>
        <Hero1 />
        <Services2 />
        <StatisticsSection />
        <Clients1 />
        <Member1 />
        <Contact1 />
      </main>
      <Footer6 />
    </div>
  )
}

export default Home
