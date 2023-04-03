import type { NextPage } from "next"
import { Inter } from "@next/font/google"
import Head from "next/head"
import Hero2 from "@/components/Heros/Hero2"
import StatisticsSection from "@/components/Stats/Stats1"

import Member2 from "@/components/Members/Members2"
import Member3 from "@/components/Members/Members3"
import Clients1 from "@/components/Clients/Clients1"
import Contact1 from "@/components/Contact/Contact1"
import Footer7 from "@/components/Footers/Footer7"
import Services3 from "@/components/Services/Services3"
import Navbar3 from "@/components/Nav-Header/Navbar3"
import StatisticsSectionMx30 from "@/components/Stats/Stats2"
import Services5 from "@/components/Services/Services5"
import Services2 from "@/components/Services/Services2"
import Footer6 from "@/components/Footers/Footer6"
import Clients2 from "@/components/Clients/Clients2"
import { Contact2 } from "@/components/Contact/Contact2"

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
        <Navbar3 />
        <Hero2 />
        <Services2 />
        <Member2 />
        <StatisticsSectionMx30 />
        <Clients2 />
        <Contact2 />
        <Member3 />
        <StatisticsSectionMx30 />
        <Clients2 />
        origin/main
      </main>
      <Footer6 />
    </div>
  )
}

export default Home
