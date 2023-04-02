import type { NextPage } from "next"
import { Inter } from "@next/font/google"
import Head from "next/head"
import Hero3 from "@/components/Heros/Hero3"
import Member1 from "@/components/Members/Members1"
import ClientsJuia from "@/components/Clients/ClientsJuia"
import Contact1 from "@/components/Contact/Contact1"
import Footer7 from "@/components/Footers/Footer7"
import Services3 from "@/components/Services/Services3"
import Navbar2 from "@/components/Nav-Header/NavBar2"
import StatisticsSection from "@/components/Stats/Stats4"

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
        <Navbar2 />
        <Hero3 />
        <Services3 />
        <StatisticsSection />
        <ClientsJuia />
        <Member1 />
        <Contact1 />
      </main>
      <Footer7 />
    </div>
  )
}

export default Home
