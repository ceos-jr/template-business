import type { NextPage } from "next"
import { Inter } from "@next/font/google"
import Head from "next/head"
import Hero2 from "@/components/Heros/Hero2"
import Members1 from "@/components/Members/Members1"
import Members4 from "@/components/Members/Members4"
import MemberCard1 from "@/components/Members/MemberCard1"
import StatisticsSection from "@/components/Stats/Stats4"
import Member2 from "@/components/Members/Members2"
import Clients1 from "@/components/Clients/Clients1"
import Contact1 from "@/components/Contact/Contact1"
import Footer7 from "@/components/Footers/Footer7"
import Services3 from "@/components/Services/Services3"
import Navbar2 from "@/components/Nav-Header/NavBar2"
import Contact2 from "../components/Contact/Contact2"

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
        <Hero2 />
        <Services3 />
        <StatisticsSection />
        <Clients1 />
        <Members1 />
        <Members4 />
        <Member2 />
        <Contact1 />
        <Contact2 />
      </main>
      <Footer7 />
    </div>
  )
}

export default Home
