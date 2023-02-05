import type { NextPage } from "next";
import { Inter } from "@next/font/google";
import Head from "next/head";
import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NossosServicos from "../components/NossosServicos";
import Estatisticas from "../components/Estatisticas";
import NossoTime from "../components/NossoTime";
import ProvaSocial from "../components/ProvaSocial";

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
      <SubHeader />
      <Header />
      <main className="w-full min-h-screen">
        <Hero />
        <NossosServicos />
        <Estatisticas />
        <ProvaSocial />
        <NossoTime />
      </main>
    </div>
  );
};

export default Home;
