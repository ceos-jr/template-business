import type { NextPage } from "next"
import { Inter } from "@next/font/google"
import Head from "next/head"
import Hero3 from "@/components/Heros/Hero3"
import StatisticsSection from "@/components/Stats/Stats1"
import Member1 from "@/components/Members/Members1"
import Clients1 from "@/components/Clients/Clients1"
import Contact1 from "@/components/Contact/Contact1"
import {
  Footer1,
  Footer2,
  Footer3,
  Footer4,
  Footer5,
  Footer6,
  Footer7,
} from "@/components/Footers"
import Services3 from "@/components/Services/Services3"
import Navbar3 from "@/components/Nav-Header/Navbar3"
import Navbar2 from "@/components/Nav-Header/NavBar2"
import NavBar4 from "@/components/Nav-Header/NavBar4"
import Services4 from "@/components/Services/Sevices4"

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
        <NavBar4 />
        <Hero3 />
        <Services4 />
        <Navbar2 />
        <Hero4 />
        <Services3 />
        <StatisticsSection />
        <Clients1 />
        <Member1 />
        <Contact1 />
      </main>
      <Footer4 />
    </div>
  )
}

export default Home
