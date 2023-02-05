import type { NextPage } from "next";
import { Inter } from "@next/font/google";
import Head from "next/head";
import SubHeader1 from "../components/Nav-Header/SubHeader1";
import Header1 from "../components/Nav-Header/Header1";
import Hero1 from "../components/Heros/Hero1";
import Services1 from "../components/Services/Services1";
import StatisticsSection from "../components/Stats/Stats1";
import Member1 from "../components/Members/Members1";
import Clients1 from "../components/Clients/Clients1";
import Footer2 from "../components/Footers/Footer2";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Home: NextPage = () => {
  return (
    <div className={`${inter.variable} flex flex-col items-center font-inter`}>
      <Head>
        <title>Finance Business</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SubHeader1 />
      <Header1 />
      <main className="w-full min-h-screen">
        <Hero1 />
        <Services1 />
        <StatisticsSection />
        <Clients1 />
        <Member1 />
        <Footer2 />
      </main>
    </div>
  );
};

export default Home;
