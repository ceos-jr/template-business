import type { NextPage } from "next"
import { Inter } from "@next/font/google"
import Head from "next/head"

import Hero3 from "@/components/Heros/Hero3"
import Member1 from "@/components/Members/Members1"
import Hero2 from "@/components/Heros/Hero2"
import Member2 from "@/components/Members/Members2"
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
import Navbar2 from "@/components/Nav-Header/NavBar2"
import Contact2 from "@/components/Contact/Contact2"
import Navbar4 from "@/components/Nav-Header/NavBar4"
import FooterLucas from "@/components/Footers/Footer4"



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
        <Navbar4/>
        <Hero2 />
        <Services3 />
        <Clients1 />
        <Member2 />
        <Contact2 />
        </main>
      <FooterLucas />
    </div>
  )
}

export default Home
